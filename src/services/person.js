const person = require("../model/person")
const user = require("../model/user")

class servicePerson {
    async findAll(){
        return person.findAll() 
    }
    findById(id){
        return person.findByPk(id, {include: {model : user}})
    }
    async createPerson(name, address, userId) {
        if (!name){
            throw new Error('Favor informar o nome!')
        } else if (!address) {
            throw new Error('Favor informar o endereço!')
        } else if (!userId) {
            throw new Error('Favor informar o userid!')
        }
        await person.create({
            name, address, userId
        })
    }   
    async updatePerson(id, name, address){
        const oldPerson = await this.findById(id)

        oldPerson.name = name || oldPerson.name
        oldPerson.address = address || oldPerson.address

        oldPerson.save()

        return oldPerson
    }
    async deletePerson(id) {
        const person = await this.findById(id)
        person.destroy()
    }
}

module.exports = new servicePerson()