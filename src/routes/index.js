import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import BooksView from "../fetaures/books/BooksView";
import AddBook from "../fetaures/books/AddBook";
import Footer from "../layouts/Footer";
import EditBook from "../fetaures/books/EditBook";

const index = () => {

    return <BrowserRouter>
      <h1> React redux-toolkit Project</h1>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/show-books" element={<BooksView />} />
         <Route path="/add-book" element={<AddBook />} />
         <Route path="/edit-book" element={<EditBook />} />
         <Route path="*" element={<Error />} />
       </Routes>
       <Footer />
    </BrowserRouter>;
};

export default index;