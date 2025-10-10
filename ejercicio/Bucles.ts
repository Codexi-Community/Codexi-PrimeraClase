




// While

let andando = true


let pasos = 0;


while (andando){
    console.log("Has dado un paso")
    pasos ++

    if (pasos >= 10){
        andando = false
        console.log("Has parado de andar")
    }
}



// Do while

let pasos2 = 0;

do {
    pasos2++;
    console.log(`Llevas ${pasos2} pasos. `)
} while (pasos2 > 10);

console.log("Has parado de andar");
