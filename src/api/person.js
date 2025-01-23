const servicePerson = require("../services/person")

class personApi {  
    async findAll(_, res) {
        try {
            const result = await servicePerson.findAll()
            
            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params
            const result = await servicePerson.findById(id)

            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async createPerson(req, res) {
        try {
            const { name, address, userId } = req.body
            await servicePerson.createPerson(name, address, userId)
            
            res.status(201).send()
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async updadePerson(req, res) {
        try {
            const { id } = req.params
            const { name, address } = req.body
            const result = await servicePerson.updatePerson(id, name, address)
            
            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async deletePerson(req, res) {
        try {
            const { id } = req.params
            await servicePerson.deletePerson(id)
            
            res.status(204).send()
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

}
module.exports = new personApi();