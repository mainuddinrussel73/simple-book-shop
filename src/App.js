import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import BookDetails from './pages/BookDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [books, setBooks] = useState([]);
  
  const getData=()=>{
    fetch('/books.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    .then(response => response.json())
    .then(data => setBooks(data));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      {/* Routes and other components */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        
        {/* Use an arrow function to pass props */}
        <Route path="/book/:bookId" element={<BookDetails books={books} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
