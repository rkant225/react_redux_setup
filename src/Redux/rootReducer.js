import {combineReducers} from 'redux'
import countReducer from './Counter/counterReducer';
import loaderReducer from './Loader/loaderReducer';
import userReducer from './User/userReducer';

const rootReducer = combineReducers({
    countModel : countReducer,
    userModel : userReducer,
    loaderModel : loaderReducer
});

export default rootReducer;