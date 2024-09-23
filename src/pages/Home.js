import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import BookCard from '../components/BookCard';
import '../styles/BookCard.css';

const Home = () => {
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
