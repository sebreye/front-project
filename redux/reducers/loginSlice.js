import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'subscribe',
    initialState: {
        email: '',
        password: '',
        isSubscribed: false,
        connected:false, users:[{name:'Client', email:'client@client.com', mdp:'1234'}], connectedUser:{} 
    },
    reducers: {
    subscribe: (state, action) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.isSubscribed = true;
        },
        setConected:(state, action)=>{state.connected = action.payload},
        setUser:(state, action)=>{state.connectedUser = action.payload},
    },
    });
export const { subscribe,setConected, setUser } = loginSlice.actions;
