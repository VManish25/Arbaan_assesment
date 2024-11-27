import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Dashboard userId={1} />} />
        <Route path="/post/:postId" element={<PostDetails />} /> 
      </Routes>
    </Router>
  );
};

export default App;
