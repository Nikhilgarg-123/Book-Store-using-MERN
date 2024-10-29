import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateBooks from './pages/CreateBooks.jsx';
import Home from './pages/Home.jsx';
import ShowBooks from './pages/ShowBooks.jsx';
import UpdateBooks from './pages/UpdateBooks.jsx';
import DeleteBooks from './pages/DeleteBooks.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/createbook" element={<CreateBooks />} />
      <Route path="/books/showbook/:id" element={<ShowBooks />} />
      <Route path="/books/updatebook/:id" element={<UpdateBooks />} />
      <Route path="/books/deletebook/:id" element={<DeleteBooks />} />
    </Routes>
    <Footer></Footer>
    </>
    );
}

export default App;



