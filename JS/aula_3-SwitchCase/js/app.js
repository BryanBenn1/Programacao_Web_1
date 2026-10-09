alert("Bem-vindos a aula de Switch Case")
let num1 = Number(prompt("Insira o primeiro número"))
let num2 = Number(prompt("Insira o segundo número"))
let soma, multi

let escolha = Number(prompt("Digite 1 para soma ou 2 para Multiplicação"))

switch(escolha){
    case 1:{
        soma = num1 + num2
        alert(`Você escolheu soma. A soma dos números é ${soma}`)
    }
    break

    case 2: {
        multi = num1 * num2
        alert(`Você escolheu Multiplicação. O produto dos números é ${multi}`)
    }
    break
    default: alert("ERROR 404! Opção inválida")
}