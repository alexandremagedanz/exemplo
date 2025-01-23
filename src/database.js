const {Sequelize} = require("sequelize")
require('dotenv').config()

class Database {
    constructor() {
        this.init();
    }
    init(){
        this.db = new Sequelize({
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            dialect: "mysql",
            password: process.env.DB_PASSWORD
        })
    }
}

module.exports = new Database();