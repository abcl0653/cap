module.exports = srv => {
    // console.log("Implementation started here", srv.name)
    if (srv.name == 'Breeze') {
        srv.on('hello', x => `Hello there, ${x.data.to}`)
    }
}