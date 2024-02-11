const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root1234",
    database: "weather_test",
});

module.exports = connection;