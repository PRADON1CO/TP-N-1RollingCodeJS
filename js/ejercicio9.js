let oracion = prompt('Ingrese una frase: ');

let vocales = "";
longitud = oracion.length;

for (let i = 0 ; i < longitud ; i++){
    let caracter = oracion.charAt(i);

    if(caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' || caracter === 'A' || caracter === 'E' || caracter === 'I' || caracter === 'O' || caracter === 'U'){
        vocales += caracter;
    } 
}

document.write('<br>Las vocales encontradas en la frase ingresada son: ' + vocales);