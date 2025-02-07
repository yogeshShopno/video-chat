import React from "react";

function Room() {
  return (
    <div style={{ height: "100vh", width: "100vw", border: 0 }}>
      <iframe
        allow="camera; microphone; display-capture; fullscreen; clipboard-read; clipboard-write; autoplay"
        src="https://sfu.mirotalk.com/newroom"
        style={{ height: "100%", width: "100%", border: "none" }}
        title="Video Chat Room"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Room;
