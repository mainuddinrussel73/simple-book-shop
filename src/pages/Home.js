import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import BookCard from '../components/BookCard';
import '../styles/BookCard.css';

const Home = () => {
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
    .then(data => {
      setBooks(data);
      console.log(data)
    }
      );
  }
  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <Banner />
      <section className="book-section">
        <h2 className='book-section-title'>Our Books</h2>
        <div className="book-card-grid" style={{ margin : "20px" }}>
          {books.map(book => (
            <BookCard key={book.bookId} book={book} imageUrl={book.image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
