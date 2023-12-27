let numeroA = parseInt(prompt("Ingrese un número: "));

if (numeroA % 2 === 0) {
    document.write('<br>El ' + numeroA + ' es divisible por 2.');
} else if (numeroA % 3 === 0) {
    document.write('<br>El ' + numeroA + ' es divisible por 3.');
} else if (numeroA % 5 === 0) {
    document.write('<br>El ' + numeroA + ' es divisible por 5.');
} else if (numeroA % 7 === 0) {
    document.write('<br>El ' + numeroA + ' es divisible por 7.');
}else{
    document.write('<br>El numero ingresado: ' + numeroA + ' ,no es divisible por 7, 5, 3 y 2.');
}