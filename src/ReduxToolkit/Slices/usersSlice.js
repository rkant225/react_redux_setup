import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import callAPI from '../API/callAPI';

const initialState = {
    users : []
}


export const fetchRandomUsers = createAsyncThunk( 'users/fetchRandomUsers',  async (nUsers, thunkAPI)=>{

    const URL = `https://randomuser.me/api/?results=${nUsers || 1}`

    const uiLoaderAndToastMessageConfig = {
        thunkAPI : thunkAPI,
        message : "Users fetched successfully.",
        displayAsError : false
    };

    const requestConfig = {
        method : 'GET',
        baseURL : '',
        url : URL,
        data : {}
    }

    const response = await callAPI(requestConfig, uiLoaderAndToastMessageConfig);
    return response.results;
});


const usersSlice = createSlice({
    name : 'users',
    initialState : initialState,
    reducers : {

    },
    extraReducers : {
        [fetchRandomUsers.fulfilled] : (state, action)=>{
            state.users = action.payload;
        }
    }
})




export default usersSlice.reducer;