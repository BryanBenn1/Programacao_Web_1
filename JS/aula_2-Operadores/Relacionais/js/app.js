/*
Operadores Relacionais em JS
== -> Igual igual
=== -> Estritamente iguais (Valor e tipo)
!= -> Diferente
!== Estritamente diferente
>   -> Maior que
<   -> Menor que
>=  -> Maior ou igual à
<=  -> Menor ou igual à

*/
let num1 = 7 // 7 é considerado number
let num2 = "7" // "7" é considerado String (texto), é falso no Estritamente iguais(===) e no Diferente (!=),
               // mas verdadeiro no estritamente diferente(!==) e no Igual igual(==)
let num3 = Number("7") // "7" foi convertido em número, com isso irá dar True (==) ou (===)

console.log(num1 == num2)