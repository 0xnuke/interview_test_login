import { useState } from "react";
import { signInWithGoogle, signInWithFacebook, auth } from "./firebaseConfig";
import './index.css';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(loginEmail, loginPassword)
    };

    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
    };

    return (
        <div>
            <button onClick={signInWithGoogle} className="google">
                <i className="fa fa-google fa-fw"></i> Login with Google
            </button>
            <button onClick={signInWithFacebook} className="facebook">
                <i className="fa fa-facebook fa-fw"></i> Login with Facebook
            </button>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>Email:</label>
                    <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />

                    <label>Password:</label>
                    <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />

                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
            <div>
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <label>Email:</label>
                    <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />

                    <label>Password:</label>
                    <input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />

                    <button type="submit" className="btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
