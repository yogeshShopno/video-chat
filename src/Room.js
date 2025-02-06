import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate ,useLocation  } from "react-router-dom";
import axios from "axios";


function Room() {
    const { roomcode } = location.state;  // Default to an empty object if no state is passed

    return (
        <div>
          <iframe
            allow="camera; microphone; display-capture; fullscreen; clipboard-read; clipboard-write; autoplay"
            src={`https://video-chat-clone.netlify.app/room/${roomcode}`}
            style={{ height: '100vh', width: '100vw', border: '0' }}
          ></iframe>
        </div>
      );
};
export default Room;