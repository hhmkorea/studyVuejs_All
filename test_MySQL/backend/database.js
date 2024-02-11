const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "1521",
    user: "root",
    password: "root1234",
    database: "weather_test",
});

module.exports = connection;