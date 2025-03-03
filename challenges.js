// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar la suma de todos los elementos del arreglo
    let i;
    i=0;
    suma=0;
    while(i< arreglo.length){
        suma=suma+arreglo[i];
        i++;
    }
    return suma;
}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número más grande del arreglo
    let i;
    let num_mayor;
    i=0;
    num_mayor=arreglo[0];
    while(i< arreglo.length){
        if(arreglo[i]>num_mayor){
            num_mayor=arreglo[i];
        }
        i++;
    }
    return num_mayor;
}

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo solo con los números pares
    let i;
    let arreglo_pares;
    i=0;
    arreglo_pares=[];
    while(i<arreglo.length){
        if(arreglo[i]%2===0){
            arreglo_pares.push(arreglo[i]);
        }
        i++;
    }
    return arreglo_pares;
}

// Reto 4: Contar Vocales
function contarVocales(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número de vocales en el texto
    let i;
    let cant_vocales;
    let vocales;
    i=0;
    cant_vocales=0;
    vocales="aeiouAEIOU"; //Lista de vocales
    while(i<texto.length){
        if(vocales.includes(texto[i])){
            cant_vocales++;
        }
        i++;
    }
    return cant_vocales;
}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo con los elementos en orden inverso
    let i = arreglo.length - 1; // Empezamos desde el último elemento
    let arreglo_invertido = []; 

    while (i >= 0) { // 
        arreglo_invertido.push(arreglo[i]); // Agregamos cada elemento al nuevo arreglo
        i--;
    }

    return arreglo_invertido;
}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    // Los estudiantes implementarán esta función
    // Debe retornar el promedio de las notas
    let i;
    let suma;
    let promedio;
    i=0;
    suma=0;
    while(i< notas.length){
        suma=suma+notas[i];

        i++;
    }
    promedio=suma/notas.length;
    return promedio;
}

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    // Los estudiantes implementarán esta función
    // Debe retornar cuántas veces aparece la letra en el texto
    let i;
    let cantidad;
    i=0;
    cantidad=0;
    while(i<texto.length){
        if(texto[i].toLowerCase()===letra.toLowerCase()){
            cantidad++;
        }
        i++;
    }
    return cantidad;
}

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo sin elementos duplicados
    let i = 0;
    let valores_unicos = []; // Nuevo arreglo para almacenar valores únicos

    while (i < arreglo.length) {
        if (!valores_unicos.includes(arreglo[i])) { // Si el número no está en 'unicos', lo agregamos
            valores_unicos.push(arreglo[i]);
        }
        i++;
    }

    return valores_unicos;
}

// Reto 9: Palíndromo
function esPalindromo(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar true si el texto es un palíndromo, false si no
    let i = 0;
    let j = texto.length - 1; // Índice del último carácter

    while (i < j) {
        if (texto[i].toLowerCase() !== texto[j].toLowerCase()) {
            return false; // Si no coinciden, no es un palíndromo
        }
        i++; // Avanzamos desde el inicio
        j--; // Retrocedemos desde el final
    }

    return true;
}