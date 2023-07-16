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



const reducer = (state, action) => {
    switch (action.type) {
        case 'Add2':
            return { ...state, number: state.number + 2 }
        case 'Multi7':
            return { ...state, number: state.number * 7 }
        case 'Div25':
            return { ...state, number: state.number / 25 }
        case 'Int':
            return { ...state, number: parseInt(state.number) }
        case 'AddN':
            return { ...state, number: state.number + parseInt(action.payload) }
        case 'login':
            return { ...state, user: { name: action.payload } }

        default:
            return state;
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [userName, setUserName] = useState("");
    const [number, setNumber] = useState(0);
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
                    <input
                        id="number"
                        type="number"
                        className="number"
                        value={number}
                        onChange={e => setNumber(parseInt(e.target.value))}
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
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "Multi7" })}
                    >
                        *7
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "Div25" })}
                    >
                        /25
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "Int" })}
                    >
                        Int
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "AddN", payload: number })}
                    >
                        AddN
                    </button>

                </div>
            </div>
        </div>
    )
}

export default UseReducer
