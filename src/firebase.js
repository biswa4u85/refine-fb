import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAKgjTf6GwWwrhAwdlEbCurnMsR_dh_wm0",
    authDomain: "carrybags-f1502.firebaseapp.com",
    projectId: "carrybags-f1502",
    storageBucket: "carrybags-f1502.appspot.com",
    messagingSenderId: "223123782735",
    appId: "1:223123782735:web:bfd2556451067e39a4be3a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);