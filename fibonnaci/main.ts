

/*
Vamos a resolver un problema, dicho problema lo vamos a ir resolviendo
mientras vamos realizando estas prácticas par aapanreder la sintaxis.
Dicho ejercicio es el de Fibonnaci.

Vamos a imprimir los 100 primeros numeros de la succesión de fibonnaci.
*/

export function numFibonnacci(numeroRepeticiones: number) : number{
    let numero1 = 0
    let numero2 = 1

    console.log("Succesión - Secuencia de fibonnaci")

    for (let numeroActual = 1; numeroActual < numeroRepeticiones; numeroActual++) {
        console.log(`Numero ${numeroActual} = ${numero1}`)

        const siguienteNumero = numero1 + numero2
        numero1 = numero2
        numero2 = siguienteNumero
    }

    return numero1
}

numFibonnacci(20)




