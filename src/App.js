import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/post');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/post/:id" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

