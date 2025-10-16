import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
        // console.log("added buttont to increase number");
        // setCount(5)
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default Counter;