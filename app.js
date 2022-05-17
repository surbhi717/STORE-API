require('dotenv').config()

//async errors

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

//middleware

app.use(express.json())

//routes

app.get('/', (req, res) => {
    res.send('<h1> STORE API </h1><a href ="/api/v1/products">products route</a>')
})


//products route

app.use(notFound)
app.use(errorMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        app.listen(port, console.log(`server is listening port.. ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()