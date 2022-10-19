import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import UserContext from './components/Login/user';    
import Dashboard from './components/dashboard/dashboard';
import HealthCard from './components/healthCard/healthCard';
import Login from './components/Login/login';
import Registration from './components/registration/registration';

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/healthcard" element={<HealthCard />}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
