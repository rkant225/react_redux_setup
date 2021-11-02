import {createSlice, createAsyncThunk, findNonSerializableValue} from '@reduxjs/toolkit';
import callAPI from '../API/callAPI';


const initialState = {
    posts : [],
    selectedPost : {}
}

export const fetchAllPosts = createAsyncThunk('posts/fetchAllPosts', async (data, thunkAPI)=>{

    const URL = `/posts`

    const uiLoaderAndToastMessageConfig = {
        thunkAPI : thunkAPI,
        message : "Posts fetched successfully.",
        displayAsError : false
    };

    const requestConfig = {
        method : 'GET',
        url : URL,
        data : {}
    }

    const response = await callAPI(requestConfig, uiLoaderAndToastMessageConfig);

    return response;
})

export const updatePost = createAsyncThunk('posts/updatePost', async (data, thunkAPI)=>{
    

    const URL = `/posts/${data.id}`

    const uiLoaderAndToastMessageConfig = {
        thunkAPI : thunkAPI,
        message : "Posts updated successfully.",
        displayAsError : false
    };

    const requestConfig = {
        method : 'PUT',
        url : URL,
        data : data
    }

    const response = await callAPI(requestConfig, uiLoaderAndToastMessageConfig);

    return response;
})


const postsSlice = createSlice({
    name : 'posts',
    initialState : initialState,
    reducers : {
        updateSelectedPost : (state, action)=>{
            state.selectedPost = action.payload;
        }
    },
    extraReducers : {
        [fetchAllPosts.fulfilled] : (state, action)=>{
            state.posts = action.payload
        },
        [updatePost.fulfilled] : (state, action)=>{
            const updatedPosts = [];
            state.posts.forEach((post)=>{
                if(post.id === action.payload.id){
                    updatedPosts.push(action.payload)
                } else {
                    updatedPosts.push(post)
                }
            })

            state.posts = updatedPosts;
        }
    }
})

export const {updateSelectedPost} = postsSlice.actions;

export default postsSlice.reducer;