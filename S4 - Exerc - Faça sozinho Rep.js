//Primeiro Exercício
let numeropar = 0
let numeroimpar = 0
let limitador = 200
let start = 0

for ( i = start; i<=limitador; i++ ){
    if(( i % 2 ) == 0){
        numeropar = numeropar + 1;
    } else {
        numeroimpar = numeroimpar + 1;
    }
}
console.log(numeropar + " Numeros Pares. " + numeroimpar + " Numeros Impares.")

//Segundo Exercício
let inicio = -30
let fim = 75
let somalista = 0

for (let i = inicio; i<=fim; i++){
    somalista = somalista + i
}
console.log("Soma da Lista é " + somalista)

//Teceiro Exercício
let numeroescohido = 35
for (let i = 0; i<=numeroescohido; i++){
    console.log("I é " + i + " Multiplicando por 3 é " + (i * 3))
}

//Quarto Exercício
let subpar = 0
let sumimpar = 0

for ( i = 0; i<=100; i++ ){
    if(( i % 2 ) == 0){
        subpar = subpar - i;
    } else {
        sumimpar = sumimpar + i;
    }
}
console.log(subpar + " Subtração de Numeros Pares. " + sumimpar + " Adição de Numeros Impares.")

//Quinto Exercício
let somafib = 0
let quantidaElementos = 15
for (let i = 0; i<quantidaElementos; i++){
    console.log(typeof ElementoIni)
    if(typeof ElementoIni === "undefined") {
        var ElementoIni = 0
        console.log("Elemento i = " + ElementoIni)
    } else if (ElementoIni == 0 && typeof ElementoFim === "undefined") {
        var ElementoFim = 1
        console.log("Elemento i = " + ElementoFim)
    } else {
        somafib = ElementoIni + ElementoFim
        console.log("Elemento i = " + somafib)
        ElementoIni = ElementoFim
        ElementoFim = somafib
    }
}

function numeroPrimo(num) {
    for (var i = 2; i < num; i++) {
      if(num % i === 0) {
         return false;
      }
    }
    return num !== 1;  
  }
  console.log( numeroPrimo(8) );

