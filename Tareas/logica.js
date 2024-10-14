
//User Profile
let edad = prompt("¿Cuántos años tienes?");
let nombre = prompt("¿Cuál es tú nombre?");
let peli = prompt("¿Cuáles son tús peliculas favoritas? (separadas por comas):");

const listaPeli = peli.split(',').map(peli => peli.trim());
const indiceAleatorio = Math.floor(Math.random() * listaPeli.length);
const peliculaSeleccionada = listaPeli[indiceAleatorio];

console.log("Tú edad es " + edad);
console.log("Tú nombre es " + nombre);
console.log(peliculaSeleccionada + " también es una de mis favoritas!!")

//Palindromo

function esPalindromo(frase) {
    const fraseLimpia = frase.toLowerCase(); 
    let fraseInvertida = ''; 
    for (let i = fraseLimpia.length - 1; i >= 0; i--) {
        fraseInvertida += fraseLimpia[i]; 
    }

    return fraseLimpia === fraseInvertida;
}

const inputUsuario = prompt("Introduce una palabra o frase:");

if (inputUsuario) {
    if (esPalindromo(inputUsuario)) {
        console.log( inputUsuario + " es un palíndromo.");
    } else {
        console.log( inputUsuario +  " no es un palíndromo.");
    }
}

