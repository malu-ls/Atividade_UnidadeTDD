const test = require ('tape');
const palindromo = require ('../algorithms/palindromo');

function validatePalindromo(){
    test("Verificar se é palindromo", (t)=> {
        t.assert(palindromo.isPalindromo("Rotator")=== true, "Rotator é um palíndromo"),
        t.assert(palindromo.isPalindromo("bob")=== true, "bob é um palíndromo"),
        t.assert(palindromo.isPalindromo("madam")=== true, "madam é um palindromo"),
        t.assert(palindromo.isPalindromo("mAlAyAlam")=== true, "mAIAyAlam é um palíndromo"),
        t.assert(palindromo.isPalindromo("1")=== true, "1 é um palíndromo"),
        t.assert(palindromo.isPalindromo("Able was I, ere I saw Elba")=== true, "Able was I, ere I saw Elba é um palíndromo"),
        t.assert(palindromo.isPalindromo("Madam I'm Adam")=== true, "Madam I'm Adam é um palíndromo"),
        t.assert(palindromo.isPalindromo("Step on no pets.")=== true, "Step on no pets é um palíndromo"),
        t.assert(palindromo.isPalindromo("Top spot!")=== true, "Top spot! é um palíndromo"),
        t.assert(palindromo.isPalindromo("02/02/2020")=== true, "02/02/2020 é um palíndromo"),

        t.assert(palindromo.isPalindromo("xyz")=== false, "xyz não é um palíndromo"),
        t.assert(palindromo.isPalindromo("elephant")=== false, "elepgant não é um palíndromo"),
        t.assert(palindromo.isPalindromo("Country")=== false, "Country não é um palíndromo"),
        t.assert(palindromo.isPalindromo("Top . post!")=== false, "Top . post! não é um palíndromo"),
        t.assert(palindromo.isPalindromo("Wonderful-fool")=== false, "Wonderful-fool não é um palíndromo"),
        t.assert(palindromo.isPalindromo("Wild imagination")=== false, "Wild imagination não é um palíndromo"),
        t.end()
    })
}

module.exports = {validatePalindromo}