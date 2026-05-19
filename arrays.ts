let frutas:string[] = ['Morango', 'Banana','Pera', 'Uva', 'Abacaxi']

console.log("Frutas",frutas)
console.log("Frutas[1]", frutas[1])
console.log("Tamanho do array", frutas.length)
console.log("Ultimo elemento: ", frutas[frutas.length - 1])

// Carregar a lista

//frutas.sort() // ordem alfabetica
// frutas.reverse()

frutas[2] = "Melancia"
//frutas.push("Limão") // add na ultima posição
// frutas.unshift("Melão") // add na primeira posição
frutas.pop() // remove ultimo elemento do array
frutas.shift() // remove o primeiro elemento do array


for(let i = 0; i < frutas.length; i++) {
	console.log(`${ i + 1 } - ${frutas[i]}`)
}



