const { somar, sub, div, mult } = require("../services/operacoes")


function apiSomar(req, res) {
    try {
        const {num1 , num2} = req.body
        const result =  somar(num1, num2)
        res.status(200).send({result})   
    } catch (e) {
        res.status(500).send({msg: e.message})   
    }
}   

function apiSubtrair(req, res) {
    try {
        const {num1 , num2} = req.body
        const result =  sub(num1, num2)
        res.status(200).send({result})
    } catch (e) {
        res.status(500).send({msg: e.message})   
    }
} 

function apiDividir(req, res) {
    try {
        const {num1 , num2} = req.body
        const result =  div(num1, num2)
        res.status(200).send({result})
    } catch (e) {
        res.status(500).send({msg: e.message})   
    }
}

function apiMultiplicar(req, res) {
    try {
        const {num1 , num2} = req.body
        const result =  mult(num1, num2)
        res.status(200).send({result})
    } catch (e) {
        res.status(500).send({msg: e.message})   
    }
}

module.exports = {apiSomar, apiSubtrair, apiDividir, apiMultiplicar}