import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isError : false,
    message : "",
    changeId : Math.random()
}

const toasterSlice = createSlice({
    name : 'loader',
    initialState : initialState,
    reducers : {
        updateToaster : (state, action)=>{
            const {isError, message} = action.payload;
            state.isError = isError;
            state.message = message;
            state.changeId = Math.random();
        }
    }
});


// Action Creators
export const { updateToaster } = toasterSlice.actions;

// Reducer
export default toasterSlice.reducer;
