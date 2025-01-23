const user = require("../model/user")

class serviceUser {
    findAll(){
        return user.findAll()
    }
    findByIndex(index){
        return user.findByIndex(index)
    }
    createUser(name) {
        user.createUser(name)
    }
    updateUser(index, name){
        user.updateUser(index, name)
    }
    deleteUser(index) {
        user.deleteUser(index)
    }
}

module.exports = new serviceUser()