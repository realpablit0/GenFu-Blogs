const fetchUrl = require('fetch').fetchUrl
var baseURL = 'https://data.mongodb-api.com/app/data-cbyfh/endpoint/data/beta/action/'

class MongoDB {
    /*  connection: 
        {
            'database': 'Account',
            'collection': 'Account-Logins',
            'dataSource': 'GenFu-Blogs',
            'API_KEY': 'yourAPIKEY'
        }
    */
    constructor(connection) {
        this.mongoBaseURL = baseURL
        this.database = connection.database
        this.collection = connection.collection
        this.dataSource = connection.dataSource
        this.headers = {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': connection.API_KEY
        }
    }

    find(filter) {
        return new Promise((resolve, reject) => {
            var payload = {
                "database": this.database,
                "collection": this.collection,
                "dataSource": this.dataSource,
                "filter": filter,
            }
            fetchUrl(`${this.mongoBaseURL}find`, { headers: this.headers, method: 'POST', payload: JSON.stringify(payload) }, (error, meta, body) => {
                if (!error) {
                    resolve(body.toString())
                } else if (error) reject(error)
            })
        })
    }

    update(filter, data) {
        return new Promise((resolve, reject) => {
            var operator = data.length > 1 ? 'updateMany' : 'updateOne';
            var payload = {
                "database": this.database,
                "collection": this.collection,
                "dataSource": this.dataSource,
                "filter": filter,
                "update": { "$set": data }
            }
            fetchUrl(`${this.mongoBaseURL}${operator}`, { headers: this.headers, method: 'POST', payload: JSON.stringify(payload) }, (error, meta, body) => {
                if (!error) {
                    resolve(body.toString())
                } else if (error) reject(error)
            })
        })
    }

    insert(data) {
        return new Promise((resolve, reject) => {
            var operator;
            typeof(data) === Array ? operator = 'insertMany' : operator = 'insertOne'
            var payload = {
                "database": this.database,
                "collection": this.collection,
                "dataSource": this.dataSource,
            }
            typeof(data) === Array ? payload['documents'] = data : payload['document'] = data
            fetchUrl(`${this.mongoBaseURL}${operator}`, { headers: this.headers, method: 'POST', payload: JSON.stringify(payload) }, (error, meta, body) => {
                if (!error) {
                    resolve(body.toString())
                } else if (error) reject(error)
            })
        })
    }

    delete(filter, all) {
        return new Promise((resolve, reject) => {
            var operator;
            if (all) operator = 'deleteMany'
            else operator = 'deleteOne'
            var payload = {
                "database": this.database,
                "collection": this.collection,
                "dataSource": this.dataSource,
                "filter": filter
            }
            fetchUrl(`${this.mongoBaseURL}${operator}`, { headers: this.headers, method: 'POST', payload: JSON.stringify(payload) }, (error, meta, body) => {
                if (!error) {
                    resolve(body.toString())
                } else if (error) reject(error)
            })
        })
    }
    replace(filter, data, all) {
        return new Promise((resolve, reject) => {
            var operator;
            if (all) operator = 'replaceMany'
            else operator = 'replaceOne'
            var payload = {
                "database": this.database,
                "collection": this.collection,
                "dataSource": this.dataSource,
                "filter": filter,
                "replacement": data
            }
            fetchUrl(`${this.mongoBaseURL}${operator}`, { headers: this.headers, method: 'POST', payload: JSON.stringify(payload) }, (error, meta, body) => {
                if (!error) {
                    resolve(body.toString())
                } else if (error) reject(error)
            })
        })
    }
}

module.exports.MongoDB = MongoDB;