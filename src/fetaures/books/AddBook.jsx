import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BookSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const numberOfBooks = useSelector((state)=> state.booksReducer.books.length)
    const handleSubmit = () => {
        // e.prventDefault();
        const book = {id:uuidv4() , title};
        dispatch(addBook(book))
        navigate('/show-books',{replace:true})
    }
    return (
            <div>
                 <h1>Add Book</h1>
                 <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="Title">Title: </label>
                        <input type="text" id='title' name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
                    </div>
                    <button type="submit">Add Book</button>
                 </form>
            </div>
        );
};

export default AddBook;