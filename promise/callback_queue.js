// setTimeout and Promise

// Who is executed first?
// micro is ahead of macro


// single thread JS
// 1. sync function in stack
// 2. micro callback queue (promise callback, mutationObserver callback)
// 3. macro callback queue (dom event callback, ajax callback, setTimeout callbacks...)

setTimeout(() => { // put into macro callback queue
    console.log('set timeout callback1()')
    Promise.resolve(3).then( // this is different behavior between browser and node
        value => console.log('onResolved()',value)
    )
},0)

setTimeout(() => { // put into macro callback queue
    console.log('set timeout callback2()')
},0)
Promise.resolve(1).then( // put into micro callback queue
    value => {
        console.log('onResolved()', value)
    }
)
Promise.resolve(2).then( // put into micro callback queue
    value => {
        console.log('onResolved()', value)
    }
)