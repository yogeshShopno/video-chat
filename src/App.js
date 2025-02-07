import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Dashboard from './Page/Dashboard';
import axios from "axios";
import Signup from './Page/Signup';
import Room from './Page/Room';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </Router>

  </>

  );
}


export default App;