const mysql = require("mysql2/promise")

const path = require("path")

const args = process.argv.splice(2)[0]

const envFile = args === "test" ? "../.env.test" : "../.env"

require("dotenv").config({
    path: path.join(__dirname, envFile),
});

const {DB_PASSWORD, DB_NAME, DB_USER, DB_HOST,DB_PORT} = process.env
