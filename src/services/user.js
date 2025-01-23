const User = require("../model/user")

class serviceUser {
    async findAll(transaction){
        return User.findAll({transaction}) 
    }
    findById(id, transaction){
        return User.findByPk(id, {transaction})
    }
    async createUser(email, password, transaction) {
        if (!email) {
            throw new Error('Favor informar o email!')
        } else if (!password) {
            throw new Error('Favor informar a senha!')
        }
        return User.create({
             email, password
        },{transaction})
    }   
    async updateUser(id, email, password, transaction){
        const oldUser = await this.findById(id)

        oldUser.email = email || oldUser.email
        oldUser.password  = password || oldUser.password

        oldUser.save({transaction})

        return oldUser
    }
    async deleteUser(id, transaction) {
        const user = await this.findById(id)
        user.destroy({transaction})
    }
}

module.exports = new serviceUser()