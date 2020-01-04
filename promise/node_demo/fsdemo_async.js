/**
 * Use async await to handle the async call 
 */
fs = require('fs')

const path = '../../promise'
var dirArr = []


// Define a function to identify a resource is dir or not
async function isDir(pathname) {
    return new Promise((resolve, reject) => {
        fs.stat(pathname, (error, stats) => {
            if (error) {
                console.log(error)
                reject(error)
            }
            resolve(stats.isDirectory())
        })

    })
}

function loopDir(path) {
    fs.readdir(path, async (error, arraydata) => {
        if (error) {
            console.log(error)
            return
        }
        for (let index = 0; index < arraydata.length; index++) {
            const element = arraydata[index];
            if (await isDir(path + '/' + element)) {
                dirArr.push(element)
            }
        }
        console.log(dirArr)
    })
}
loopDir(path)