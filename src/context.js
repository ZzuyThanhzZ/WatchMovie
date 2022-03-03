import {useState, createContext} from 'react';

export const Context = createContext();

export const initialState = {
    name: '',
    movieAdded: [],
}

const UserProvider = ({children}) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider;