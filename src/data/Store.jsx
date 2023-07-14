import React, { useState } from "react";


const initialState = {
    number: 1234,
    text: "Context API + Hooks"
}

const AppContext = React.createContext(initialState);


const Store = (props) => {
    const [state, setState] = useState(initialState);
    return (
        <AppContext.Provider value={{ state, setState }}>

            {
                props.children && props.children.lenght
                    ? props.children.map(
                        (child, i) => {
                            React.cloneElement(child, { key: i, ...props })
                        }
                    )
                    :
                    React.cloneElement(props.children, { ...props })
            }

        </AppContext.Provider>
    );
}


export default Store;