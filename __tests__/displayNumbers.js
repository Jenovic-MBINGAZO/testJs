const {displayNumbers} = require('../index.js')

describe('Écrivez une fonction qui prend un nombre "n" en paramètre et retourne une chaîne de caractères contenant des nombres de 1 à "n"', () => {
    test("Doit returner 0",  () => {
        expect(displayNumbers(0)).toBe("0");
    });


    test("Doit returner 0 '1 2 3 4 5 6 7 8 9 10'",  () => {
        expect(displayNumbers(10)).toBe("1 2 3 4 5 6 7 8 9 10");
    });

    test("Doit returner '0 1 2 3 4 5'",  () => {
        expect(displayNumbers(5)).toBe("1 2 3 4 5");
    });
});

