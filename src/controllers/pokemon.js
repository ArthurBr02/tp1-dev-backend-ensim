const pokemonService = require('../services/pokemon');
const utils = require('../core/utils');

const getPokemonList = async () => {
    let data = pokemonService.getPokemonList();
    data.then((result) => {
        return result;
    }).catch((err) => {
        return err;
    });

    return data;
}

const getPokemonById = async (id) => {
    if (id === undefined) {
        return utils.asyncError("No id provided");
    }

    if (Number.isNaN(parseInt(id))) {
        return utils.asyncError("Id must be a number");
    }

    id = parseInt(id);

    let data = pokemonService.getPokemonById(id);
    data.then((result) => {
        return result;
    }).catch((err) => {
        return err;
    });

    return data;
}

const getPokemonByFilters = async (filters) => {

    if (filters.hp) {
        if (Number.isNaN(parseInt(filters.hp))) {
            return utils.asyncError("Hp must be a number");
        }
        filters.hp = Number(filters.hp);
    }

    let data = pokemonService.getPokemonByFilters(filters);
    data.then((result) => {
        return result;
    }).catch((err) => {
        return err;
    });

    return data;
}

module.exports = {
    getPokemonList,
    getPokemonById,
    getPokemonByFilters
}