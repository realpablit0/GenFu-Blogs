/*========== global backend test ==========*/


/*========== service tests ==========*/
// Account Test
const { _AccountServiceTest } = require('./services-test/account-service-test')
var accountTest = new _AccountServiceTest()
accountTest.login()