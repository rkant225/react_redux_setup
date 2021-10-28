import React from 'react'
import { connect } from 'react-redux'

const Loader = (props) => {
    const {isLoading} = props;
    return (
        <>
            {isLoading &&
                <div style={{top : '0', bottom : '0', right : '0' , left : '0', display : 'flex', justifyContent : 'center', alignItems : 'center', position : 'fixed', backgroundColor : 'rgba(50,50,50,.8)', color : 'white'}}>
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