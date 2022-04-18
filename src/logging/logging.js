const fs = require('fs')
const path = require('path')
const {
    v4: uuidv4
} = require('uuid');

class _Logging {
    constructor(args) {
        this.setLogInfo(args)
    }

    setLogInfo(args) {
        if (!args.type || !args.message || !typeof(args) === Object) throw new Error('_Logging args required!');
        this.type = args.type;
        this.message = args.message;
        this.timestamp = new Date().getTime();
        this.uuid = uuidv4();
        !args.tags ? this.tags = [] : this.tags = args.tags;
        !args.file ? this.file = '' : this.file = args.file;
        return this.log();
    }

    log() {
        fs.readFile(path.join(__dirname, `logs/${this.type}-logs.json`), 'utf8', (err, data) => {
            if (err) throw err
            var jsonLog = JSON.parse(data)
            jsonLog[`${this.uuid}`] = {
                'message': this.message,
                'timestamp': this.timestamp,
            };
            if (this.tags.length >= 1) jsonLog[this.uuid].tags = this.tags;
            if (this.file.length >= 1) jsonLog[this.uuid].file = this.file;
            fs.writeFile(path.join(__dirname, `logs/${this.type}-logs.json`), JSON.stringify(jsonLog), (err) => {
                if (err) throw err
            })
        })
    }
}

module.exports._Logging = _Logging