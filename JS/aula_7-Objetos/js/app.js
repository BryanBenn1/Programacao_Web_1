/*
Objetos armazenam dados organizados com chave e valor
ex01:

*/

let aluno = {
    nome: "Bryan",
    sobrenome: "Bennington",
    funcao: "Aluno"
}


//Com loop FOR IN conseguimos percorrer o objeto
for(let prop in aluno){
    console.log(`${prop}: ${aluno[prop]}`)
}