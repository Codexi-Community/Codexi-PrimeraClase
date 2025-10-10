import {numFibonnacci} from "../fibonnaci/main";


function calcularLosetas(losetas: number): string {


    const negras = calcularInteriorNegra(losetas)
    const negrasExterior = calcularExteriorNegra(losetas);

    const negrasTotales = negras + negrasExterior


    const blancas = calcularBlancas(losetas, negrasTotales);


    return negrasTotales + " " + blancas


}


function calcularBlancas(losetas: number, losetasNegras): number {
    return losetas * losetas - losetasNegras;
}

function calcularExteriorNegra(losetas: number): number {
    return losetas * 4;
}


function calcularInteriorNegra(losetas: number): number {

    if (losetas == 9) {
        return 9
    } else {
        return losetas + (losetas - 9);
    }
}


function main() {
    const casosPrueba = 6
    const casos = [7, 9, 11, 13, 15, 17]


    for (let numeroCuadrados = 0; numeroCuadrados < casosPrueba; numeroCuadrados++) {
        let losetasNegrasYBlancas = calcularLosetas(casos[numeroCuadrados])
        console.log(losetasNegrasYBlancas)
    }
}

main()