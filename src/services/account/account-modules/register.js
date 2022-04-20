// sqlite lib
const bcrypt = require('bcrypt');


const { checkEmail } = require("./check-email");

function register(payload) {
    return new Promise((resolve, reject) => {
        // payload check:
        // checkEmail()
        // checkUsername()
        const saltRounds = 10;
        const myPlaintextPassword = 's0/\/\P4$$w0rD';
        bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
            if (!err) return resolve(hash)
        });
    })
}

module.exports.register = register;