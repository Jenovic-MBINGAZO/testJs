const {averageAllNumbers} = require('../index.js')

describe('Écrivez une fonction qui retourne la moyenne de tous les nombres entre 1 et 100', () => {
    test("Doit retourner",  () => {
        expect(averageAllNumbers()).toBe(50.5);
    });
});

