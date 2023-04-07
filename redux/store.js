import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./reducers/bookslice";
import { loginSlice } from "./reducers/loginSlice";
export const Store = configureStore({
    reducer:{
        booklist: bookSlice.reducer,
        login: loginSlice.reducer
    }
})
