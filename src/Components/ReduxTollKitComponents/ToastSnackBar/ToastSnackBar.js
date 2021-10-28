import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import {updateToaster} from '../../../ReduxToolkit/Slices/toasterSlice';

const ToastSnackBar = () => {
    const dispatch = useDispatch();

    const toasterModel = useSelector((state)=>state.toasterModel);
    const {changeId, isError, message} = toasterModel;
    console.log('DATA', isError, message)

    useEffect(()=>{
        toast.dismiss();

        if(message){
            if(isError){
                toast.error(message);
            } else {
                toast.success(message);
            }
        }
    }, [isError, message, changeId]);

    return (
        <div>
            {/* <button onClick={()=>{dispatch(updateToaster({isError : false, message : 'Ok'}))}}>success</button> */}
            {/* <button onClick={()=>{dispatch(updateToaster({isError : true, message : 'Failed'}))}}>Error</button> */}
        <ToastContainer
            position="bottom-left"
            autoClose={1200}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            limit={1}
        />
        </div>
    );
};

export default ToastSnackBar;
