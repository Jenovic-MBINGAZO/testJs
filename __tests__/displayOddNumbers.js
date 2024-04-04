const {displayOddNumbers} = require('../index.js')

describe('Écrivez une fonction qui prend un nombre "n" en paramètre et qui retourne une chaîne de caractère qui contient tous les nombres impairs de 1 à "n"', () => {
    test("Doit returner 0",  () => {
        expect(displayOddNumbers(0)).toBe("0");
    });


    test("Doit returner '1 3 5 7 9'",  () => {
        expect(displayOddNumbers(10)).toBe("1 3 5 7 9");
    });

    test("Doit returner 1 3 5 7 9 11 13 15",  () => {
        expect(displayOddNumbers(15)).toBe("1 3 5 7 9 11 13 15");
    });
});

