import React, {useState} from 'react';

const Counter = function () {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>- Decrement</button>
            <button onClick={increment}>Increment +</button>
        </div>
    )
};

export default Counter;