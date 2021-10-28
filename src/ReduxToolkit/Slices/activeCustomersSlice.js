import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCustomers : [{
        reservationId : 1635389718481,
        customerName: "Abhinav Singh",
        reservationDate: "Thu Oct 28 2021",
        memberCount: 2,
        foodOrders : [{orderId : Math.random(), name : 'Rice', price : Math.ceil(Math.random() * 100)}, {orderId : Math.random(), name : 'Chicken Curry', price : Math.ceil(Math.random() * 100)}]
    }]
}

const activeCustomersSlice = createSlice({
    name : 'activeCustomers',
    initialState : initialState,
    reducers : {
        addActiveCustomer : (state, action)=>{
            state.activeCustomers.push({...action.payload, foodOrders : []});
        },
        deleteActiveCustomer : (state, action)=>{
            const filteredActiveCustomersList = state.activeCustomers.filter((activeCustomer)=>activeCustomer.reservationId !== action.payload)
            state.activeCustomers = filteredActiveCustomersList;
        },
        addFoodOrder : (state, action)=>{
            const {reservationId, orderData} = action.payload;

            let finalActiveCustomersList = [];

            state.activeCustomers.forEach((activeCustomer)=>{
                if(activeCustomer.reservationId === reservationId){
                    activeCustomer.foodOrders = [...activeCustomer.foodOrders, orderData];
                }
                finalActiveCustomersList.push(activeCustomer);
            });
            state.activeCustomers = finalActiveCustomersList;

        },
        deleteFoodOrder : (state, action)=>{
            const {reservationId, orderId} = action.payload;

            let finalActiveCustomersList = [];

            state.activeCustomers.forEach((activeCustomer)=>{
                if(activeCustomer.reservationId === reservationId){
                    const filteredFoodOrders = activeCustomer.foodOrders.filter((foodOrder)=>foodOrder.orderId !== orderId);
                    activeCustomer.foodOrders = filteredFoodOrders;
                }

                finalActiveCustomersList.push(activeCustomer);
            });

            state.activeCustomers = finalActiveCustomersList;
        },

    }
});


//Action Creators
export const {addActiveCustomer, deleteActiveCustomer, addFoodOrder, deleteFoodOrder} = activeCustomersSlice.actions;

// Reducer
export default activeCustomersSlice.reducer;