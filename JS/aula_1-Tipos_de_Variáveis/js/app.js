/*
Tipos de variáveis

let (è uma variável que pode mudar de valor)
const(significa constante, e não pode mudar de valor)
Exemplos
*/

let cpf = "00244588763"
//console.log(cpf)
//cpf = "11411255606"
//console.log(cpf) // Erro! Assgnment to constant variable.(não aceito)

/*
Variáveis criadas fora de {} (Bloco de instruções) são
chamados de variáveis de escopo global, ou seja, você pode
usar a variável em qualquer parte do código

Variáveis criadas dentro {bloco} após a saída do bloco
a variável é deletada
*/

//Tipos de variáveis - OBS: Em JS não precisa declarar o tipo ou tipagem

let num1 = 10 // Variáveis do tipo numérica são chamadas de "Number"
let num2 = 10.5 // Tipo double
let nome = "Gilmar" // String
let verdade = true // Tipo boolean
let resposta // undefined
let saldo = null // Variável foi definida com valor nullo

// Como saber o tipo de variável use "typeof"

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof nome)
console.log(typeof verdade)
console.log(typeof resposta)
console.log(typeof saldo)

//