import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../../Redux/User/userActions'

const ReduxUser = (props) => {
    console.log(props);
    const {userModel, fetchUser } = props;
    return (
        <div>
            <h3>Redux thunk based API Call</h3>
            <button onClick={()=>{fetchUser()}}>Fetch User</button>
            <div style={{margin : 'auto', textAlign : 'initial', width : 'max-content'}}>
                <pre>{JSON.stringify(userModel.user, null, 4)}</pre>
            </div>
            <hr/>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        userModel : state.userModel
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchUser : ()=>{dispatch(fetchUser())},
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReduxUser);
