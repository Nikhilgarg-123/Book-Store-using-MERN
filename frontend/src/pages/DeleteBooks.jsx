import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteBooks = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate(); // To redirect after deletion
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/book/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('Book deleted successfully!');
        // Optionally navigate away after deletion
        setTimeout(() => {
          navigate('/'); // Redirect to home or another page
        }, 2000);
      } else {
        setMessage('Failed to delete the book.');
      }
    } catch (error) {
      setMessage('An error occurred while deleting the book.');
    }
  };

  useEffect(() => {
    handleDelete(); // Call the delete function on component mount
  }, [id]);

  return (
    <div>
      <h1>Delete Book</h1>
      <p>{message}</p>
    </div>
  );
};

export default DeleteBooks;
