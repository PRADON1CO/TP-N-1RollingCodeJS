let numeroA = parseFloat(prompt('Ingrese un valor numerico: '));
let numeroB = parseFloat(prompt('Ingrese un valor numerico: '));

if (numeroA > numeroB){
    document.write('<br>El ' + numeroA + ' es el número más grande ingresado');
}else if(numeroB > numeroA){
    document.write('<br>El ' + numeroB + ' es el número más grande ingresado');
}else{
    document.write('<br>Los números ingresados son iguales');
}