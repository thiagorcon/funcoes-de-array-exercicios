// # Exercício 2
// Crie um array de números que contenha 8 números.
// Com este array e utilizando o `map()`, retorne os arrays abaixo:

// 1. Retorne um novo array contendo os números multiplicados por 5. Guarde esse array dentro de uma variável `const quintuplos`.
// 2. Retorne um novo array contendo os números divididos por 2. Guarde esse array dentro de uma variável `const metades`.
let num = [1,2,3,4,5,6,7,8]
let multCinco = num.map ((item) => {
     let  quintuplos = item * 5
     return quintuplos
})
console.log(multCinco);
let novoArray = multCinco.map ((item) =>{
     let metades = item / 2
     return metades
})
console.log(novoArray);