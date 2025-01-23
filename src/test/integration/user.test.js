const database = require("../../database")
const serviceUser = require("../../services/user")


describe("Teste de Usuário!", () => {

    beforeAll(async() => {
        this.trasaction = await database.db.transaction()
    })

    it("should create an user", async () => {
        const user = {
            email: "lucas4@teste.com",
            password: 123456
        }

        const addUser = await serviceUser.createUser(user.email, user.password, this.trasaction)
        this.id = addUser.id
        

        expect(addUser.email).toBe(user.email)
        expect(addUser.password).toBe(user.password)
    })

    it("should update an user", async () => {
        const user = {
            id: this.id,
            email: "lucas2@teste.com",
            password: 123456
        }

        const updUser = await serviceUser.updateUser(user.id, user.email, user.password, this.trasaction)

        expect(updUser.email).toBe(user.email)
        expect(updUser.password).toBe(user.password)
    })

    it("should delete an user", async () => {
        const user = {
            id: this.id
        }

        const response = await serviceUser.deleteUser(user.id, this.trasaction)

        expect(response).toBe(true)
    })
})