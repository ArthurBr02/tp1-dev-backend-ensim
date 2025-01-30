const dotenv = require("dotenv");
dotenv.config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const db = require('./src/db/connect')

app.use(process.env.DEFAULT_API_ROUTE + '/pokemons', require('./src/api/pokemonApi'))

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger/swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app.listen(port, () => {
    console.log(`App listening on port ${port}`)

    // print env
    console.log(`Environment: ${process.env.MONGO_URI}`)

    db.getPokemonList().then((data) => {
        console.log(data)
    });
})