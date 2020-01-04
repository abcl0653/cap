async function fn1() {
        return 1
}

async function wrapper() {
    const value = await fn1()
    console.log(value)
}

wrapper()