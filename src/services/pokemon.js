const db = require("./data");

const getPokemonList = async () =>{
    return await db.getData();
}

const getPokemonById = async (id) => {
    let data = await db.getData();
    return data.find(pokemon => pokemon.id === id);
}

const getPokemonByFilters = async (filters) => {
    let data = await db.getData();
    let result = data;

    if (filters.name !== undefined) {
        result = result.filter(pokemon => pokemon.name.french === filters.name);
    }

    if (filters.type !== undefined) {
        result = result.filter(pokemon => pokemon.type[0].includes(filters.type));
    }

    if (filters.typeS !== undefined) {
        result = result.filter(pokemon => pokemon?.type[1]?.includes(filters.typeS));
    }

    if (filters.hp !== undefined) {
        result = result.filter(pokemon => pokemon.base.HP === filters.hp);
    }

    return result;
}

module.exports = {
    getPokemonList,
    getPokemonById,
    getPokemonByFilters
}