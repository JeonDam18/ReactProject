import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Join from './component/Join';
import Main from './component/Main';
import Profile from './component/Profile';
import FeedInsert from './component/FeedInsert';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/feedInsert" element={<FeedInsert />} />
      </Routes>
    </Router>
  );
};

export default App;
