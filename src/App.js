import { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";
import Signup from './Signup';
import Room from './Room';

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