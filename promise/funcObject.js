// const arr = [1,3,5]
// arr.forEach(item => console.log(item)) // Sync callback
// console.log('forEach()之后')

// setTimeout( () => console.log('setTimeout callback'),0)
// console.log('setTimeout afterwards')


// try {
//     let v 
//     console.log(v.xxx)
// } catch (error) {
//     console.log(error.message)
//     console.log(error.stack)
//     throw error
// }

const pro = new Promise((resolve,reject) => { //Executor
    setTimeout(() => {
        const time = Date.now()
        if (time %2 == 0) {
            resolve('Success Data，time=' + time)
        } else {
            reject('Fail Data，time=' + time)
        }
    }, 1000)
})

pro.then(
    value => { //onResolved
        console.log('success callback:', value)
    },
    reason => { //onRejected
        console.log('fail callback', reason)
    }
)