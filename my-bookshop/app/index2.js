function func() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(), 1000)
    })
}

func().then(()=>{
        console.log(10)
        return func()
    }).then(()=>{
        console.log(20)
        return func()
    }).then(()=>{
        console.log(30)
        return func()
    }).then(()=>{
        console.log(40)
        return func()
    }).then(()=>{
        console.log(50)
        return func()
    })
