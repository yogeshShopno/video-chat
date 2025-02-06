import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Room from './Room';

import Header from './Header';
import Signup from './Signup';
import axios from "axios";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/room/:id" component={Room} />
          <Route path="/" component={Home} />
          <Route path="/signup" component={Signup} />


        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (x) => {
    const payload = {
      email: "test@example.com",
      password: "123456",
    };
  
    try {
      const response = await axios.post("http://localhost:5000/user/signup", payload);
  
      if (response.data.status === 200) {
        console.log(response.data.message);
      } else {
        toast.error(response.data.message);
        console.error('Failed to process request');
      }
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };
  
  
  

  return (

    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <form>
        <label>Enter your name:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="px-4 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
          onClick={() => handleSubmit()}
        >
          signup

        </button>
        <button
          className="px-4 py-2 bg-red-500 rounded-lg font-semibold hover:bg-red-600"
          onClick={() => handleSubmit()}
        >
          signIn

        </button>
      </form>




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
