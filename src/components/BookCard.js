import React,  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../BookCard.css'; // Add styles for active class
import { usePalette } from 'react-palette'

const BookCard = ({ book, imageUrl }) => {
  console.log(book);
  const { data, loading, error } = usePalette(imageUrl)

  return (
    
    <div className="book-card"   key={book.id} style={{ color: data.darkVibrant, backgroundColor: data.lightMuted }}>
      <div className='left-card'>
        <img src={book.image} alt={book.bookName} />
        <div>
          {book.tags.map((tag, index) => (
            <span key={index} className="tag" style={{ backgroundColor: data.muted, color: data.lightVibrant}}>{tag}</span>
          ))}
        </div>
      </div>
      <div className='right-card'>
      <div  className="card-content" >
        
        <h2 className="book-title">{book.bookName}</h2>
        <p className="book-author" style={{ color: data.muted}}>by {book.author}</p>
        <p className="book-category" style={{ color: data.muted}}>Category: {book.category}</p>
        <p className="book-rating"style={{ color: data.muted}}>{book.rating} ⭐ rating</p>
        <Link to={`/book/${book.bookId}`}><button className="details-button" style={{ backgroundColor: data.muted, color: data.lightVibrant}}>Book Details</button></Link>
        <Link to={`/book/${book.bookId}`}><button className="details-button" style={{ backgroundColor: data.muted, color: data.lightVibrant}}>Download</button></Link>
        </div>
      </div>
     
     
      
    </div>
  );
};

export default BookCard;
