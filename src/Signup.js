import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Signup() {
  const [user, setUser] = useState("hi");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:5000/user/signup", payload);

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
    <div class="section-container">
      <div class="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>


  </>)
}
;
export default Signup;
