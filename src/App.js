import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound'; // 404 Page
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [books, setBooks] = useState([]);
  const url = "https://api.jsonbin.io/v3/b/66f17ec1ad19ca34f8ab53d0/latest";
  const apiKey = "$2a$10$LLcAfF59gQLk0czNgZlJ..xPiPK3fuLRoPzGQTIbzZDnHcQ9h.V3G";

  const getData=()=>{
    fetch(url, {
      method: "GET",
      headers: {
        "X-Master-Key": apiKey
      }
    })
    .then(response => response.json())
    .then(data => {
      setBooks(data.record);
      console.log(data.record)
    }
      );
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <ToastContainer />
      <Routes>
      <Route path="simple-book-shop/" element={<Home />} />
        <Route path="simple-book-shop/about" element={<About />} />
        <Route path="simple-book-shop/blog" element={<Blog />} />
        <Route path="simple-book-shop/faq" element={<FAQ />} />
        
        <Route path="simple-book-shop/book/:bookId" element={<BookDetails books={books} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
