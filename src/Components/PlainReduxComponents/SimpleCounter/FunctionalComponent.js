import React, { useState } from 'react'

const FunctionalComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Functional Component</h3>
            <button onClick={()=>{setCount(count - 1)}}>-</button>
            <span><b>{count}</b></span>
            <button onClick={()=>{setCount(count + 1)}}>+</button>
            <hr/>
        </div>
    )
}

export default FunctionalComponent
