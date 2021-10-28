import React from 'react'
import ActiveCustomer from './ActiveCustomer/ActiveCustomer';
import Reservation from './Reservation/Reservation';

const FoodCourt = () => {
    return (
        <div>
            <h1>Plain Actions (Non-Asynchronous)</h1>
        
            <div style={{display : 'flex'}}>
                
                <div style={{padding : '1rem', borderRight : '1px solid black', width : '30%'}}>
                    <Reservation/>
                </div>

                <div style={{padding : '1rem', width : '70%'}}>
                    <ActiveCustomer/>
                </div>
            </div>
        </div>
    )
}

export default FoodCourt;
