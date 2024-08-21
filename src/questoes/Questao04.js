import React, { useState, useEffect } from 'react';

const Questao04 = () => {
    //const [cidade, setCidade] = useState([]);
    const [maxCity, setMaxCity] = useState(null);
    const [minCity, setMinCity] = useState(null);

    const getCities = () => {
        return new Promise((resolve) => {
            const cities = [
                { "capital": ["Dublin"], "population": 4994724 },
                { "capital": ["Nicosia"], "population": 1207361 },
                { "capital": ["Madrid"], "population": 47351567 }
            ];
            resolve(cities);
        });
    };

    useEffect(() => {
        // fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        // .then(
        // (response) => {
        // return response.json()
        // }
        // )
        // .then(
        // (data) => {
        // data.map(console.log(data))
        // }
        // )
        // .catch(error => console.log(error))

        getCities()
            //aqui tem uma mudança em comparação com o código antigo, no caso questão 03
            .then((data) => {
                //A proxima parte se manteve em comparação com o código anterior
                // Ordenando as cidades
                const sortedData = data.sort((a, b) => b.population - a.population);

                //Organizando as cidades
                const maxCity = sortedData[0];
                const minCity = sortedData[sortedData.length - 1];

                //setCidade(sortedData);
                setMaxCity(maxCity);
                setMinCity(minCity);
            })
            .catch((error) => {
                console.error('Erro ao buscar os dados:', error);
            });
    }, []);

    if (!maxCity || !minCity) return <div>Carregando...</div>;

    return (
        <div>
            <h1>Capitais com maior e menor população</h1>
            <div>
                <h2>Maior população:</h2>
                <p>Capital: {maxCity.capital[0]}</p>
                <p>População: {maxCity.population}</p>
            </div>
            <div>
                <h2>Menor população:</h2>
                <p>Capital: {minCity.capital[0]}</p>
                <p>População: {minCity.population}</p>
            </div>
        </div>
    );
};

export default Questao04;
