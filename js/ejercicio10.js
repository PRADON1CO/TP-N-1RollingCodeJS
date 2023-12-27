let numeroA = parseInt(prompt("Ingrese un número: "));

if (numero % 2 === 0) {
    document.write('<br>El ' + numeroA + 'es divisible por 2.');
} else if (numero % 3 === 0) {
    document.write('<br>El ' + numeroA + 'es divisible por 3.');
} else if (numero % 5 === 0) {
    document.write('<br>El ' + numeroA + 'es divisible por 5.');
} else if (numero % 7 === 0) {
    document.write('<br>El ' + numeroA + 'es divisible por 7.');
}else{
    document.write('<br>El numero ingresado: ' + numeroA + ' ,no es divisible por 7, 5, 3 y 2.');
}