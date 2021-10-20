import React from 'react'
import { connect } from 'react-redux'

const Loader = (props) => {
    const {isLoading} = props;
    return (
        <>
            {isLoading &&
                <div style={{height : '100vh', width : '100vw', display : 'flex', justifyContent : 'center', alignItems : 'center', position : 'absolute', backgroundColor : 'rgba(50,50,50,.8)', color : 'white'}}>
                    Loading...
                </div>
            }
        </>
    )
}

const mapStateToProps = (state)=>{
    console.log("LOADER",state)
    return {
        isLoading : state?.loaderModel?.isLoading
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);