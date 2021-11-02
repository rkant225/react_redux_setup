import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isError : false,
    message : "",
    changeId : Math.random() // This is to give unique ID when ever user dispatch any of the below actions.
}

const toasterSlice = createSlice({
    name : 'loader',
    initialState : initialState,
    reducers : {
        toastErrorMessage : (state, action)=>{
            state.isError = true;
            state.message = action.payload;
            state.changeId = Math.random();
        },
        toastSuccessMessage : (state, action)=>{
            state.isError = false;
            state.message = action.payload;
            state.changeId = Math.random();
        }
    }
});


// Action Creators
export const { toastErrorMessage, toastSuccessMessage } = toasterSlice.actions;

// Reducer
export default toasterSlice.reducer;
