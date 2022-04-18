const http = require('http')
const brokerConfig = require('../../resources/services-routing.json').__broker__

class _AccountServiceTest {
    httpReq(options, data) {
        return new Promise((resolve, reject) => {
            console.log(options, data);
            // http request to server && send service response to client
            const req = http.request(options, response => {
                response.on('data', d => {
                    var resData = Buffer.from(d).toString()
                    resolve(resData)
                })
            })

            req.on('error', error => {
                reject(error)
            })

            if (data && options.method === 'POST') {
                req.write(JSON.stringify(data))
            }

            req.end()
        })
    }

    login() {
        // get random --> email || username
        var randKey;
        var randValue;
        var rand = Math.floor(Math.random(2))
        console.log('rand: ', rand);
        rand == 1 ? randKey = 'email' : randKey = 'username'
        rand == 0 ? randValue = 'payblot@gmail.com' : randKey = 'elPablit0'

        // login data
        var loginData = JSON.stringify({
            randKey: randValue,
            'password': 'halloschlecht',
        })

        this.httpReq({
            hostname: brokerConfig.url,
            port: brokerConfig.port,
            path: '/api/v1/account/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': loginData.length
            },
            loginData
        }).then(data => {
            console.log(data);
        }).catch(e => {
            console.log(e);
        })
    }

    register() {
        // register data
        var registerData = {
            'email': 'myemail@gmail.com',
            'password': 'halloschlecht',
        }

        this.httpReq({
            'hostname': brokerConfig.url,
            'port': brokerConfig.port,
            'path': '/api/v1/account/login',
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(registerData)
            },
            loginData: registerData
        }).then(data => {
            console.log(data);
        })
    }
}

module.exports._AccountServiceTest = _AccountServiceTest;