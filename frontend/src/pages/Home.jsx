import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete, MdOutlineAddBox } from 'react-icons/md';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:3000/books")
            .then((res) => {
                setBooks(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Books List</h1>
           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{book.title}</h2>
                        <p className="text-gray-700 mb-4">{book.description}</p>
                        
                        <table className="w-full mb-4">
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-2 text-gray-600"><strong>Author:</strong></td>
                                    <td className="py-2 text-gray-800">{book.author}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 text-gray-600"><strong>Pages:</strong></td>
                                    <td className="py-2 text-gray-800">{book.pageCount}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 text-gray-600"><strong>Category:</strong></td>
                                    <td className="py-2 text-gray-800">{book.category}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 text-gray-600"><strong>Published:</strong></td>
                                    <td className="py-2 text-gray-800">{new Date(book.publishedDate).toLocaleDateString()}</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div className="flex justify-between mt-4">
                            <Link to={`/books/updatebook/${book._id}`} className="text-blue-600 hover:text-blue-800">
                                <AiOutlineEdit className="inline-block mr-1" />
                                Edit
                            </Link>
                            <Link to={`/books/showbook/${book._id}`} className="text-green-600 hover:text-green-800">
                                <BsInfoCircle className="inline-block mr-1" />
                                Info
                            </Link>
                            <Link to={`/books/deletebook/${book._id}`} className="text-red-600 hover:text-red-800">
                                <MdOutlineDelete className="inline-block mr-1" />
                                Delete
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
