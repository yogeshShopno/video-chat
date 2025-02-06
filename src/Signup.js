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

      
    return(<>
    <form onSubmit={handleSubmit}>
          <label>
            Enter your email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 m-2 rounded text-black"
              required
            />
          </label>
          <label>
            Enter your password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 m-2 rounded text-black"
              required
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
          >
            Sign Up
          </button>
        </form>
        </>)
}
;
export default Signup;
