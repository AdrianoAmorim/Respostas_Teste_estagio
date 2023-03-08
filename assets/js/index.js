const boxQuestao1 = document.querySelector("#boxQuestao1 span");
const boxQuestao2 = document.querySelector("#boxQuestao2 span");
const boxQuestao5 = document.querySelector("#boxQuestao5 input");
const stringReverse = document.querySelector("#boxQuestao5 span");
const inpFibonacci = document.getElementById("inpFibonacci");
const btnEnviar = document.getElementById("btnEnviar");
const btnString = document.getElementById("btnString");


//RESULTADO DA QUESTAO 1:
const resultSoma = () => {
    var indice = 13;
    var soma = 0;
    var k = 0;

    while (k < indice) {
        k = k + 1
        soma = soma + k
    }

    boxQuestao1.textContent = soma;
}
resultSoma();
//-----------------------------------------------------------------------------

//RESPOSTA DA QUESTAO 2:
const startFibonacci = () => {
    const numero = fnGetValorInp();

    if (verPertence(numero)) {
        boxQuestao2.textContent = numero + " pertence à sequência de Fibonacci."

    } else {
        boxQuestao2.textContent = numero + " não pertence à sequência de Fibonacci."
    }
}

//GERA A SEQUENCIA
const fnFibonacci = (num) => {
    if (num <= 1) {
        return num;
    }
    return fnFibonacci(num - 1) + fnFibonacci(num - 2);
}

//VERIFICA SE O NUMERO PERTENCE A SEQUENCIA DE fIBONACCI
const verPertence = (num) => {
    let i = 0;
    while (fnFibonacci(i) <= num) {
        if (fnFibonacci(i) === num) {
            return true;
        }
        i++;
    }
    return false;
}

//PEGA O VALOR DO INPUT
const fnGetValorInp = () => {
    let vlFibonacci = inpFibonacci.value;
    return vlFibonacci;
}

//evento do btn para iniciar a funcao Fibonacci
btnEnviar.addEventListener("click", () => {
    startFibonacci();
});

//---------------------------------------------------------------------

//RESPOSTA DA QUESTAO 5:

const invertString = () => {
    let str = boxQuestao5.value;
    let reverseString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }

   stringReverse.textContent = reverseString;
}

btnString.addEventListener("click",()=>{
    invertString();
})