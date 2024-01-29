/**
 * Scenario 5: Shopping Cart

Build a shopping cart using the useContext hook. Create a CartProvider component that manages the items in the user's shopping cart. Use the useContext hook in child components to add, remove, and display items in the cart. Allow users to view and modify their shopping cart from different parts of the application.
 */

import { useContext, createContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = () => {
    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const removeItem = (index) => {
        if (!items.length) {
            return;
        } else if ( index < 0 || index > items.length ) {
            return;
        } 

        let newlist = [];
        for (let i=0; i < items.length; i++) {
            if (i == index) {
                continue;
            } else {
                newlist.push(items[i]);
            }
        }

        setItems(newlist);
    }

    return (
        <CartContext.Provider value={{items, addItem, removeItem}}>

        </CartContext.Provider>
    )

}

const Items = () => {
    const { item, addItem, removeItem } = useContext(CartContext);

    return (
        <ul>
            {items.map( (item, index) => {
                return (
                <li>{item}
                    <button onClick={() => addItem(item)}>Add</button>
                    <button onClick={() => removeItem(index)}>Remove</button>
                </li>
                )
            })}
        </ul>
    )
}

const Cart = () => {
    const { items } = useContext(CartContext);

    return (
        <ul>
            { items.map( item => {
                <li>{item}</li>
            })}
        </ul>
    )
}

/**
 * Scenario 3: Localization

Build a localization (internationalization) feature using the useContext hook. Create a LanguageProvider component that manages the selected language for your application. Use the useContext hook in child components to access the current language and provide a way to switch between different languages.
 */

// import { createContext, useContext, useState } from "react";

// const SupportedLocales = { English: 'en-us', Hindi: 'hindi' };
// const LocaleContext = createContext(SupportedLocales.English);

// const Parent = () => {

//     const [locale, setLocale] = useState(SupportedLocales.English);

//     return (
//         <LocaleContext.Provider value={ locale }>
//             <button onClick={ () => setLocale(SupportedLocales.English) }>English</button>
//             <button onClick={ () => setLocale(SupportedLocales.Hindi) }>Hindi</button>
//             <Child />
//         </LocaleContext.Provider>
//     )
// }

// const Child = () => {
//     const locale = useContext(LocaleContext);

//     return (
//         <div>
//             Currently selected locale is { locale }
//         </div>
//     )
// }

/**
 * 
 * Scenario 2: User Authentication

Create a user authentication system using the useContext hook. Implement a UserProvider component that manages the user's authentication state (logged in or logged out). Use the useContext hook in child components to access the user's authentication status and provide login/logout functionality.
 */

// import { createContext, useContext, useState } from "react";

// const State = { Authenticated: 'authenticated', UnAuthenticated: 'unAuthenticated' };
// const UserStateContext = createContext('authenticated');

// const UserProvider = () => {
//     const [state, setState] = useState(State.UnAuthenticated);

//     const handleLoginLogout = (status) => {
//         setState(status);
//     }

//     return (
//         <UserStateContext.Provider value={state}>
//             <Layout handleLoginLogout={handleLoginLogout} />
//         </UserStateContext.Provider>
//     )
// }

// const Layout = ({ handleLoginLogout }) => {
//     return (
//         <div>
//             <ActionComponent handleLoginLogout={handleLoginLogout} />
//         </div>
//     )
// }

// const ActionComponent = ({ handleLoginLogout }) => {
//     const authenticatedStatus = useContext(UserStateContext);

//     if (authenticatedStatus.Authenticated) {
//         return <button onClick={() => handleLoginLogout(Status.UnAuthenticated)}>Logout</button>;
//     }
//     return <button onClick={() => handleLoginLogout(Status.Authenticated)}>Login</button>;
// }

/**
 * Scenario 1: Theme Toggle
Imagine you have an application with a light and dark theme, and you want to provide a button that allows users to toggle between these themes. You'll use the useContext hook to manage and share the theme state across components.

Your task:

Create a context for managing the theme (light/dark).
Implement two components: ThemeProvider and ThemeToggle.
The ThemeProvider should manage the theme state and provide it to child components.
The ThemeToggle component should use the useContext hook to toggle the theme when the button is clicked.
 */

// import { createContext, useContext } from "react";

// const ThemeContext = createContext('light');

// const ThemeProvider = () => {
//     const [theme, setTheme] = useState(null);

//     const handleUpdateTheme = (value) => {
//         setTheme(value);
//     }
    
//     return (
//         <ThemeContext.Provider value={theme}>
//             <ThemeToggle updateTheme={() => handleUpdateTheme(value)} />
//         </ThemeContext.Provider>
//     )
// }

// const ThemeToggle = ({ updateTheme }) => {
//     const theme = useContext(ThemeContext);
//     const style = {
//         backgroundColor: theme == 'light' ? 'white' : 'black'
//     }

//     return (
//         <div style={ style }>
//             <button onClick={updateTheme( theme == 'light' ? 'white' : 'black' )}>Update Theme</button>
//         </div>
//     )
// }