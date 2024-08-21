import React, { useState, useEffect } from 'react';

const Questao03 = () => {
    const [cidade, setCidade] = useState([]);
    const [maxCity, setMaxCity] = useState(null);
    const [minCity, setMinCity] = useState(null);

    useEffect(() => {
        const fetchCidade = async () => {
            try {
                const response = await fetch(
                    'https://restcountries.com/v3.1/region/europe?fields=capital,population'
                );
                const data = await response.json();

                // Ordenando as cidades
                const sortedData = data.sort((a, b) => b.population - a.population);

                // Organizando as cidades
                const maxCity = sortedData[0];
                const minCity = sortedData[sortedData.length - 1];

                setCidade(sortedData);
                setMaxCity(maxCity);
                setMinCity(minCity);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchCidade();
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

export default Questao03;