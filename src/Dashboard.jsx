import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Dashboard() {
  const [roomCode, setRoomCode] = useState("");
  const [CreateRoomCode, setCreateRoomCode] = useState("");

  const createRoom = () => {
    const newRoom = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCreateRoomCode(newRoom);

 };

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = async (x) => {
   const payload = {
     email: "test@example.com",
     password: "123456",
   };
 
   try {
     const response = await axios.post("http://localhost:5000/user/signup", payload);
 
     if (response.data.status === 200) {
       console.log(response.data.message);
     } else {
     
       console.error('Failed to process request');
     }
   } catch (error) {
     console.error('Error sending request:', error);
   }
 };
 const navigate = useNavigate();

  return (
    
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Navbar */}
      <div className="absolute top-0 w-full flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-white">Video Chat</h1>
        
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-6">Connect with Anyone, Anytime</h2>
        <p className="text-lg text-gray-400 mb-6">
          Start or join a video call instantly with a unique room code.
        </p>
        <form>
        <label>Enter your name:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="px-4 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
          onClick={() => handleSubmit()}
        >
          signup

        </button>
        <button
          className="px-4 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
      
        >
          signIn

        </button>
      </form>

        <div className="flex space-x-4">
          {/* Create Room Button */}
          <button
            onClick={createRoom}
            className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold text-lg shadow-md hover:bg-blue-600"
          >
            Create Room
          </button>

          {/* Join Room Input & Button */}
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Room Code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              className="p-3  rounded-l-lg text-black outline-none"
            />
            <button
            
              className="px-6 py-3 bg-green-500 rounded-r-lg text-white font-semibold text-lg shadow-md hover:bg-green-600"
            >
              Join
            </button>
            <button onClick={() => navigate("/target-page")}>Check</button>

           
          </div>
        
        </div>
        <p className="text-lg text-gray-400 mb-6 mt-5">
         {CreateRoomCode}
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-gray-400 text-sm">
        Built with ❤️ using React & Node
      </div>
    </div>
  );
}
