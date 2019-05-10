var minhaVariavel = "Minha variavel!!!";

function soma(x, y){
    return x + y;
}

let xnum = 3;
const PI = 3.67;

let numeros = [1, 2, 3, 4];
numeros.map(function(valor){
    return valor * 2;
});
numeros.map(valor => valor * 2);

class Matematica{
    soma(x, y){
        return x + y;
    }
}