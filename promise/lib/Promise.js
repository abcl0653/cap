/* IIFE */
(function (window) {

    const PENDING = 'pending'
    const RESOLVED = 'resolved'
    const REJECTED = 'rejected'

    /* Constructor  */
    function Promise(executor){

        const self = this
        this.status = PENDING //pending -> resolved/rejected
        this.data = undefined // return result
        this.callbacks = [] // ele: { onResolved() {}, onReject() {}}

        function resolve(value) {
            // if the status is not pending, end the function
            if(self.status !==PENDING) {return}
            // Change status to resolved
            self.status = RESOLVED
            // Save the value
            self.data = value
            // if callbacks functions are waiting for execution, execute them asynchronously
            if (self.callbacks.length > 0) {
                setTimeout( () => {  // Simulate a asyn call
                    self.callbacks.forEach(callbacksObj => {
                        callbacksObj.onResolved(value)
                        })
                },0)
            }
        }

        function reject(reason) {
            // if the status is not pending, end the function
            if(self.status !==PENDING) {return}
            // Change status to rejected
            self.status = REJECTED
            // Save the reason
            self.data = reason
            // if callbacks functions are waiting for execution, execute them asynchronously
            if (self.callbacks.length > 0) {
                setTimeout( () => {  // Simulate a asyn call
                    self.callbacks.forEach(callbacksObj => {
                        callbacksObj.onRejected(reason)
                        })
                },0)
            }
        }

        try {
            executor(resolve, reject)
        } catch (error){
            reject(error)
        }
        
    }

    /* 
    Prototype then method
    Specify callback functions
    return a promise
    */ 
    Promise.prototype.then = function(onResolved, onRejected) {

        onResolved = typeof onResolved==='function' ? onResolved : value => value
        // Specify the fail callback, it is exception througth key
        onRejected = typeof onRejected==='function' ? onRejected : reason => {throw reason} 
        const self = this

        // Return a new promise
        return new Promise((resolve, reject) => {
            function handle(callback) {
                try{
                    const result = callback(self.data)
                    if (result instanceof Promise) {
                    //3.If onResolved return a Promise object, the returned Promise has the same result
                        result.then(resolve, reject) 
                    } else {
                    //2.If onResolved return a non-Promise object, call resolve with value returned onResolved
                    resolve(result)
                    }
                } catch(error) {
                //  1.If onResolved raise exception, call reject with error
                    reject(error)
                }
            } 
        // if the status is pending, save the callbacks
            if (self.status === PENDING) {
                self.callbacks.push({
                    onResolved(value) {
                        handle(onResolved)
                    },
                    onRejected(reason) {
                        handle(onRejected)
                    }
                })
            } else if (self.status === RESOLVED) {
                setTimeout(() => { // Async
                    /*
                    1.If onResolved raise exception, call reject with error
                    2.If onResolved return a non-Promise object, call resolve with value returned onResolved
                    3.If onResolved return a Promise object, the returned Promise has the same result
                    */
                   handle(onResolved)
                })
            } else { // status = rejected, asyn call onRejected and change the status of the promise
                setTimeout(() => {
                    /*
                    1.If onRejected raise exception, call reject with error
                    2.If onRejected return a non-Promise object, call resolve with value returned onRejected
                    3.If onRejected return a Promise object, the returned Promise has the same result
                    */
                   handle(onRejected)
                })
            }
        })

        // Return a new promise object
        // return new Promise()
        // Should wrap the real code in a return Promise
    }

    /* 
    Prototype catch method
    Specify callback function
    return a promise
    */
    Promise.prototype.catch = function(onRejected) {
        return this.then(undefined,onRejected)

    }

    /*
    Return a success promise with value
    */
    Promise.resolve = function(value) {
        return new Promise((resolve, reject)=>{
            /*
            https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
            If the value is a promise, return a promise base on it
            If not, return a promise with the value
            */
            if (value instanceof Promise) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        })
    }

    Promise.resolveDelay = function(value, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value instanceof Promise) {
                    value.then(resolve, reject)
                } else {
                    resolve(value)
                }
            }, time)
        })
    }

    /*
    Return a fail promise with reason
    */
    Promise.reject = function(reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    Promise.rejectDelay = function(reason, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(reason)
            }, time)
        })
    }

    /*
    Return a promise, if all promises is success, return success
    else return a fail promise
    */
    Promise.all = function(promises) {
        const values = new Array(promises.length) //to be stored all the success values
        let resolvedCount = 0 // counter for resolve
        return new Promise((resolve, reject) => {
            // loop all the promises
            promises.forEach((p, index) => {
                Promise.resolve(p).then(
                    value => {
                        resolvedCount++ // add 1 to counter
                        // values.push(value)
                        values[index] = value

                        // if all success
                        if (resolvedCount===promises.length) {
                            resolve(values)
                        }
                    },
                    reason => {
                        // fail when a promise fail
                        reject(reason)
                    }
                )
            })
        })
    }

    /**
     * Return a promise, if the first promise is success, return success
     * else return a fail promise
     */
    Promise.race = function(promises) {
        return new Promise((resolve, reject) => {
            promises.forEach((p,index) => {
                Promise.resolve(p).then(
                    value => {
                        resolve(value)
                    },
                    reason => {
                        reject(reason)
                    }
                )
            })
        })
    }

    //expose function: Promise
    window.Promise = Promise
})(window)