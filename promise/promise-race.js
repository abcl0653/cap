const p1 = new Promise((resolve, reject) => {
    // resolve(1)
    setTimeout(() => resolve(1) , 100)
})
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)

// p1.then(value => console.log(value))
// p2.then(value => console.log(value))
// p3.then(reason => console.log(reason))

const pall = Promise.race([p1, p2, p3])
pall.then(
    values=> console.log('race resolved()', values) ,
    reason => console.log('race onrejected()', reason)
)
