const serviceUser = require("../services/user")

class userApi {
     
    findAll(_, res) {
        try {
            const result = serviceUser.findAll()
            
            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    findByIndex(req, res) {
        try {
            const { index } = req.params
            const result = serviceUser.findByIndex(index)

            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    createUser(req, res) {
        try {
            const { name } = req.body
            serviceUser.createUser(name)
            
            res.status(201).send()
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    updadeUser(req, res) {
        try {
            const { index } = req.params
            const { name } = req.body
            serviceUser.updateUser(index, name)

            const result = serviceUser.findByIndex(index)
            
            res.status(200).send({ result })
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

    deleteUser(req, res) {
        try {
            const { index } = req.params
            serviceUser.deleteUser(index)
            
            res.status(204).send()
        } catch (e) {
            res.status(500).send({ msg: e.message })
        }
    }

}

module.exports = new userApi();