// const arr = [1,3,5]
// arr.forEach(item => console.log(item)) // Sync callback
// console.log('forEach()之后')

// setTimeout( () => console.log('setTimeout callback'),0)
// console.log('setTimeout afterwards')


try {
    let v 
    console.log(v.xxx)
} catch (error) {
    console.log(error.message)
    console.log(error.stack)
    throw error
}