var minhaVariavel = "Minha variavel!!!";
function soma(x, y) {
    return x + y;
}
var xnum = 3;
var PI = 3.67;
var numeros = [1, 2, 3, 4];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
