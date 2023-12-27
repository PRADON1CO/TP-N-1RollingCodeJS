let numeroA = parseFloat(prompt('Ingrese un valor numerico: '));
let numeroB = parseFloat(prompt('Ingrese un valor numerico: '));
let numeroC = parseFloat(prompt('Ingrese un valor numerico: '));

let mayor;

if(numeroA >= numeroB && numeroA >= numeroC){
    mayor = numeroA;
}else if(numeroB >= numeroA && numeroB >= numeroC){
    mayor = numeroB;
}else if(numeroC >= numeroA && numeroC >= numeroB){
    mayor = numeroC;
}

document.write('El numero más ingresado es: ' + mayor);

