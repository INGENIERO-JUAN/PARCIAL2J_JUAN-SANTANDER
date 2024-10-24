const numeros = [1, 2, 3, 4, 5];
const frutas = ["manzana", "banana", "cereza", "durazno", "uva"];
const booleanos = [true, false, true, false, true];
const tuplas = [
    [1, "uno"],
    [2, "dos"],
    [3, "tres"],
    [4, "cuatro"],
    [5, "cinco"]
];
numeros.push(6);
numeros.pop();
const indiceTres = numeros.indexOf(3);
const parteNumeros = numeros.slice(1, 4);
const cuadrados = numeros.map(num => num * num);
const pares = numeros.filter(num => num % 2 === 0);
const suma = numeros.reduce((acc, num) => acc + num, 0);
const texto = "Hola mundo esto es TypeScript";
const palabras = texto.split(" ");
const textoComas = palabras.join(",");
const arrayNumeros = [10, 20, 30, 40, 50];
const primerMayor25 = arrayNumeros.find(num => num > 25);
const indiceMayor25 = arrayNumeros.findIndex(num => num > 25);
const todosPositivos = numeros.every(num => num > 0);
const algunMayor40 = numeros.some(num => num > 40);
const combinados = [1, 2, 3].concat([4, 5, 6]);
const arrayOrdenar = [5, 1, 4, 2, 3];
arrayOrdenar.sort((a, b) => a - b);
arrayOrdenar.reverse();
const nombres = ["Carlos", "Ana", "Pedro", "Beatriz"];
nombres.sort();
const arrayBuscar = [10, 20, 30, 40, 50];
const contieneCuatro = arrayBuscar.indexOf(4) !== -1;
console.log("Números:", numeros);
console.log("Frutas:", frutas);
console.log("Booleanos:", booleanos);
console.log("Tuplas:", tuplas);
console.log("Índice del número 3:", indiceTres);
console.log("Parte del array de números:", parteNumeros);
console.log("Cuadrados de los números:", cuadrados);
console.log("Números pares:", pares);
console.log("Suma de los números:", suma);
console.log("Texto separado por comas:", textoComas);
console.log("Primer número mayor que 25:", primerMayor25);
console.log("Índice del primer número mayor que 25:", indiceMayor25);
console.log("Todos los números son positivos:", todosPositivos);
console.log("Algún número es mayor que 40:", algunMayor40);
console.log("Arrays combinados:", combinados);
console.log("Array ordenado y luego revertido:", arrayOrdenar);
console.log("Nombres ordenados alfabéticamente:", nombres);
console.log("El número 4 está presente en el array:", contieneCuatro);
//# sourceMappingURL=ejercicio2.js.map