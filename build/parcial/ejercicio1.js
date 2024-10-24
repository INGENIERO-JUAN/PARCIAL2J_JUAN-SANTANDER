function esPalindromo(numero) {
    const strNumero = numero.toString();
    const longitud = strNumero.length;
    for (let i = 0; i < longitud; i++) {
        if (strNumero[i] !== strNumero[longitud - 1 - i]) {
            return false;
        }
    }
    return true;
}
for (let i = 1; i <= 1000; i++) {
    if (esPalindromo(i)) {
        console.log(i);
    }
}
//# sourceMappingURL=ejercicio1.js.map