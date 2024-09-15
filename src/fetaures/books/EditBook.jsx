import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "./BookSlice";
import { useDispatch } from "react-redux";

const EditBook = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
     
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);

    const handleSubmit = () => {
        dispatch(editBook({id,title}))
        navigate('/show-books',{replace:true})
    }

return (
    <div>
        <h1>Edit Book</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-field">
            <label htmlFor="ID">ID: </label>
            <label htmlFor="Id">{id}</label>
        </div>
        <div className="form-field">
            <label htmlFor="Title">Title: </label>
            <input type="text" id='title' name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
        </div>
        <button type="submit">Update </button>
        </form>
    </div>
    );
};

export default EditBook;