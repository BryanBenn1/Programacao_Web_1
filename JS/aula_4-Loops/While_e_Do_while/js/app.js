let num1, num2, soma, escolha, decisao

do{
   alert("Bem-vindos a aula de Switch Case")
num1 = Number(prompt("Insira o primeiro número"))
num2 = Number(prompt("Insira o segundo número"))
escolha = Number(prompt("Digite 1 para soma ou 2 para Multiplicação"))

soma = num1 + num2
multi = num1 * num2

switch(escolha){
    case 1:{
        
        alert(`Você escolheu soma. A soma dos números é ${soma}`)
    }
    break

    case 2: {
        
        alert(`Você escolheu Multiplicação. O produto dos números é ${multi}`)
    }
    break
    default: alert("ERROR 404! Opção inválida")
} 
decisao = Number(prompt("Você quer continuar? Digite 1 para continuar e 2 para sair."))

}while(decisao == 1)