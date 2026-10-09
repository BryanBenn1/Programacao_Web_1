/*
Operaores lógicos
&& -> (and/e)
|| -> (or/ou)
! -> (not/negado)
*/

//Exemplos
let num1 = 10
let num2 = 15
let num3 = 2

//Condição Simples
console.log("Condição Simples")

if(num1 >= num2){
    console.log("entrou no IF")
}
else{
    console.log("entrou no ELSE")
}

//Condição Composta
console.log("Condição Composta")

if((num1 >= num2) && (num1>num3)){
    console.log("entrou no IF")
}
else{
    console.log("entrou no ELSE")
}

//Condição Tripla
console.log("Condição Tripla")

if((num1 >= num2) && (num1>num3) || (num1<num3)){
    console.log("entrou no IF")
}
else{
    console.log("entrou no ELSE")
}
