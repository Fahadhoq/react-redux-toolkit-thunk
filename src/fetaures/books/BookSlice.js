import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
    books: [
        {id: uuidv4() , title: 'bangladesh history'},
        {id: uuidv4()  , title: 'bangladesh animale'},
    ]
}

const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state,action) => {
            state.books.push(action.payload)
        },
        editBook: (state,action) => {
            const {id,title} = action.payload
            let isBookExist = state.books.filter(book => book.id == id);
            if(isBookExist){
                isBookExist[0].title = title;
            }
        },
        deleteBook: (state,action) => {
            const updatedBooks = state.books.filter(book => book.id != action.payload);
            state.books = updatedBooks
        }
    }
})

export const {showBooks,addBook,editBook,deleteBook} = booksSlice.actions;
export default booksSlice.reducer;