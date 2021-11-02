import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';

const ToastSnackBar = () => {

    const toasterModel = useSelector((state)=>state.toasterModel);
    const {changeId, isError, message} = toasterModel;

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
        <ToastContainer
            position="bottom-left"
            autoClose={1800}
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
