/** Get mime type from extname 2020.01.05 Charlie Cai */
const fs = require('fs')
exports.getMime = async (extname) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./mime.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                const mime = JSON.parse(data)
                resolve(mime[extname] || 'text/html')
            }
        })
    })
    
    // Sync API
    // const mimes = fs.readFileSync('./mime.json')
    // const mimes_data = JSON.parse(mimes)
    // return mimes_data[extname]

    // switch (extname) {
    //     case '.html':
    //         return 'text/html'    
    //     case '.css':
    //         return 'text/css'
    //     case '.js':
    //         return 'text/javascript'
    //     default:
    //         return 'text/html'
    // }
}