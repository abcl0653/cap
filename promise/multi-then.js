p = new Promise((resolve, reject) => resolve(1))
p.then(value => console.log('1st call back',value))
p.then(value => console.log('2nd call back',value))
