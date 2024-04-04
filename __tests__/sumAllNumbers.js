const {sumAllNumbers} = require('../index.js')

describe('Écrivez une fonction qui prend deux nombres en paramètre n et m et qui retourne la somme de tous les nombres entre n et m', () => {

    test("Doit returner 0",  () => {
        expect(sumAllNumbers(0, 0)).toBe(0);
    });

    test("Doit returner 55",  () => {
        expect(sumAllNumbers(1, 10)).toBe(55);
    });

    test("Doit returner 5050",  () => {
        expect(sumAllNumbers(1, 100)).toBe(5050);
    });
});

