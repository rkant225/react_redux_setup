import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {deleteActiveCustomer, addFoodOrder, deleteFoodOrder} from '../../../../ReduxToolkit/Slices/activeCustomersSlice';

const ActiveCustomer = () => {
    const dispatch = useDispatch();
    const activeCustomers = useSelector((state)=>state.activeCustomers.activeCustomers);


    const handleAddFoodFormSubmission = (e, reservationId)=>{
        e.preventDefault();
        const formElement = document.getElementById(`add-order-form-${reservationId}`);
        const formData = new FormData(formElement);
        const food = formData.get('food');
        const orderData = {orderId : Date.now(), name : food, price : Math.ceil(Math.random() * 100)}
        dispatch(addFoodOrder({reservationId, orderData}))
        formElement.reset();
    }

    const markReservationCompletedAndDelete = (reservationId)=>{
        dispatch(deleteActiveCustomer(reservationId));
    }

    const deleteFoodFromOrder = (reservationId, orderId)=>{
        dispatch(deleteFoodOrder({reservationId, orderId}));
    }

    const getOrderTotal = (foodOrders)=>{
        return foodOrders.reduce((acc,foodOrder,index, completeArray)=>{
            return acc + foodOrder.price;
        },0)
    }


    return (
        <div>
            <div style={{backgroundColor : 'black', height : '500px', borderRadius : '.5rem', padding : '.5rem', overflow : 'auto'}}>


                {activeCustomers.map((activeCustomer)=>{
                    let ordetTotal = 0;
                    return(
                        <div key={activeCustomer.reservationId} style={{backgroundColor : 'wheat', height : 'max-contrnt', padding : '.5rem', borderRadius : '.3rem', marginBottom : '.5rem'}}>
                            <div style={{display : 'flex', justifyContent : 'space-between'}}>
                                <div><span>{activeCustomer.customerName}</span></div>
                                <div style={{color : 'green', fontWeight : '900', cursor : 'pointer'}} onClick={()=>{markReservationCompletedAndDelete(activeCustomer.reservationId)}}>Complete Order | ₹{getOrderTotal(activeCustomer.foodOrders)}</div>
                            </div>

                            <div style={{display : 'flex', justifyContent : 'space-between', flexWrap : 'wrap'}}>

                                <div style={{width : '100%'}}>
                                    <div style={{display : 'flex', flexWrap : 'wrap'}}>
                                        {activeCustomer.foodOrders.map((foodOrder)=>{
                                            ordetTotal = ordetTotal + foodOrder.price;
                                            return(
                                                <div key={foodOrder.orderId} style={{backgroundColor : 'white', padding : '.2rem', width : 'max-content', borderRadius : '.3rem', margin : '.5rem', cursor : 'pointer'}} onClick={()=>{deleteFoodFromOrder(activeCustomer.reservationId, foodOrder.orderId)}}>
                                                    {foodOrder.name}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div style={{width : '100%'}}>
                                    <form id={`add-order-form-${activeCustomer.reservationId}`} onSubmit={(e)=>{handleAddFoodFormSubmission(e, activeCustomer.reservationId)}}>
                                        <div style={{textAlign : '-webkit-right'}}>
                                            <div style={{marginTop : '.3rem', padding : '.5rem', borderRadius : '.5rem', width : 'max-content'}}>
                                                <label>Order Details</label>
                                                <br/>
                                                <input required name="food" type="text"/>
                                                <br/>
                                                <input style={{marginTop : '.5rem'}} type="submit" value="Add Order"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    );
                })}


            </div>
        </div>
    )
}

export default ActiveCustomer;

