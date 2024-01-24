/**
 * Scenario 3: Toggling Visibility
Description: Imagine you have a component that shows more detailed information when a "Show More" button is clicked, and hides this information when a "Show Less" button is clicked.
Task: Discuss how useState can be used to toggle the visibility of this detailed information.
 */

import { useState } from 'react';

const Toggle = ({ initialVisibility }) => {
    const [visibility, setVisibility] = useState(initialVisibility);

    const toggleVisibility = () => setVisibility(!visibility);

    return (
        <>
            <button onClick={() => toggleVisibility()}>Show { visibility ? 'less' : 'more'}</button>
            { visibility && (
                <p>random text</p>
            ) }
        </>
    )
}

export default Toggle;