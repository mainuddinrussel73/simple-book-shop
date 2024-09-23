import React from 'react';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <div className="blog-page-container">
      <h1>Blog</h1>
      <div className="blog-post">
        <h2>How to Choose the Right Book for You</h2>
        <p>
          Choosing the right book can be tricky! In this article, we share tips on how to find books that match your interests, preferences, and reading goals.
        </p>
        <button className="read-more">Read More</button>
      </div>
      <div className="blog-post">
        <h2>Top 5 Fiction Books of 2023</h2>
        <p>
          Here are our picks for the top 5 fiction books of the year. From gripping thrillers to heartwarming romances, we've got a recommendation for every reader.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
};

export default Blog;
