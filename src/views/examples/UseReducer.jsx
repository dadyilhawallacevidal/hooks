import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, allReducers } from '../../store';
import { Add2, Login } from "../../store/actions/";

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(allReducers, initialState);
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
                        onClick={() => Login(dispatch, userName)}
                    >
                        Login
                    </button>
                    <button
                        className="btn"
                        onClick={() => Add2(dispatch)}
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
