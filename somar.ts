const readline = require('readline-sync')
 
const valor1:number = readline.question('Informe o primeiro valor:')
const valor2:number = readline.question('Informe o segundo valor:')

const resultado = valor1 + valor2

console.log("A soma do "+valor1+" + "+valor2+" = "+resultado)
