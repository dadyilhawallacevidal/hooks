import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from "../../data/DataContext/DataContext";
import { AppContext } from '../../data/Store';
const UseContext = (props) => {

    const { state, setState } = useContext(DataContext);

    const addNumber = delta => {
        setState({
            ...state,
            number: state.number + delta
        });
    }

    const { number, setNumber } = useContext(AppContext);
    const { text, setText } = useContext(AppContext);

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <section title="Exercicio #01">
                <div className="center">
                    <span className="text">
                        {state.text}
                    </span>
                    <span className="text">
                        {state.number}
                    </span>
                    <div>
                        <button className="btn"
                            onClick={() => addNumber(+1)}>
                            +1
                        </button>
                        <button className="btn"
                            onClick={() => addNumber(-1)}>
                            -1
                        </button>
                    </div>
                </div>
            </section>
            <section title="Exercicio #02">
                <div className="center">
                    <span className="text">
                        {text}
                    </span>
                    <span className="text">
                        {number}
                    </span>
                    <div>
                        <button className="btn"
                            onClick={() => setNumber( number +1)}>
                            +1
                        </button>
                        <button className="btn"
                            onClick={() => setNumber(number -1)}>
                            -1
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UseContext
