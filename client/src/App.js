import React, { useContext } from 'react';
import { Context } from './context/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './components/Logout';
import UserProfile from './pages/UserProfile';
import Weather from './pages/Weather';
import Homepage from './pages';

function App() {
  const { user } = useContext(Context);
  // const user = localStorage.getItem('user');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/logout" element={<Logout />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/login" element={user ? <UserProfile /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
