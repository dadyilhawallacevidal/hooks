import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';


function calculaFatorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calculaFatorial((n - 1)) * n;
}

function calcularStatus(n){
    return n % 2 === 0 ? "Par" : "Ímpar";
}

const UseEffect = (props) => {
    // Ex #01
    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);
    
    useEffect(() => {
        setFactorial(calculaFatorial(number));
    }, [number]);

    useEffect(() => {
        if (factorial > 1000) {
            document.title = "Vai com calma porra!"
        }
    }, [factorial]);

    // Ex #02
    const [status, setStatus] = useState("Impar");
    useEffect(() => {
        setStatus(number % 2 === 0 ? "Par" : "Ímpar");
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className='center'>
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{factorial}</span>
                </div>
                <input className="input" type='number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className='center' >
                <div>
                    <span className='text'>Status: </span>
                    <span className='text red'>{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
