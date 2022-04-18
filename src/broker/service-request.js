const http = require('http')
const { ServerWorkload } = require('../server-traffic-modules/ServerWorkload')

class ServiceRequest {
    /* load balancer */
    getLoadBalancePort(server) {
        return new Promise((resolve, reject) => {
            // check server resources etc blibla blub here
            var loadPort = server.port
            resolve(loadPort)
        })
    }

    /* send request to server */
    send(req, server, method) {
        this.req = req
        return new Promise((resolve, reject) => {
            this.getLoadBalancePort(server).then(port => {
                this.options = {
                    hostname: server.url,
                    port: port,
                    path: this.req.path,
                    method: method
                }

                // http request to server && send service response to client
                const req = http.request(this.options, response => {
                    response.on('data', d => {
                        var resData = Buffer.from(d).toString()
                        resolve(resData)
                    })
                })

                req.on('error', error => {
                    reject(error)
                })

                req.end()
            }).catch(e => { throw e })
        })
    }
}

module.exports.ServiceRequest = ServiceRequest;