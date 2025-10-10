import { numFibonnacci } from "../main";

describe('Comprobación de los 2 primeros números de fibonnaci', () => {

    // 2 Iteraciones del numero de fibonnaci
    test("Los dos primeros números de fibonnaci", () => {
        const resultado = numFibonnacci(2);
        expect(resultado).toBe(1);
    });


});

describe('Comprobación de los 10 primeros números de fibonnaci', () => {

    // 10 Iteraciones del numero de fibonnaci
    test("Los diez primeros números de fibonnaci", () => {
        const resultado = numFibonnacci(10);
        expect(resultado).toBe(34);
    });


});
