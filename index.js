const express = require('express')
const { apiSomar, apiSubtrair, apiMultiplicar, apiDividir } = require('./api/operacoes')
const app = express()
const porta = 3000
app.use(express.json())

app.post('/somar', apiSomar)

app.post('/sub', apiSubtrair)

app.post('/mult', apiMultiplicar)

app.post('/div', apiDividir)

app.listen(porta, () => {
    console.log('Servidor Rodando na porta ' + porta + '!')
})
