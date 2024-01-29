/**
 * Scenario 5: Task List

Build a task list application using the useReducer hook. Implement a taskReducer function that manages a list of tasks and handles actions like adding tasks, marking tasks as completed, and deleting tasks. Create a TaskList component that uses useReducer to manage the task list and allows users to interact with tasks (add, mark as complete, delete).
 */

import { useReducer, useState } from "react";

const taskReducer = (tasks, action) => {
    let id = action.id || tasks.length;
    switch(action.type) {
        case 'add':
            return [...tasks, { id: id, task: action.task, status: false }]
        case 'remove':
            return tasks.filter( task => task.id != id )
        case 'update':
            let newTasks = tasks.map( task => {
                if (task.id == id) {
                    task.status = !task.status;
                }
                return task;
            });
            return newTasks;
    }
}

const Task = () => {
    const [text, setText] = useState('');
    const [tasks, dispatch] = useReducer(taskReducer, []);

    const handleAddition = (e) => {
        dispatch({
            type: 'add',
            value: e.target.value
        })
    }

    const handleDeletion = (e, id) => {
        dispatch({
            type: 'remove',
            id: id,
        });
    }

    const handleUpdate = () => {
        dispatch({
            type: 'update',
            id: id
        });
    }

    const handleOnChange = (e) => {
        setText({ text: e.target.value })
    }

    return (
        <div>
            <input value={text} onChange={handleOnChange}/>
            <button onClick={handleAddition}>Add</button>
            { tasks.length > 0 && tasks.map( task => {
                return (
                    <div>
                        <input type='checkbox' checked={task.status} onChange={() => handleUpdate(id)}/>
                        { task.task }
                        <button onClick={(e) => handleDeletion(e, task.id)}></button>
                    </div>
                )
            })}
        </div>
    )
}

/**
 * 
 * Scenario 3: Form Input Handling

Create a form handling component using the useReducer hook. Implement a formReducer function that manages the form state, including input values, errors, and form submission. Build a Form component that uses useReducer to manage the form state, validate inputs, display errors, and submit the form data.
 */

// import { useReducer } from "react"

// const validateName = (value) => {
//     if (!value) {
//         return false;
//     }
//     let lowercase = new Set('abcdefbgijklmnopqrstuvwxyz');
//     let uppercase = new Set(lowercase.toUpperCase()); 

//     for (let char of value) {
//         if (!(lowercase.has(char) || uppercase.has(char))) {
//             return false;
//         }
//     }
//     return true;
// }

// const validateEmail = (value) => {
//     if (!value) {
//         return false;
//     }

//     let validEmails = ['gmail.com', 'outlook.com', 'yahoo.com'];
//     value = value.split("@")[1];
//     if (validEmails.indexOf(value) == -1) {
//         return false;
//     }
//     return true;
// }

// const formReducer = (form, action) => {
//     switch (action.type) {
//         case 'submit':
//             let [isNameValid, isEmailValid] = [validateName(data.name), validateEmail(data.email)];

//             const newForm = {...form, errors: []}; 
//             if (!isNameValid) {
//                 newForm.errors.push('Invalid Name');
//             }
//             if (!isEmailValid) {
//                 newForm.errors.push('Invalid Email');
//             }
//             return newForm;
//         case 'update':
//             const updatedForm = {...form, errors: []}; 
//             switch(action.sub) {
//                 case 'name':
//                     updatedForm.name = action.value;
//                     if (!validateName(action.value)) {
//                         updatedForm.errors.push('Invalid Name');
//                     } 
//                     return updatedForm;
//                 case 'email':
//                     newForm.email = action.value;
//                     if (!validateEmail(action.value)) {
//                         newForm.errors.push('Invalid email');
//                     }
//                     return newForm;
//             }
//     }
// }

// const Form = () => {
//     const [data, dispatch] = useReducer(formReducer, { name: '', email: '', errors: [] });

//     const handleSubmit = () => {
//         dispatch({ 
//             type: 'submit',
//             action: data
//         });
//     }

//     const updateName = (e) => {
//         dispatch({
//             type: 'update',
//             sub: 'name',
//             value: e.target.value
//         });
//     }

//     const updateEmail = (e) => {
//         dispatch({
//             type: 'update',
//             sub: 'email',
//             value: e.target.value
//         });
//     }

//     return (
//         <form onSubmit={() => {handleSubmit()}}>
//             <div>
//                 <input value={data.name} onChange={(e) => updateName(e)}/>
//                 <input value={data.email} onChange={(e) => updateEmail(e)}/>
//                 <button disabled={data.errors.length == 0}>Submit</button>
//                 { data.errors.map( error => {
//                     return (<div>{error}</div> )
//                 }) }
//             </div>
//         </form>
//     )
// }

/**
 * 
 * Scenario 2: Shopping Cart

Build a shopping cart component using the useReducer hook. Implement a CartReducer function that manages the state of items in the cart and handles actions like adding items, removing items, and clearing the cart. Create a Cart component that uses useReducer to manage the cart state and allows users to interact with the cart (add, remove, clear).
 */

// import { useReducer } from "react";

// const cartReducer = (items, action) => {
//     switch (action.type) {
//         case 'add':
//             return [...items, action.item];
//         case 'remove':
//             return items.filter( item => item.id != action.item.id)
//         default:
//             return items;
//     }
// }

// const Cart = ({ initialState }) => {
//     const [items, dispatch] = useReducer(cartReducer, initialState)

//     return(
//         <div>
//             {items.map( item => {
//                 <div>
//                     <div>{item.name}</div>
//                     <div>{item.description}</div>
//                     <button onClick={() => dispatch({ type: 'add', item: item })}>Add</button>
//                     <button onClick={() => dispatch({ type: 'remove', item: item })}>Remove</button>
//                 </div>
//             })}
//         </div>
//     )
// }



/**
 * Scenario 1: A Simple Counter

Create a simple counter component using the useReducer hook. Implement a Counter component that displays a count value and provides buttons to increment and decrement the count. Use useReducer to manage the count state and handle increment and decrement actions.

Your task:

Set up an initial count value.
Implement a reducer function that handles increment and decrement actions.
Create a Counter component that uses useReducer to manage state and dispatch actions to the reducer.
Display the current count and buttons to increment and decrement the count.
 */

// import { useReducer } from "react";

// const counterReducer = (counter, action) => {
//     switch(action.type) {
//         case 'increment':
//             return counter + 1
//         case 'decrement':
//             return counter > 0 ? counter - 1 : counter;
//         default:
//             console.log('invalid value');
//             return counter;
//     }
// }

// const Counter = ({ initialState }) => {
//     const [counter, dispatch] = useReducer(counterReducer, initialState);

//     return (
//         <div>
//             <h2>{counter}</h2>
//             <button onClick={ () => dispatch({ type: 'increment' })}>Increment</button>
//             <button onClick={ () => dispatch({ type: 'decrement' })}>Decrement</button>
//         </div>
//     )
// }

