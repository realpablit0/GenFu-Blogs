const mongoose = require("mongoose");
const Login = require("./models/login");
const dbkey = require("../../../../resources/private/dbkey.json");
const { application } = require("express");

class Database {
    constructor(uri) {
        this.uri = uri;
        this.conn = mongoose.connect(uri);
        this.conn.then(() => application)
    }
}

let ping = new Database(dbkey.uri)
console.log(ping)
    /*
    mongoose
        .connect(dbkey.uri)
        .then(() => {
            console.log("mongo db connection:");
            let login = new Login({
                email: "email@gmail.com",
                username: "Kablit0",
                password: "12345",
            });
            login
                .save()
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err)).finally(() => );
    */
module.exports.Database = Database;