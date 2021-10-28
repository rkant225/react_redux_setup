import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    reservations : [
        { "reservationId": 1635389718482, "customerName": "Rahul", "reservationDate": "Thu Oct 28 2021", "memberCount": 2 },
        { "reservationId": 1635389718483, "customerName": "Ajay", "reservationDate": "Fri Oct 29 2021", "memberCount": 5 },
        { "reservationId": 1635389718484, "customerName": "Amit", "reservationDate": "Sat Oct 30 2021", "memberCount": 1 },
    ]
}

const reservationSlice = createSlice({
    name : 'reservation',
    initialState : initialState,
    reducers : {
        addReservation : (state, action)=>{
            state.reservations.push(action.payload);
        },
        deleteReservation : (state, action)=>{
            const filteredReservationsList = state.reservations.filter((reservation)=>reservation.reservationId !== action.payload.reservationId)
            state.reservations = filteredReservationsList;
        }
    }
});


// Action Creators
export const { addReservation, deleteReservation } = reservationSlice.actions;

// Reducer
export default reservationSlice.reducer;
