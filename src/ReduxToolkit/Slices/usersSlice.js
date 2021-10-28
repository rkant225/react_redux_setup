//

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {startLoading, stopLoading} from './loaderSlice';

const initialState = {
    users : []
}


export const fetchRandomUsers = createAsyncThunk(
    'users/fetchRandomUsers', 
    async (nUsers, thunkAPI)=>{

        const URL = `https://randomuser.me/api/?results=${nUsers || 1}`

        thunkAPI.dispatch(startLoading());
        const response = await axios.get(URL);
        thunkAPI.dispatch(stopLoading());
        
        return response.data.results;
    }
);


const usersSlice = createSlice({
    name : 'users',
    initialState : initialState,
    reducers : {

    },
    extraReducers : {
        [fetchRandomUsers.pending] : (state, action, globalState)=>{
            
        },
        [fetchRandomUsers.fulfilled] : (state, action, globalState)=>{
            state.users = action.payload;
        },
        [fetchRandomUsers.rejected] : (state, action, globalState)=>{
            
        },
    }
})




export default usersSlice.reducer;