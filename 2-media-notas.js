const nota1 = 2
const nota2 = 2
const nota3 = 2

const soma = nota1 + nota2 + nota3

const media = soma / 3

if (media >= 0 && media <= 3){
    console.log("Horrível")
} else if (media > 3 && media < 7 ) {
    console.log("Da pra melhorar!")
} else if (media >= 7 && media <= 10 ) {
    console.log("Excelente!")
} else {
    console.log("Média Inválida!")
}