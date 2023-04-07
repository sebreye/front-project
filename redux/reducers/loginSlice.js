import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        connected:false, users:[{name:'Client', email:'client@client.com', mdp:'1234'}], connectedUser:{}
    },
    
    reducers:{
        setConected:(state, action)=>{state.connected = action.payload},
        setUser:(state, action)=>{state.connectedUser = action.payload},
    }
})