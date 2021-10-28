import React from 'react'
import { useSelector } from 'react-redux';

const LoaderReduxToolkit = () => {

    const isLoading = useSelector((state)=>state.loaderModel.isLoading)

    return (
        <>
            {isLoading &&
                <div style={{top : '0', bottom : '0', right : '0', left : '0', display : 'flex', justifyContent : 'center', alignItems : 'center', position : 'fixed', backgroundColor : 'rgba(50,50,50,.8)', color : 'white', overflow : 'hidden'}}>
                    Loading...
                </div>
            }
        </>
    )
}



export default LoaderReduxToolkit;