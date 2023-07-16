import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'


const initialState = {
    cart: [{}],
    products: [{}, {}],
    user: null,
    other: "...",
    //foco...
    number: 0
}



const reducer = (state, action, payload) => {
    console.log(payload);
    switch (action.type) {
        case 'Add2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state;
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [userName, setUserName] = useState("");
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">

                {state.user && state.user.name !== "" ? <span className="text">{state.user.name}</span> :
                    <span className='text'>Sem Usuário</span>}


                <span className="text">
                    {state.number}
                </span>
                <div>
                    <input
                        id="userName"
                        type="text"
                        className="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className='btn'
                        onClick={() => dispatch({ type: "login", payload: userName })}
                    >
                        Login
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "Add2" })}
                    >
                        +2
                    </button>

                </div>
            </div>
        </div>
    )
}

export default UseReducer
