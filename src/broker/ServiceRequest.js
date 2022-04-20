const fetch = require('fetch')
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
                var options = {
                    headers: this.headers,
                    method: method,
                    payload: JSON.stringify(payload)
                }

                fetchUrl(`${this.server.url}:${server.port}/${req.path}`, options, (error, meta, body) => {
                    if (!error) {
                        resolve(body.toString())
                    } else if (error) reject(error)
                })
            }).catch(e => { throw e })
        })
    }
}

module.exports.ServiceRequest = ServiceRequest;