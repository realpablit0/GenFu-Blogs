var serviceRouting = require('../../resources/services-routing.json')

function startServer(serviceIndex, instances) {
    var serviceServer = require(`./${serviceIndex}/${serviceIndex}-service.js`)
    for (let i in Array.from(new Array(instances).keys())) {
        let port = serviceRouting[serviceIndex].port + Number(i)
        serviceServer.listen(port, () => {
            console.log(`|-- ${serviceIndex}-server --> listening on port ${port} --|`)
        })
    }
}

function startServices() {
    var serverInstances;
    var serviceServerArray = []
    serviceRouting.serverInstances > 1 ? serverInstances = serviceRouting.serverInstances : serverInstances = 1
    for (let i in serviceRouting) {
        if (i === 'serverInstances') return serviceServerArray
        var server = startServer(i, serverInstances)
        serviceServerArray.push(server)
    }

}

module.exports.startServices = startServices;