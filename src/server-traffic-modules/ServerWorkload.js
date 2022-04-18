const http = require('http')
const serviceConfig = require('../../resources/services-routing.json')

class ServerWorkload {
    constructor() {

    }

    getWorkload(service) {
        if (!service) {
            for (let i in serviceConfig) {
                this.pingServer({
                    "hostname": serviceConfig[i].url,
                    "port": serviceConfig[i].port,
                    "path": '/workload/',
                    'method': 'GET'
                }).then(data => {
                    console.log(data);
                }).catch(e => { throw e })
            }
        } else {
            this.pingServer({
                "hostname": serviceConfig[service].url,
                "port": serviceConfig[service].port,
                "path": '/workload/',
                'method': 'GET'
            }).then(data => {
                console.log(data);
            }).catch(e => { throw e })
        }
    }

    pingServer(options) {
        return new Promise((resolve, reject) => {
            const req = http.request(options, response => {
                response.on('data', d => {
                    var resData = Buffer.from(d).toString()
                    resolve(resData)
                })
            })

            req.on('error', error => {
                reject(error)
            })

            req.end()
        })

    }
}

module.exports.ServerWorkload = ServerWorkload;