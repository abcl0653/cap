/* IIFE */
(function (window) {

    /* Constructor  */
    function Promise(executor){

        const PENDING = 'pending'
        const RESOLVED = 'resolved'
        const REJECTED = 'rejected'

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
        const self = this
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
                setTimeout(() => {
                    /*
                    1.If onResolved raise exception, call reject with error
                    2.If onResolved return a non-Promise object, call resolve with value returned onResolved
                    3.If onResolved return a Promise object, the returned Promise has the same result
                    */
                   handle(onResolved)
                })
            } else {
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

    }

    /*
    Return a success promise with value
    */
    Promise.resolve = function(value) {

    }

    /*
    Return a fail promise with reason
    */
    Promise.reject = function(reason) {

    }

    /*
    Return a promise, if all promises is success, return success
    else return a fail promise
    */
    Promise.all = function(promises) {

    }

    /**
     * Return a promise, if the first promise is success, return success
     * else return a fail promise
     */
    Promise.race = function(promises) {

    }

    //expose function: Promise
    window.Promise = Promise
})(window)