
import {FETCH_USER, ADD, EDIT, DELETE} from './userTypes';

const INITIAL_STATE = {
    user : {}
}

const userReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case FETCH_USER:
            return {...state, user : action?.payload?.user || {}}
        case ADD:
            return {...state}
        case EDIT:
            return {...state}
        case DELETE:
            return {...state}
        default:
            return state;
    }
}

export default userReducer;