import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'subscribe',
    initialState: {
        email: '',
        password: '',
        isSubscribed: false,
    },
    reducers: {
    subscribe: (state, action) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.isSubscribed = true;
        },
    },
    });
export const { subscribe } = loginSlice.actions;
    