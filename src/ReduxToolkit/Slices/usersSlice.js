//

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {startLoading, stopLoading} from './loaderSlice';
import {updateToaster} from './toasterSlice';

const initialState = {
    users : []
}


export const fetchRandomUsers = createAsyncThunk(
    'users/fetchRandomUsers', 
    async (nUsers, thunkAPI)=>{
        thunkAPI.dispatch(startLoading());
        try{
            if(nUsers > 0){

                const URL = `https://randomuser.me/api/?results=${nUsers || 1}`
    
                const response = await axios.get(URL);
                console.log('response', response)
                thunkAPI.dispatch(stopLoading());
                thunkAPI.dispatch(updateToaster({isError : false, message : "Data fetched successfully."}));
                
                return response?.data?.results || [];
            } else {
                thunkAPI.dispatch(updateToaster({isError : true, message : "Number of users must be greater than 0."}));
                thunkAPI.dispatch(stopLoading());
            }
        } catch(e){
            console.log(e);
            thunkAPI.dispatch(stopLoading());
            thunkAPI.dispatch(updateToaster({isError : true, message : "Something went wrong please try again."}));
        }
        
    }
);


const usersSlice = createSlice({
    name : 'users',
    initialState : initialState,
    reducers : {

    },
    extraReducers : {
        [fetchRandomUsers.pending] : (state, action)=>{
            
        },
        [fetchRandomUsers.fulfilled] : (state, action)=>{
            state.users = action.payload;
        },
        [fetchRandomUsers.rejected] : (state, action)=>{
            
        },
    }
})




export default usersSlice.reducer;