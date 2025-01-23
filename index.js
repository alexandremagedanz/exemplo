const express = require('express')
const router = require('./src/routes/user')

const app = express()
const porta = 3000
app.use(express.json())

app.use('/api/v1/user', router)

app.listen(porta, () => {
    console.log('Servidor Rodando na porta ' + porta + '!')
})
