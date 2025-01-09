const alturas = [1.3, 1.5, 1.6, 1.8, 2]
var quantia = 0
var somasalt = 0
console.log("Lista de Alturas ", alturas)

alturas.forEach(item => {
    quantia += 1
    somasalt += item
})

console.log("Quantia ", quantia)
console.log("Soma ", somasalt)

var media = somasalt / quantia

console.log("Media ", media)

const arrayAlturas = [1.3, 1.5, 1.6, 1.8, 2]
let somasalt1 = 0

for (let i = 0; i < arrayAlturas.length; i++){
    somasalt1 += arrayAlturas[i]

}
console.log('média das alturas é: ', somasalt1 / arrayAlturas.length)