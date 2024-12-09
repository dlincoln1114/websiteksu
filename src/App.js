import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
