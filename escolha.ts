import readline = require('readline-sync')

console.clear()

let loop:boolean = true
let preco:number = 0
let combos:string[] = ['Pet Coca + Bomba', 'Pet Guarana + Bomba', 'Café + Bolo', 'Café com Leite']
let comboSelecionado:string[] = []
let valores:number[] = []

while(loop) {
  console.log("Combo para o lanche:")
  combos.forEach((combo,index) => console.log(`${index + 1} - ${combo}`))

  const opcoes:number = readline.questionInt()
  
  switch(opcoes) {
    case 1:
      comboSelecionado.push(combos[opcoes - 1])
      preco = 10.5
      valores.push(preco)
    break
    case 2:
      comboSelecionado.push(combos[opcoes - 1])
      preco = 10
      valores.push(preco)
    break
    case 3:
      comboSelecionado.push(combos[opcoes - 1])
      preco = 7.5
      valores.push(preco)
    break
    case 4:
      comboSelecionado.push(combos[opcoes - 1])
      preco = 2.5
      valores.push(preco)
    break
    default:
      console.log("Ops! Opção invalida informe numero de 1 a 4")
    break
  }
  

  const parar = readline.questionInt("Deseja algo à mais? 1 - Sim | 2 - Não ")
  loop = parar !== 2 ? true : false
} 

console.log("Resumo do pedido")
for(let i = 0; i < comboSelecionado.length; i++) {
  console.log(`   ${comboSelecionado[i]} ............. R$ ${valores[i].toFixed(2)}`)
}


//let t = 0
//valores.forEach(valor => t += valor)
const totalAcumulado = valores.reduce((acc, valor) => acc + valor)

//console.log("Total", t)
//console.log("Total com reduce", totalAcumulado)

console.log(`Você selecionou ${valores.length} item(ns) seu total é de R$ ${totalAcumulado.toFixed(2)}`)

