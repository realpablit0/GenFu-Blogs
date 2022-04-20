// const { MongoDB } = require('../src/services/account/modules/MongoDB')
const mongoDB = new MongoDB({
    'database': 'Account',
    'collection': 'Account-Logins',
    'dataSource': 'GenFu-Blogs',
    'API_KEY': require('../resources/private/dbkey.json').API_KEY
})

function dbTestInterval() {
    mongoDB.replace({ 'username': 'elpablit0s' }, { 'username': 'pablit0' }).then(data => {
        console.log(data);
        mongoDB.find({ 'username': 'pablit0' }).then(data => {
            console.log('find username: ', data);
        })
    })
}

dbTestInterval()