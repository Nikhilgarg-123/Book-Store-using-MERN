import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowBooks = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:3000/book/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {book ? (
        <div>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <p>{book.description}</p>
          <p><strong>Published Date:</strong> {new Date(book.publishedDate).toLocaleDateString()}</p>
          <p><strong>Page Count:</strong> {book.pageCount}</p>
          <p><strong>Category:</strong> {book.category}</p>
        
        </div>
      ) : (
        <div>No book found.</div>
      )}
    </div>
  );
};

export default ShowBooks;
