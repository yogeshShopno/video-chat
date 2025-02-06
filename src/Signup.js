import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Signup() {
    const [toggle, setToggle] = useState("hi");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [url, seturl] = useState("");

    useEffect(() => {
        if (url) {
            console.log("URL updated:", url);
        }
    }, [url]);

    const handleSubmit = async (y) => {
        if (y == 0) {
            seturl("http://localhost:5000/user/signup")

            console.log(seturl, "signup")
        } else if (y == 1) {
            seturl("http://localhost:5000/user/login")
            console.log(seturl, "signup")

        }


        const payload = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(url, payload);

            if (response.data.status === 200) {
                console.log(response.data.message);
            } else {
                console.error("Failed to process request");
            }
        } catch (error) {
            console.error("Error sending request:", error);
        }
    };


    return (<>
        <div className="section-container">
            <div className="signup-card">

                {toggle ? <h2>Sign Up</h2> : <h2>Login</h2>}

                <form >
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
                    {
                        toggle ? <button onClick={() => handleSubmit(0)} type="submit">Sign Up</button> : <button onClick={() => handleSubmit(1)} type="submit">Login</button>


                    }
                    <p>
                        Already have an account? <span onClick={() => { setToggle(!toggle) }}>{toggle ? "Sign up" : "login"}</span>
                    </p>
                </form>
            </div>
        </div>
    </>)
}
;
export default Signup;