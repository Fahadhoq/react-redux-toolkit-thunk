import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";
//toolkit project
import booksReducer from "../fetaures/books/BookSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        booksReducer: booksReducer
    }
})

export default store;