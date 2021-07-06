// if (process.env.NODE_ENV !== 'production')
    // require('dotenv').config()
const Express = require('express')
const APP = Express()

APP.set('view engine', 'ejs')
APP.use('/public', Express.static(`${__dirname}/public`))
APP.use(Express.urlencoded({ extended: false }))

APP.get('/', (request, response) => response.render('index'))
APP.get('/404', (request, response) => response.render('404'))

APP.listen(4000, error => error ?
    console.log("\x1b[31mERROR:\x1b[0m", error) :
    console.log("\x1b[35mConnected to \x1b[36mport: 4000\x1b[0m"))