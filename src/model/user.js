const users = new Array("Jão", "Ana", "Joe")

class user {
    findAll() {
        return users;
    }
    findByIndex(index) {
        return users[index];
    }
    createUser(user) {
        users.push(user)
    }
    updateUser(index, user){
        users[index] = user;
    }
    deleteUser(index) {
        users.splice(index, 1)
    }
}

module.exports = new user();