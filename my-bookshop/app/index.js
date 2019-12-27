function func(cb) {
    setTimeout(() => {
        cb && cb();
    }, 1000);
}

// Call back hell
func(() => { 
    console.log(1)
    func(()=>{
        console.log(2)
        func(()=>{
            console.log(3)
            func(()=>{
                console.log(4)
                func(()=> {
                    console.log(5)
                })
            })
        })
    })
})