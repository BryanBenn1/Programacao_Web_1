/*
Array em JavaScript

O que é?

Uma variável armazena apenas 1 valor
enquanto o array armazena múltiplos valores
*/


/*

//ex01:
//estrutura

let frutas = ["Maçã", "Banana", "Uva", "Morango", "Caqui"]

//console.logo(frutas)
//console.log(frutas[0])

//posso usar um loop para mostrar o array

for(let i = 0; i < 3; i++){
    console.log(`A ${i + 1}° Fruta é ${frutas[i]}`)
    //console.log("A " + (i + 1) + "° Fruta é " + frutas[i]) //Exemplo sem conotação
}


// Métodos dos Arrays
pop() - Remove um item do fim da fila
push() - Adiciona um item no fim da fila
shift() - Remove o primeiro item da fila
unshift() - Adiciona um item no início da fila
length - Conta o tamanho do array
*/

let frutas = ["Maçã", "Banana", "Uva"]

frutas.push("Morango")
frutas.push("Pêra")
frutas.unshift("Abacate")
frutas.shift()
frutas.pop()

console.log(frutas)
