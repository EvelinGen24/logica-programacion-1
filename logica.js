// Solicitar al usuario 3 números y guardarlos en variables
var numero1 = prompt("Ingrese el primer número:");
var numero2 = prompt("Ingrese el segundo número:");
var numero3 = prompt("Ingrese el tercer número:");

// Convertir los números ingresados a tipo numérico
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
numero3 = parseFloat(numero3);

// Función para ordenar los números de mayor a menor
function ordenarMayorMenor(a, b, c) {
    var numeros = [a, b, c];
    numeros.sort(function(x, y) {
        return y - x;
    });
    return numeros;
}

// Función para ordenar los números de menor a mayor
function ordenarMenorMayor(a, b, c) {
    var numeros = [a, b, c];
    numeros.sort(function(x, y) {
        return x - y;
    });
    return numeros;
}

// Función para identificar si los números son iguales
function sonIguales(a, b, c) {
    if (a === b && b === c) {
        return true;
    } else {
        return false;
    }
}

// Mostrar los números ingresados
console.log("Números ingresados: " + numero1 + ", " + numero2 + ", " + numero3);

// Ordenar y mostrar los números de mayor a menor
var ordenadosMayorMenor = ordenarMayorMenor(numero1, numero2, numero3);
console.log("Ordenados de mayor a menor: " + ordenadosMayorMenor.join(", "));

// Ordenar y mostrar los números de menor a mayor
var ordenadosMenorMayor = ordenarMenorMayor(numero1, numero2, numero3);
console.log("Ordenados de menor a mayor: " + ordenadosMenorMayor.join(", "));

// Verificar si los números son iguales e imprimir un mensaje
if (sonIguales(numero1, numero2, numero3)) {
    console.log("Los números son iguales.");
} else {
    console.log("Los números no son iguales.");
}
