const p1 = new Promise((resolve, reject) => {
    resolve(1)
})
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)

// p1.then(value => console.log(value))
// p2.then(value => console.log(value))
// p3.then(reason => console.log(reason))

const pall = Promise.all([p1, p2])
pall.then(
    values=> {
        console.log('all resolved()', values)
    },
    reason => {
        console.log('all onrejected()', reason)
    }
)
