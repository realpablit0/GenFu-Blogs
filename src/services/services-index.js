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
    serviceRouting.serverInstances > 1 ? serverInstances = serviceRouting.__serverInstances__ : serverInstances = 1
    for (let i in serviceRouting) {
        if (!i.startsWith('__')) {
            var server = startServer(i, serverInstances)
            serviceServerArray.push(server)
        }
    }
    return serviceServerArray
}
module.exports.startServices = startServices;