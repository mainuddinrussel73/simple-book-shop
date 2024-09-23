import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-page-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h2>What is the return policy?</h2>
        <p>We offer a 30-day return policy for all books in their original condition. Please contact customer service for assistance.</p>
      </div>
      <div className="faq-item">
        <h2>How can I track my order?</h2>
        <p>Once your order is shipped, you'll receive a tracking link via email. You can use that link to check the status of your delivery.</p>
      </div>
    </div>
  );
};

export default FAQ;
