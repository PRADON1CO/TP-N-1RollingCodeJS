let numeroA = parseInt(prompt("Ingrese un número: "));

let divisores = "";

if (numeroA % 2 === 0) {
    divisores += " 2. ";
}
if (numeroA % 3 === 0) {
    divisores += " 3. ";
}
if (numeroA % 5 === 0) {
    divisores += " 5. ";
}
if (numeroA % 7 === 0) {
    divisores += " 7. ";
}

document.write('<br>El numero: ' + numeroA + ' es divisible por ' + divisores);