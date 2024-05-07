function ordenarMayorMenor(a, b, c) {
    var numeros = [a, b, c];
    numeros.sort(function(x, y) {
        return y - x;
    });
    return numeros;
}

function ordenarMenorMayor(a, b, c) {
    var numeros = [a, b, c];
    numeros.sort(function(x, y) {
        return x - y;
    });
    return numeros;
}

function sonIguales(a, b, c) {
    if (a === b && b === c) {
        return true;
    } else {
        return false;
    }
}

function calcular() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);

    var resultado = document.getElementById("resultado");

    // Mostrar los números ingresados
    resultado.innerHTML = "Números ingresados: " + numero1 + ", " + numero2 + ", " + numero3 + "<br>";

    // Ordenar y mostrar los números de mayor a menor
    var ordenadosMayorMenor = ordenarMayorMenor(numero1, numero2, numero3);
    resultado.innerHTML += "Ordenados de mayor a menor: " + ordenadosMayorMenor.join(", ") + "<br>";

    // Ordenar y mostrar los números de menor a mayor
    var ordenadosMenorMayor = ordenarMenorMayor(numero1, numero2, numero3);
    resultado.innerHTML += "Ordenados de menor a mayor: " + ordenadosMenorMayor.join(", ") + "<br>";

    // Verificar si los números son iguales e imprimir un mensaje
    if (sonIguales(numero1, numero2, numero3)) {
        resultado.innerHTML += "Los números son iguales.";
    } else {
        resultado.innerHTML += "Los números no son iguales.";
    }
}

