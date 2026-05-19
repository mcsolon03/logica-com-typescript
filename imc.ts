import readline = require('readline-sync')

console.clear()

let loop:boolean = true

while(loop) {

  const peso:number = readline.questionFloat("Informe seu peso: ")
  const altura:number = readline.questionFloat("Informe a sua altura: ")

  let situacao:string

  const imc:number = peso / altura**2

  if (imc <= 18.5) {
    situacao = "Baixo Peso"
  } else if (imc > 18.5 && imc < 25) {
    situacao = "Peso Normal"
  } else if (imc >= 25 && imc < 30) {
    situacao = "Excesso de Peso"
  } else if (imc >= 30 && imc < 35) {
    situacao = "Obesidade de Classe 1"
  } else if (imc >= 35 && imc < 40) {
    situacao = "Obsedidade de Classe 2"
  } else {
    situacao = "Obsedidade de Classe 3"
  }

  console.log(`Seu indice de massa corporal é de ${imc.toFixed(2)} e sua situação atual é de ${situacao}`)
  const continuar = readline.question("Deseja continuar? S - Sim | N - Não")
   
  if (continuar.toUpperCase() === 'N') {
    loop = false
  }
}
