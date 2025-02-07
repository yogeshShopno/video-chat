import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [isSignup, setIsSignup] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [url, setUrl] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (url) {
            console.log("URL updated:", url);
        }
    }, [url]);

    const handleSubmit = async (event, isSignup) => {
        event.preventDefault();

        const endpoint = isSignup ? "signup" : "login";
        const url = `https://miro-back.vercel.app/user/${endpoint}`;
        const payload = { email, password };

        try {
            const response = await axios.post(url, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data.status === true) {
                localStorage.setItem("token", response.data.token);
                alert("Login successfully")
                navigate("/");


            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("Error sending request");
       
            console.error("Error sending request:", error);
        }
    };


    return (
        <div className="section-container">
            <div className="signup-card">
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                <form onSubmit={(e) => handleSubmit(e, isSignup)}>
                    <label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
                    <p>
                        {isSignup ? "Already have an account?" : "Don't have an account?"}
                        <span onClick={() => setIsSignup(!isSignup)}>
                            {isSignup ? " Login" : " Sign up"}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
