// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold">
                    <FaHome className="inline-block mr-1" />
                    Home
                </Link>
                <Link to="/books/createbook" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    <MdOutlineAddBox className="inline-block mr-1" />
                    Create Book
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
