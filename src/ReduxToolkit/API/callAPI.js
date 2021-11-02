import axios from "axios";
import { startLoading, stopLoading } from "../Slices/loaderSlice";
import { toastErrorMessage, toastSuccessMessage } from "../Slices/toasterSlice";



// Helper method to call APIs
const makeApiCall = async (requestConfig)=>{
    const access_token = "";

    const response = await axios({
        baseURL: `https://jsonplaceholder.typicode.com`,
        headers : { Authorization: `Bearer ${access_token}}` },
        ...requestConfig,
    });

    console.log('AXIOS_DATA', response);
    return response.data;
}




//                     >>>>>>>>>>>>>>>>>>>>> Signature <<<<<<<<<<<<<<<<<<<

// const uiLoaderAndToastMessageConfig = {      <<<<<<<<<< If this parameter is not passed then API call will happen silently no message and loader will be displayed. In this case User have to dispatch the statrLoading and statrLoading actions from component.
//     thunkAPI : thunkAPI,                     <<<<<<<<<< You will get this in second parameter of callback passed to createAsyncThunk method in SLICE file.
//     message : "Posts fetched successfully.", <<<<<<<<< message to be displayed in toastBar, This is optional, 
//     displayAsError : false                   <<<<<<<<< If true message will be displayed in red color else in Green color. This is Optional, If not passed then message will be displayed in green color.
// };

// const requestConfig = {
//     method : 'GET',
//     url : URL,
//     data : {}
// }

const callAPI = async (requestConfig, uiLoaderAndToastMessageConfig)=>{
    if(uiLoaderAndToastMessageConfig){
        const {thunkAPI, displayAsError, message} = uiLoaderAndToastMessageConfig;
        try{
            // Make API call
            thunkAPI.dispatch(startLoading());
            const response = await makeApiCall(requestConfig);
            thunkAPI.dispatch(stopLoading());
            
            // Display message
            if(displayAsError && message){
                thunkAPI.dispatch(toastErrorMessage(message));
            } else if(message) {
                thunkAPI.dispatch(toastSuccessMessage(message));
            }
            return response;
        } catch(e) {
            if(thunkAPI){
                thunkAPI.dispatch(toastErrorMessage(e.message || "Something went wrong."));
                thunkAPI.dispatch(stopLoading());
            } else {
                console.error(e.message);
            }
        }

        
    } else {
        try {
            const response = await makeApiCall(requestConfig);
            return response;
        } catch(e){
            console.error(e.message);
        }
        
    }
}

export default callAPI;