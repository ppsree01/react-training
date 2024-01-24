/**
 * Scenario 1: Basic Counter
Description: You have a button on your webpage. Every time this button is clicked, a counter should increment by 1.
Task: Explain how you would use useState to implement this functionality.
 */

import { useState } from 'react';

const Counter = ({ initialValue }) => {
    
    const [value, setValue] = useState(initialValue);

    const incrementCounter = () => {
        setValue(value + 1);
    };

    return (
        <div>
            <button onClick={() => incrementCounter()}>Increment</button>
            <div>{value}</div>
        </div>
    )
}  

export default Counter;