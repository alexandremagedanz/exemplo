const express = require('express')

const app = express()
const porta = 3000
app.use(express.json())

function somar(num1, num2) {
    return num1 + num2
}

app.post('/somar', (req, res) =>{
    const {num1 , num2} = req.body
    const result =  somar(num1, num2)
    res.status(200).send({result})
})

app.get('/subtrair', (req, res) =>{
    const {num1 , num2} = req.query
    res.send('A subtração é ' + (Number(num1) - Number(num2)))
})

app.get('/multiplicar', (req, res) =>{
    const {num1 , num2} = req.query
    res.send('A multiplicação é ' + (Number(num1) * Number(num2)))
})

app.get('/dividir', (req, res) =>{
    const {num1 , num2} = req.query
    res.send('A multiplicação é ' + (Number(num1) / Number(num2)))
})

app.get('/parimpar', (req, res) =>{
    const {num1} = req.query
    let tipo = ''

    if ((num1 % 2) == 0) {
        tipo = 'Par'
    } else {
        tipo = 'Impar'
    }
    res.send('A numero é ' + tipo)
})

app.listen(porta, () => {
    console.log('Servidor Rodando na porta ' + porta + '!')
})
