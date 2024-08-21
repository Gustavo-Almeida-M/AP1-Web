import { useState } from "react";
//coloquei a declaração aqui porque quando coloquei dentro da função pokemon, o valor estava sendo reiniciado sempre
let frente = true;

const Questao02 = () => {

    const [url, setUrl] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`);

    //Anteriormente o valor de frente estava sendo declarado aqui, mas por alguma razão, o valor estava sendo reiniciado sempre que a função mudarImagem era chamada 

    const mudarImagem = () => {
        //coloquei esse e o outro console para acompanhar o valor de frente
        console.log(frente);

        if (frente == true) {
            setUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png`);
            frente = false;
        } else {
            frente = true;
            setUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`);
        }

        console.log(frente);

    }

    return (
        <>
            <a>
                <img src={url}></img>
                <button onClick={mudarImagem}>Mudar posição</button>
            </a>
        </>
    );
}

export default Questao02;