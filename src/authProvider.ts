import { AuthProvider } from "@pankod/refine-core";
import { notification } from "@pankod/refine-antd";
import nookies from "nookies";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    console.log('aa')
    try {
      let user = await signInWithEmailAndPassword(auth, email, password)
      nookies.set(null, "auth", JSON.stringify(user.user), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },
  forgotPassword: async ({ email }) => {
    console.log('bb')
    try {
      await sendPasswordResetEmail(auth, email)
      notification.success({
        message: "Reset Password",
        description: `Reset password link sent to "${email}"`,
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },
  logout: () => {
    console.log('cc')
    nookies.destroy(null, "auth");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: (ctx) => {
    const cookies = nookies.get(ctx);
    console.log('dd', cookies)
    return cookies["auth"] ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    console.log('ee')
    const auth = nookies.get()["auth"];
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return Promise.resolve(parsedUser.roles);
    }
    return Promise.reject();
  },
  getUserIdentity: () => {
    console.log('ff')
    const auth = nookies.get()["auth"];
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return Promise.resolve(parsedUser.username);
    }
    return Promise.reject();
  },
};