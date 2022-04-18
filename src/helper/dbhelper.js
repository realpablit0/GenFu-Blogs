const { application } = require("express");
const mongoose = require("mongoose");
const dbkey = require("../../resources/private/dbkey.json");
// Get uri from private dbkey.json
const DBuri = dbkey.uri;

// Get DB Models
const Login = require("../services/account/modules/models/login")
    /*
    console.log("Connecting to DB");
    mongoose.connect(uri)
        .then(() => {
            const newLogin = new Login({
                email: "test@mail.com",
                username: "TestUser47",
                password: "MySecretPW"
            })
            newLogin.save()
                .then((res) => console.log(res))
                .catch((err) => console.log(err));

        })
        .catch((err) => console.log(err))

    */


class DB {
    constructor(uri, model) {
        this.uri = uri;
        this.model = model;
    }
    connect() {

    }
}

// Create new Account
async function createAccount(acc) {
    // check if acc has all info
    if (!acc.email || !acc.username || !acc.password) {
        return false;
    }
    await mongoose.connect(DBuri)
        .then(() => {
            await Login.exists({ email: "bla" });
        })

    return true;
}
console.log(await createAccount({
    email: "test@mail.com",
    username: "TestUser47",
    password: "MySecretPW"
}));

// check if account with this email exists. returns true or false