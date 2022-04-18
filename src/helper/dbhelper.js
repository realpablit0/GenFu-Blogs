const { application } = require("express");
const mongoose = require("mongoose");
const dbkey = require("../private/dbkey.json");
// Get uri from private dbkey.json
const uri = dbkey.uri;

// Get DB Models
const Login = require("./dbmodels/login")
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


// Create new Account
async function createAccount(acc) {
    // check if acc has all info
    if (!acc.email || !acc.username || !acc.password) {
        return false;
    }
    mongoose.connect(uri)
        .then(() => {
            await Login.exists({ email: acc.email })
        })

    return true;
}
console.log(createAccount({
    email: "test@mail.com",
    username: "TestUser47",
    password: "MySecretPW"
}));

// check if account with this email exists. returns true or false