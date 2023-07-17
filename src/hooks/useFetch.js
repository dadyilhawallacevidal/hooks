import { useEffect, useState } from "react";

const Fetch = (url, method) =>
    new Promise((resolve, reject) => {
        fetch(`${url}`, method)
            .then(resp => resp.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
    });

//http://files.cod3r.com.br/curso-react/estados.json
export const useFetch = (url, method = 'GET') => {
    const [response, setResponse] = useState(
        {
            data: null,
            loading: true
        }
    );

    useEffect(function () {
        async function fetchData() {
            var resp = await Fetch(url, { method });
            setResponse({
                data: resp,
                loading: false
            });
        }
        fetchData();

    }, [url, method])

    return response;
}