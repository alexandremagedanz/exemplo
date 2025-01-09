//Primeiro Exercício
let tipo_oper = "/"
let numero1 = 20
let numero2 = 100
let resultado1

if (tipo_oper == "+") {
    console.log("A Soma é " + (numero1 + numero2))
} else if (tipo_oper == "-") {
    console.log("A Subtração é " + (numero1 - numero2))
} else if (tipo_oper == "*") {
    console.log("A Multiplicação é " + (numero1 * numero2))
} else if (tipo_oper == "/") {
    console.log("A Divisão é " + (numero1 / numero2))
} else {
    console.log("Operação desconhecida!")
}

//Segundo Exercício
let numero3 = -30

if (numero3 < 0){
    console.log("O Número é Negativo!")
} else {
    console.log("O Número é Positivo!")
}

//Terceiro Exercício
let numero = 45
let divisor = 2 
let resultado

resultado = numero % divisor

if(resultado == 0){
    console.log("O número é Par!!");
} else {
    console.log("O número é Impar!!");
}

//Quarto Exercício
let numero4 = 45
let numero5 = 45

if(numero4 > numero5){
    console.log("O número4 é maior!!");
} else if(numero4 < numero5){
    console.log("O número5 é maior!!");
} else {
    console.log("O número é Igual!!");
}

//Quinto Exercício
let numero6 = 54
let numero7 = 54
let numero8 = 20

if(numero6 < numero7 && numero6 < numero8){
    console.log("O número6 é menor!!");
} else if(numero7 < numero6 && numero7 < numero8){
    console.log("O número7 é menor!!");
} else {
    console.log("O número8 é Menor!!");
}

//Sexto Exercício
let ano = 2025
let divisorano = 4 
let resultadoano

resultado = ano % divisorano

if(resultado == 0){
    console.log("O ano é Bissesto!!");
} else {
    console.log("O ano não é Bissesto!!");
}