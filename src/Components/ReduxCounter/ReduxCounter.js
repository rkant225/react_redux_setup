import React from 'react'
import {connect} from 'react-redux';
import { decreaseCounter, increaseCounter } from '../../Redux/Counter/counterActions';

const ReduxCounter = (props) => {
    const {countModel, decreaseCounter, increaseCounter } = props;

    return (
        <div>
            <h3>Redux Based Counter</h3>
            <button onClick={()=>{decreaseCounter(1)}}>-</button>
            <span><b>{countModel.count}</b></span>
            <button onClick={()=>{increaseCounter(1)}}>+</button>
            <hr/>
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        countModel : state.countModel
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        increaseCounter : (by)=>{dispatch(increaseCounter(by))},
        decreaseCounter : (by)=>{dispatch(decreaseCounter(by))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
