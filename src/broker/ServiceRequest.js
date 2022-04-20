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
        headers = {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': connection.API_KEY
        }
        this.req = req
        return new Promise((resolve, reject) => {
            this.getLoadBalancePort(server).then(port => {
                this.options = {
                    hostname: server.url,
                    port: port,
                    path: this.req.path,
                    method: method
                }
                fetchUrl(`${this.server.url}:${server.port}/${req.path}`, { headers: this.headers, method: 'POST', payload: JSON.stringify(payload) }, (error, meta, body) => {
                    if (!error) {
                        resolve(body.toString())
                    } else if (error) reject(error)
                })
            }).catch(e => { throw e })
        })
    }
}

module.exports.ServiceRequest = ServiceRequest;