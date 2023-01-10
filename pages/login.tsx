import SignIn from "../components/authentication/SignIn";
import Head from "next/head";

const Login: React.FC = (props) => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <SignIn></SignIn>
    </>
  );
};

export default Login;
