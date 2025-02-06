import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  
  const [roomCode, setRoomCode] = useState("");
  const [createRoomCode, setCreateRoomCode] = useState("");
  
  const navigate = useNavigate();
const [user, setUser] = useState(null);
  const createRoom = () => {
    if(user){
      const newRoom = Math.random().toString(36).substring(2, 8).toUpperCase();
      setCreateRoomCode(newRoom);
    }
   
  };

  
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
     

        <div className="flex space-x-4 mt-6">
          {/* Create Room Button */}
          <button
            onClick={createRoom}
            className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold text-lg shadow-md hover:bg-blue-600"
          >
            Create Room
          </button>

          {/* Join Room Input & Button */}
          {user?
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Room Code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              className="p-3 rounded-l-lg text-black outline-none"
            />
            <button
              className="px-6 py-3 bg-green-500 rounded-r-lg text-white font-semibold text-lg shadow-md hover:bg-green-600"
            >Join
            </button>
            <button onClick={() => navigate("/target-page")}>Check</button>
          </div> :<p>please do login to create room 
             </p>}
        </div>
        {createRoomCode && (
          <p className="text-lg text-gray-400 mb-6 mt-5">{createRoomCode}</p>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-gray-400 text-sm">
        Built with ❤️ using React & Node
      </div>
    </div>
  );
}
