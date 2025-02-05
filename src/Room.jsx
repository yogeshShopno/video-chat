import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import { useLocation  } from "react-router-dom/cjs/react-router-dom.min";

export default function Room() {
  const location = useLocation();
  const { roomCode } = location.state || {}; 
  const history = useHistory();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Navbar */}
      <div className="absolute top-0 w-full flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-white">Video Chat</h1>
        <button
        onClick={() => history.push('/dashboard')}
        className="px-4 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
      >
        Start Videocall
      </button>
        
      </div>

      {/* Main Content */}
      <p className="text-lg text-gray-400 mb-6 mt-5">
         {roomCode}
        </p>

      {/* Footer */}
      <div className="absolute bottom-4 text-gray-400 text-sm">
        Built with ❤️ using React & Node
      </div>
    </div>
  );
}
