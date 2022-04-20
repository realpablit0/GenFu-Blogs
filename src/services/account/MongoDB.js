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
        // filter:
        // {uuid': 'slkdfncsdlv,sxd,v47'} --> arr[{'uuid': 'slkdfncsdlv,sxd,v47', 'lvl': 42}]
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
        // data:
        // {"username": "newC00lUs3rN4m3"}
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
            var operator = typeof(data) === Array ? 'insertMany' : 'insertOne'
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
            var operator = all === true ? 'deleteMany' : 'deleteOne';
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
            var operator = all === true ? 'replaceMany' : 'replaceOne';
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

// const mongoDB = new MongoDB({
//     'database': 'Account',
//     'collection': 'Account-Logins',
//     'dataSource': 'GenFu-Blogs',
//     'API_KEY': require('../../../resources/private/dbkey.json').API_KEY
// })

// mongoDB.find({ "username": "yourusername" }).then(data => {
//     console.log(data);
// })

// mongoDB.update({ "username": "admin" }, { "permission": 999 }).then(data => {
//     console.log(data);
// })

/*
mongoDB.insert({ "username": "yourusername", "pw": "your_dump_to_easy_password", "email": "myspace24@notmyspace.ru" }).then(data => {
    console.log(data);
})

mongoDB.delete({ "username": "elSmöker" }, false).then(data => {
    console.log(data);
})

mongoDB.replace({ "username": "elSmöker" }, {"username": "replaced username", "pw": "new_pw_replace"}, false).then(data => {
    console.log(data);
})
*/