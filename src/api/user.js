const serviceUser = require("../services/user")

class userApi {  
    async findAll(_, res) {
        try {
            const result = await serviceUser.findAll()
            
            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params
            const result = await serviceUser.findById(id)

            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async createUser(req, res) {
        try {
            const { email, password } = req.body
            await serviceUser.createUser(email, password)
            
            res.status(201).send()
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async updadeUser(req, res) {
        try {
            const { id } = req.params
            const { email, password } = req.body
            const result = await serviceUser.updateUser(id, email, password)
            
            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params
            await serviceUser.deleteUser(id)
            
            res.status(204).send()
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

}
module.exports = new userApi();