/**
 * Scenario 2: Form Input Handling
Description: You're creating a form with an input field for a user's name. You need to keep track of the value in this input field and update it as the user types.
Task: Describe how you would use useState to manage the input field's state.
 */

import { useState } from 'react';

const Form = () => {
    const [name, setname] = useState('');

    const updateName = (event) => {
        setname(event.target.value);
    }

    return (
        <form>
            <input value={name} onChange={(e) => updateName(e)} />
        </form>
    )
}

export default Form;