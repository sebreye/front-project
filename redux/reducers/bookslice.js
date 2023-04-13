
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
    favorites: []
};
export const bookSlice = createSlice({
    name: 'bookslice',
    initialState,
    reducers: {
        addTask(state, action) {
            const book = action.payload;
            state.books.push(book);
    },
    toggleFavorite(state, action) {
        const bookId = action.payload;
        const book = state.books.find((book) => book.id === bookId);

        if (book) {
            if (state.favorites.includes(bookId)) {
            state.favorites = state.favorites.filter((id) => id !== bookId);
        } else {
            state.favorites.push(bookId);
        }
    }
    },
    },
});

export const { addTask, toggleFavorite } = bookSlice.actions;

