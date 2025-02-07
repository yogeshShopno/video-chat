import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const [roomCode, setRoomCode] = useState("");
  const [createRoomCode, setCreateRoomCode] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();

  const createRoom = () => {
    if (token) {
      const newRoom = Math.random().toString(36).substring(2, 8).toUpperCase();
      setCreateRoomCode(newRoom);
    }
  };
  useEffect(() => {
    if (!token) {
      setToken(localStorage.getItem("token"))
    }
  }, [])
  return (
    <>

      <section className="dashboard-container-signup">
        <div >
          <div className="auth-buttons">
            <button onClick={() => navigate("/signup")} className="auth-button sign-up">Sign Up</button>
          </div>
          <div className="dashboard-container">
            <div>
              <div className="dashboard-card">
                <h1 className="text-2xl font-bold text-white">Video Chat</h1>

                <div className="flex flex-col items-center text-center">
                  <h2 className="text-4xl font-bold mb-6">Connect with Anyone, Anytime</h2>
                  <p className="text-lg text-gray-400 mb-6">
                    Start or join a video call instantly with a unique room code.
                  </p>
                  <div className="flex space-x-4 mt-6">

                    <button
                      onClick={createRoom}
                      className="create-room-button"
                    >
                      Create Room
                    </button>
                    {createRoomCode && (
                      <p className="text-lg text-gray-400 mb-6 mt-5">{createRoomCode}</p>
                    )}

                    {token ? (
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="Enter Room Code"
                          value={roomCode}
                          onChange={(e) => setRoomCode(e.target.value)}
                          className="input-field"
                        />
                        <button onClick={() => { navigate("/room") }} className="join-button">Join</button>

                      </div>
                    ) : (
                      <p>Please log in to create a room</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-footer">
            Built with ❤️ using React & Node. <br />
            <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        </div>
      </section>

    </>

  );
}
