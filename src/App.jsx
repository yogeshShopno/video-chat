import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Room from './Room';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/room/:id" component={Room} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const history = useHistory();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
       <div className="absolute top-0 w-full flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <div   className="flex flex-row w-full m-4 ">
        <button
          className="px-4   m-2 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
          onClick={() => alert("signup  !")}
        >
          Signup
        </button>
        <button
          className="px-4 m-2 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
          onClick={() => alert("login !")}
        >
          Login
        </button>
        </div>
        
      </div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Video Chat</h1>
      <button
        onClick={() => history.push('/dashboard')}
        className="px-4 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
      >
        Start Videocall
      </button>
      
    </div>
    
  );
}

export default App;
