const db = require("mongoose")
const dotenv = require("dotenv")
const pokemonModel = require("../models/pokemon")

dotenv.config()

db.connect(process.env.MONGO_URI);

const Pokemon = db.model("Pokemon", pokemonModel);
// const test = new Pokemon({
//     "id": 15,
//     "name": {
//         "english": "Beedrill",
//         "japanese": "スピアー",
//         "chinese": "大针蜂",
//         "french": "Dardargnan"
//     },
//     "type": [
//         "Bug",
//         "Poison"
//     ],
//     "base": {
//         "HP": 65,
//         "Attack": 90,
//         "Defense": 40,
//         "Sp. Attack": 45,
//         "Sp. Defense": 80,
//         "Speed": 75
//     }
// });



exports.getPokemonList = async () => {
    const pokemons = await Pokemon.find();
    return pokemons;
}