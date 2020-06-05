/* Exercicio clacular IMC*/

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) { // aqui é para verificar um evento
    e.preventDefault(); // aqui para prevenir evento de enviar formulario 
    const inputPeso = e.target.querySelector('#peso'); // aqui é para pegar o evento no peso(o dado que entra)
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value); // aqui é para pegar o valor de entrada no peso e tranformar em number
    const altura = Number(inputAltura.value);

    if (!peso) { // aqui é para verificar que o que for digitado sera um numero , caso nao , havera um retorno 
        setResultado('Peso invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura invalido', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true); // aqui é para enviar o resultado 
})

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obeisdade grau 2', 'Obesidade grau 3']; // aqui é para retornar  o valor do array usando o indice

    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    } if (imc < 18.5) {
        return nivel[0];
    }
}
function criaP() {
    const p = document.createElement('p'); // criando um elelemnto em JS
    //p.classList.add('paragrafo-resultado'); // aqui é para adicionar uma classe em JS , e essa classe pode ser usada no CSS
    return p; // sempre que usa o return; o codigo nao continua para os proximos codigo abaixo
}

function setResultado(msg, isValid) { // funcao para receber o resultado do input
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP(); // aqui é pára inserir o elemento p na div html  
    if (isValid) { // se o resultado for true a cor sera verde
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg; // aqui é para mostrar na tela o mensagem da funcao p
    resultado.appendChild(p);
}