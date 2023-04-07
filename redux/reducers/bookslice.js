import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
    name: 'books',
    initialState:{
        panier: [],
        idCounter: 0,
    },
    reducers : {
        addTask: (state, action) => {
            const books = { ...action.payload, id: state.idCounter };
            state.panier.push(books);
            state.idCounter++;
            console.log(state.panier);
        },
        removeTask: (state, action) => {
            const index = state.panier.findIndex(snk => snk.id === action.payload.id);
            if (index !== -1) {
                const bookToRemove = state.panier[index];
                state.panier.splice(index, 1);
                state.Pprice -= bookToRemove.prix; 
            }
        },
    }
})

export const {addTask, removeTask} = bookSlice.actions