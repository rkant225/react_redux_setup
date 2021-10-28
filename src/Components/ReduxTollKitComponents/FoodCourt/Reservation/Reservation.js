import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { addReservation, deleteReservation } from '../../../../ReduxToolkit/Slices/reservationSlice';
import { addActiveCustomer } from '../../../../ReduxToolkit/Slices/activeCustomersSlice';

const Reservation = () => {
    const dispatch = useDispatch();
    const reservations = useSelector((state)=>state.reservations.reservations);


    const deleteCustomerReservation = (reservationId)=>{
        dispatch(deleteReservation({reservationId : reservationId}))
    }

    const moveCustomerToActiveCustomersList = (reservationData)=>{
        dispatch(addActiveCustomer({...reservationData}));
        deleteCustomerReservation(reservationData.reservationId);
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const formElement = document.getElementById('reservation-form');
        const formData = new FormData(formElement);
        const customerName = formData.get('customerName');

        const reservationData = {reservationId : Date.now(), customerName : customerName, reservationDate : new Date().toDateString(), memberCount : Math.ceil(Math.random() * 10)}
        dispatch(addReservation(reservationData));
        formElement.reset();
    }


    return (
        <div>
            <div style={{backgroundColor : 'black', padding : '.5rem', borderRadius : '.3rem', height : '366px', overflow : 'auto'}}>
                {reservations.map((reservation)=>{
                    return(
                        <div key={reservation.reservationId} style={{backgroundColor : 'wheat', padding : '.5rem', marginBottom : '.5rem', borderRadius : '.3rem'}}>

                            <div style={{display : 'flex', justifyContent : 'space-between'}}>
                                
                                <div style={{cursor : 'pointer'}} onClick={()=>{moveCustomerToActiveCustomersList(reservation)}}><span>{reservation.customerName}</span></div>
                                <div style={{cursor : 'pointer', color : 'red'}} onClick={()=>{deleteCustomerReservation(reservation.reservationId)}}>Delete</div>
                            </div>
                            <div style={{display : 'flex', justifyContent : 'space-between'}}>
                                <div>{reservation.reservationDate}</div>
                                <div>Members : {reservation.memberCount}</div>
                            </div>

                        </div>
                    );
                })}
            </div>
            
                    <div style={{height : '18%', marginTop : '.3rem', padding : '.5rem', borderRadius : '.5rem', backgroundColor : 'black', color : 'white'}}>
                <form id="reservation-form" onSubmit={handleFormSubmit}>
                        <div>
                            <label>Customer Name</label>
                            <br/>
                            <input required name="customerName" type="text"/>
                        </div>
                        <br/>

                        <div style={{textAlign : 'right'}}>
                            <input type="submit" value="Add reservation"/>
                        </div>

                </form>
                    </div>
        </div>
    )
}

export default Reservation;
