const db = require("mongoose")
const dotenv = require("dotenv")
const pokemonModel = require("../models/pokemon")

dotenv.config()

db.connect(process.env.MONGO_URI);

const Pokemon = db.model("pokemon", pokemonModel, 'pokemons');

const getPokemonList = async () => {
    console.log("Getting pokemons from mongodb");
    const pokemons = await Pokemon.find();
    return pokemons;
}

module.exports = {
    getPokemonList
}