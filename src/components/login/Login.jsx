    import React, { useContext } from "react";
    import { loginLogo, loginHero, google } from "../../Assets";
    import { signInWithPopup } from "firebase/auth";
    import { auth, provider } from "../../firebase";
    import { myContext } from "../../context/myContext";

    import "./login.css";

    const Login = () => {
    const { setUser } = useContext(myContext);

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result?.user);
            console.log(result?.user);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="container">
        <nav>
            <a href="/">
            <img src={loginLogo} alt="login-logo" />
            </a>
            <div>
            <button className="join_btn">Join Now</button>
            <button className="signIn_btn">
                <a href="#">Sign In</a>
            </button>
            </div>
        </nav>
        <section>
            <div className="hero">
            <h1>Welcome to your professional community</h1>
            <img src={loginHero} alt="image-hero" />
            </div>
            <div className="form" onClick={signIn}>
            <button className="google_btn">
                <img src={google} alt="google" />
                Sign In with Google
            </button>
            </div>
        </section>
        </div>
    );
    };

    export default Login;
