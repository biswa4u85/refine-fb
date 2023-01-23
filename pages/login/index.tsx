import { AuthPage as AntdAuthPage, AuthProps } from "@pankod/refine-antd";
import { useRouterContext } from "@pankod/refine-core";
import bg from '../../public/images/login-bg.png'
const authWrapperProps = {
    style: {
        background:
            `radial-gradient(50% 50% at 50% 50%,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 100%),url(${bg.src})`,
        backgroundSize: "cover",
    },
};

const renderAuthContent = (content: React.ReactNode) => {
    const { Link } = useRouterContext();
    return (
        <div
            style={{
                maxWidth: 408,
                margin: "auto",
            }}
        >
            <Link to="/">
                <img
                    style={{ marginBottom: 26 }}
                    src="/images/fine-foods-login.svg"
                    alt="Logo"
                    width="100%"
                />
            </Link>
            {content}
        </div>
    );
};

const Login: React.FC<AuthProps> = () => {
    return (
        <AntdAuthPage
            wrapperProps={authWrapperProps}
            renderContent={renderAuthContent}
            type="login"
            formProps={{
                initialValues: {
                    email: "biswa4u85@gmail.com",
                    password: "demo123",
                },
            }}
            rememberMe={false}
            registerLink={false}
        />
    );
};

export default Login