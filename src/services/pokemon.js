const db = require("./data");

const getPokemonList = async () =>{
    return await db.getData();
}

const getPokemonById = async (id) => {
    let data = await db.getData();
    return data.find(pokemon => pokemon.id === id);
}

module.exports = {
    getPokemonList,
    getPokemonById
}