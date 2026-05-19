import readline = require('readline-sync')

// Limpar a tela
console.clear()

// Formulario de captura da informações
const nomeAluno:string = readline.question("Informe o nome do aluno: ")
const nota1:number = Number(readline.question("Informe a primeira nota: "))
const nota2:number = Number(readline.question("Informe a segunda nota: "))
const nota3:number = Number(readline.question("Informe a terceira nota: "))
const numeroFaltas:number = Number(readline.question("Informe a quantidade de faltas"))
let situacao:string = ""

// A regra, media >= 7 aprovado, se a média for >= 5 e < 7 e faltas < 3, estara de recuperação, caso ao contrário, reprovado 
// e a quantidade de faltas < 5

const media = (nota1 + nota2 + nota3)/3

if (media >= 7 && numeroFaltas < 5) {
  situacao = "Aprovado"	
} else if (media >=5 && media < 7 && numeroFaltas < 3) {
  situacao = "Recuperação"
} else {
  situacao = "Reprovado"
}

console.log(`Olá, ${nomeAluno}! Sua média é de ${media.toFixed(2)} e um total de ${numeroFaltas} faltas,sua situação é de ${situacao}`)


