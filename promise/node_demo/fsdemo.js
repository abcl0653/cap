fs = require('fs')

const path = '../../promise'
var dirArr = []

fs.readdir(path, (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log(data)

    // This is wrong, because fs.stat is called asyn, the index will be set to x, 
    // and then call the fs.stat x times
    // where x is the count of the file/dir in the path
    // for (let index = 0; index < data.length; index++) {
    //     const element = data[index]
    //     fs.stat(path+'/'+element,(error, stats) => {
    //         if (error) {
    //             console.log(error)
    //             return
    //         }
    //         if (stats.isDirectory()) {
    //             dirArr.push(element)
    //         }
    //     })
    // }
    
    (function getDir(index){
        if (index === data.length) {
            console.log(dirArr)
            return // exit from recursive call
        }
        
        const element = data[index]

        fs.stat(path + '/' + element, (error, stats) => {
            if (error) {
                console.log(error)
                return
            }

            if (stats.isDirectory()) {
                dirArr.push(element)
            }
            getDir(index+1) // recursive
        })
    })(0)

})
