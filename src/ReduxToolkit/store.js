import {configureStore} from '@reduxjs/toolkit';
import reservationReducer from './Slices/reservationSlice';
import activeCustomersReducer from './Slices/activeCustomersSlice';
import usersReducer from './Slices/usersSlice';
import loaderReducer from './Slices/loaderSlice';
import toasterReducer from './Slices/toasterSlice';
import postsReducer from './Slices/postsSlice';

const store = configureStore({
    reducer : {
        reservations : reservationReducer,
        activeCustomers : activeCustomersReducer,
        users : usersReducer,
        loaderModel : loaderReducer,
        toasterModel : toasterReducer,
        postsModel : postsReducer
    }
});

console.log('STORE', store);

export const {dispatch} = store;

export default store;