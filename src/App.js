import { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";
import Signup from './Signup';

function App() {
  return (<>
      <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/target-page" element={<Signup />} />
    </Routes>
  </Router>

  </>

  );
}


  export default App;
