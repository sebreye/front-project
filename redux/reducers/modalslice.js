import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
	name:'modal',
	initialState: {show:false},
	reducers : {
		setModal:(state, action)=>{state.show = action.payload},
	}
})

export const { setModal } = modalSlice.actions;