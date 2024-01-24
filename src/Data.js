/**
 * Scenario 5: Conditional Side Effect
Scenario: You have a component that should only perform a side effect when a specific condition is met.

Your task:

Implement useEffect to perform a side effect, but only when a specific condition is true.
Explain your code and how it works.
 */

import { useState, useEffect } from 'react';
import axios from axios;

const SideEffect = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('NA')
    useEffect(() => {
        if (loading) {
            axios.get(api)
                .then( response => {
                    setData(response.data);
                    setLoading(!loading);
                })
        }
    }, [loading]);

    return (
        <div>
            { data }
        </div>
    )
}

export default SideEffect;

/**
 * Scenario 4: Real-Time Data Updates
Scenario: You want to display real-time data updates from a WebSocket connection in your component.

Your task:

Implement useEffect to establish a WebSocket connection when the component mounts.
Handle incoming WebSocket messages and update the component's state.
Explain your code and how it works.
 */

// import { useState, useEffect } from 'react';

// const RealTimeUpdates = () => {

//     const [value, setValue] = useState('');
//     useEffect(() => {
//         const socket = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/");

//         socket.addEventListener("open", event => {
//             socket.send("Connection Established");
//         });

//         socket.addEventListener("message", event => {
//             setValue(event.data);
//         });
//     }, []);

//     return (
//         <div>Value from server: {value}</div>
//     )
// }

// export default RealTimeUpdates;

/**
 * Scenario 3: Dependency-Based Fetching
Scenario: You have a list of items that should be fetched based on a selected category. You want to refetch the items whenever the category changes.

Your task:

Implement useEffect to fetch items based on the selected category.
Ensure that the effect runs whenever the category changes.
Explain your code and how it works.
 */

// import { useState, useEffect } from "react";

// const CategorySelector = ( { defaultValue } ) => {

//     const [selection, updateSelection] = useState('select');
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         let endpoint = '';
//         switch(select) {
//             case 'A':
//                 endpoint = '/A';
//                 break;
//             case 'B':
//                 endpoint = '/B';
//                 break;
//             case 'C':
//                 endpoint = '/C';
//                 break;
//             default:
//                 endpoint = '/all'
//         }
//         axios.get(apiUrl + endpoint)
//             .then(response => setData( response.data ));

//     }, [selection]);

//     return (
//         <>
//             <div>{selection}</div>
//             <ul>
//                 <li><button onClick={() => updateSelection('select')}>Select</button></li>
//                 <li><button onClick={() => updateSelection('A')}>A</button></li>
//                 <li><button onClick={() => updateSelection('B')}>B</button></li>
//                 <li><button onClick={() => updateSelection('C')}>C</button></li>
//             </ul>
//             <div>{data}</div>
//         </>
       
//     );
// }

// export default CategorySelector;

/**
 * Scenario 2: Cleanup with useEffect
Scenario: You're using useEffect to subscribe to a real-time event. You want to unsubscribe when the component unmounts.

Your task:

Implement useEffect to subscribe to an event when the component mounts.
Add cleanup code to unsubscribe when the component unmounts.
Explain your code and how it works.
 */

// import { useState, useEffect } from 'react';
// import ChatAPI from './ChatAPI';

// const Cleanup = () => {
//     const [state, setState] = useState(false);
//     useEffect(() => {
//         ChatAPI.subscribe();    
//         return () => {
//             ChatAPI.unsubscribe();
//         }
//     });

//     const handleStateChange = () => {
//         setState(!state);
//     }

//     return (
//         <>
//             <button onClick={() => handleStateChange()}>Toggle State</button>
//             <p>{state}</p>
//         </>
//     )


// }

// export default Cleanup;

/**
 * Scenario 1: Dynamic Data Fetching
Scenario: You want to fetch data from an API when a component mounts, and you also want to refetch the data when a button is clicked.

Your task:

Implement useEffect to fetch data when the component mounts.
Add a button that triggers a re-fetch of the data when clicked.
Explain your code and how it works.
 */


// import { useState, useEffect } from "react";
// import axios from axios;

// const Data = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         refreshData();
//     }, []);

//     const refreshData = () => {
//         axios.get('https://fakestoreapi.com/products')
//             .then(response => {
//                 setData(response.data);
//             });
//     }

//     return (
//         <button onClick={() => refreshData()}>Refresh Data</button>
//     )
// }

// export default Data;

