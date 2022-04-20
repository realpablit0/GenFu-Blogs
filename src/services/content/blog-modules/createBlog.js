function createBlog(db, data) {
    return new Promise((resolve, reject) => {
        var dataStr;
        typeof(data) === String ? dataStr = data : typeof(data) === Object ? data = JSON.stringify(data) : reject(new Error('data param type error'));
        const dataBuff = Buffer.from(str, 'utf-8');
        console.log('dataBuff ', dataBuff);
        const base64 = dataBuff.toString('base64');
        console.log('Base64: ', base64);
        resolve({ 'base64': base64 })
    })
}

module.exports = createBlog;