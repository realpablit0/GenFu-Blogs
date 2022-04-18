// sqlite lib
// crypt

const { checkEmail } = require("./check-email");

function register(payload) {
    // payload check:
    checkEmail()
    checkUsername




    return new Promise((resolve, reject) => {

    })
}

module.exports.register = register;