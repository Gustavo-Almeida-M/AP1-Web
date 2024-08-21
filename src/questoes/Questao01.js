const Questao01 = () => {
    //declarando a lista
    const lista = [
        { a: 10, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 }
    ]

    return (
        //chamando a função
        <>
            <Questao02 lista={lista} />
        </>
    )
}

function Questao02({ lista }) {

    console.log(lista);

    const maiorElemento = () => {
        let maiores = {};
        for (let i = 0; i < lista.length; i++) {
            lista[i].maior = Math.max(lista[i].a, lista[i].b, lista[i].c);
            maiores[i] = lista[i].maior;
        }
        return (
            <p>
                {JSON.stringify(maiores)}
            </p>
        )
    }
    return (
        <>
            <h1>{maiorElemento()}</h1>
        </>
    )
}

export default Questao01;