import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BookSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
 const dispatch = useDispatch();
 const books = useSelector((state) =>  state.booksReducer.books)
 const handleDelete = (id) => {
    dispatch(deleteBook(id))
}
return (
        <div>
           <h1>List Of Books</h1>
           <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { books && books.map((book)=> {
                    const {id, title} = book;

                    return <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>
                            <Link to="/edit-book" state={{id,title}}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={()=>handleDelete(id)}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
           </table>
        </div>
    );
};

export default BooksView;