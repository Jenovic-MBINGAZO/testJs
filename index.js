// 1. Écrivez une fonction qui prend un nombre positif "n" en paramètre et retourne une chaîne de caractères contenant des nombres de 1 à "n"

function displayNumbers(n) {
    if (n === 0) {
        let r = String(0);
        return r ;
    }
    let result = '';
    for (let $i = 1; $i < n+1; $i++) {
     result +=$i.toString()+' ';
    }
    return result.trim();
}
console.log(displayNumbers(5));

// 2. Écrivez une fonction qui prend un nombre "n" en paramètre et qui retourne une chaîne de caractère qui contient tous les nombres impairs de 1 à "n".

function displayOddNumbers(n) {
    if (n === 0) {
        let r = String(0);
        return r ;
    }
    else{
    let $npaire = '';
    for (let $i = 1; $i < n+1; $i++) {
        if ( $i%2 !== 0) {
            $npaire +=$i.toString()+' ';
        } 
    }
    return $npaire.trim();
}
}
const n = 10;
console.log(displayOddNumbers(n));





// 3. Écrivez une fonction qui retourne une chaîne de caractère qui contient toutes les tables de multiplication de 1 à 10.

/*
    1 * 1 = 1
    1 * 2 = 2
    1 * 3 = 3
    1 * 4 = 4
    1 * 5 = 5
    1 * 6 = 6
    1 * 7 = 7
    1 * 8 = 8
    1 * 9 = 9
    1 * 10 = 10

    2 * 1 = 2
    2 * 2 = 4
    2 * 3 = 6
    2 * 4 = 8
    2 * 5 = 10
    ...
 */

function displayAllMultiplicationTables() {
    let $multiplicationTables = '';

    for (let $i = 1; $i <= 10; $i++) {
        for (let $j = 1; $j <= 10; $j++) {
            $multiplicationTables += `${$i} * ${$j} = ${$i * $j}\n`;
        }
        $multiplicationTables += '\n'; 
    }

    return $multiplicationTables.trim();
}

console.log(displayAllMultiplicationTables());


// 4. Écrivez une fonction qui prend deux nombres en paramètre n et m et qui retourne la somme de tous les nombres entre n et m.
//
// calcule la somme de tous les nombres entre 1 et 100.

function sumAllNumbers(n, m) {
    let $sumTotal = 0 ;
    for (let $i = n; $i <= m; $i++) {
      $sumTotal += $i; 
    }
    return $sumTotal;
}
console.log(sumAllNumbers(1,100));

// 5. Écrivez une fonction qui retourne la moyenne de tous les nombres entre 1 et 100.


function averageAllNumbers() {
    let $sum = 0 , $n = 100;
    for (let $i = 1; $i <= $n; $i++) {
      $sum +=$i;
    }
    return $sum/$n;
}
averageAllNumbers();



module.exports = {
    displayNumbers,
    displayOddNumbers,
    displayAllMultiplicationTables,
    sumAllNumbers,
    averageAllNumbers
}