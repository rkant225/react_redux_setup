import {configureStore} from '@reduxjs/toolkit';
import reservationReducer from './Slices/reservationSlice';
import activeCustomersReducer from './Slices/activeCustomersSlice';
import usersReducer from './Slices/usersSlice';
import loaderReducer from './Slices/loaderSlice';
import toasterReducer from './Slices/toasterSlice';

const store = configureStore({
    reducer : {
        reservations : reservationReducer,
        activeCustomers : activeCustomersReducer,
        users : usersReducer,
        loaderModel : loaderReducer,
        toasterModel : toasterReducer
    }
});

export default store;