import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const [roomCode, setRoomCode] = useState("");
  const [createRoomCode, setCreateRoomCode] = useState("");

  const navigate = useNavigate();
  const [user, setUser] = useState("jg        ");
  const createRoom = () => {
    if (user) {
      const newRoom = Math.random().toString(36).substring(2, 8).toUpperCase();
      setCreateRoomCode(newRoom);
    }

  };

  return (
    <section className="dashboard-container">
      <div >
        <div className="dashboard-card">
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
                className="create-room-button"
              >
                Create Room
              </button>
              {createRoomCode && (
                <p className="text-lg text-gray-400 mb-6 mt-5">{createRoomCode}</p>
              )}
              {/* Join Room Input & Button */}
              {user ? (
                <div style={{display:"flex",gap:"20px"}}>
                  <input
                    type="text"
                    placeholder="Enter Room Code"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                    className="input-field"
                  />
                  <button className="join-button">Join</button>
                  {/* <button onClick={() => navigate("/target-page")}>Check</button> */}
                </div>
              ) : (
                <p>Please log in to create a room</p>
              )}
            </div>

          </div>

          {/* Footer */}

        </div>

      </div>
      <div className="dashboard-footer">
        Built with ❤️ using React & Node. <br />
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    </section>
  );
}
