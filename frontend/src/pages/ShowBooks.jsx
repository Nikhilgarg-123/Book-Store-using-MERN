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

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="text-center mt-4 text-red-600">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      {book ? (
        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">{book.author}</h2>
          <p className="mb-4">{book.description}</p>
          <div className="space-y-2">
            <p><strong>Published Date:</strong> {new Date(book.publishedDate).toLocaleDateString()}</p>
            <p><strong>Page Count:</strong> {book.pageCount}</p>
            <p><strong>Category:</strong> {book.category}</p>
          </div>
        </div>
      ) : (
        <div className="text-center">No book found.</div>
      )}
    </div>
  );
};

export default ShowBooks;
