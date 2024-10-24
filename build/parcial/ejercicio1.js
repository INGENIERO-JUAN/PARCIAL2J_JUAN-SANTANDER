function esPalindromo(numero) {
    let original = numero;
    let invertido = 0;
    while (numero > 0) {
        invertido = invertido * 10 + (numero % 10);
        numero = Math.floor(numero / 10);
    }
    return original === invertido;
}
for (let i = 1; i <= 1000; i++) {
    if (esPalindromo(i)) {
        console.log(i);
    }
}
//# sourceMappingURL=ejercicio1.js.map