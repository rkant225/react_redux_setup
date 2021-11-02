import React from 'react'
import ActiveCustomer from './ActiveCustomer/ActiveCustomer';
import Reservation from './Reservation/Reservation';

const FoodCourt = () => {
    return (
        <div>
            <h1>Plain Actions (Non-Asynchronous)</h1>
        
            <div style={{display : 'flex', flexWrap : 'wrap'}}>
                
                <div className="reservation-container">
                    <Reservation/>
                </div>

                <div className="active-customer-container">
                    <ActiveCustomer/>
                </div>
            </div>
        </div>
    )
}

export default FoodCourt;
