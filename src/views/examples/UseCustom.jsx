import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useConter'
import SectionTitle from '../../components/layout/SectionTitle';
import { useFetch } from '../../hooks/useFetch';

const UseRef = (props) => {
    const [count, inc, dec] = useCounter();
    const response = useFetch("http://files.cod3r.com.br/curso-react/estados.json", "get");

    function showStates(states) {
        return states.map(state => <li key={state.sigla}>{state.nome} - {state.sigla}</li>);
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01" />
            <div className='center'>
                <span className='text'>{count}</span>
                <div>
                    <button className="btn" onClick={inc}>+</button>
                    <button className="btn" onClick={dec}>-</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className='center'>
                <ul>
                    {!response.loading ? showStates(response.data) : false}
                </ul>
            </div>

        </div>
    )
}

export default UseRef
