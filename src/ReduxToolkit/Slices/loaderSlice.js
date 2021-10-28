import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading : false
}

const loaderSlice = createSlice({
    name : 'loader',
    initialState : initialState,
    reducers : {
        startLoading : (state)=>{
            state.isLoading = true;
        },
        stopLoading : (state)=>{
            state.isLoading = false;
        }
    }
});


// Action Creators
export const { startLoading, stopLoading } = loaderSlice.actions;

// Reducer
export default loaderSlice.reducer;
