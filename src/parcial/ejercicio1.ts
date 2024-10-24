// Función para verificar si un número es palíndromo
// Verificar si un número es palíndromo
function esPalindromo(numero: number): boolean {
    let original = numero;
    let invertido = 0;
    while (numero > 0) {
        invertido = invertido * 10 + (numero % 10);
        numero = Math.floor(numero);

        if (original===invertido){
            return true
        }


    }
  
}
  


 