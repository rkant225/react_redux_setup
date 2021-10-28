import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchRandomUsers} from '../../../ReduxToolkit/Slices/usersSlice';

const RandomUser = () => {
    const dispatch = useDispatch();
    const users = useSelector((state)=>state.users.users);

    const [userCount, setUserCount] = useState(5);

    return (
        <div>
            <h1>Thunk Actions (Asynchronous)</h1>
            <div style={{textAlign : 'center'}}>
                <button onClick={()=>{setUserCount(userCount - 1)}}>-</button>
                <button onClick={()=>{dispatch(fetchRandomUsers(userCount))}}>Fetch {userCount} User</button>
                <button onClick={()=>{setUserCount(userCount + 1)}}>+</button>
            </div>
            <div style={{display : 'flex', flexWrap : 'wrap'}}>
                {users?.map((user)=>{
                    return(
                        <img key={user.email} src={user.picture.large} alt={user.email} style={{height : '200px', width : '200px', margin : '.5rem', borderRadius : '50%'}}/>
                    );
                })}
            </div>
        </div>
    )
}

export default RandomUser;
