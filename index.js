const dotenv = require("dotenv");
dotenv.config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(process.env.DEFAULT_API_ROUTE + '/pokemon', require('./src/api/pokemonApi'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)

    // print env
    console.log(`Environment: ${process.env.MONGO_URI}`)
})