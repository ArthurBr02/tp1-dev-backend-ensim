var express = require('express'),
    router = express.Router();

const pokemonController = require('../controllers/pokemon');

router.get('/', async function(req, res) { // ajouter la pagination (page + nb elem par page)
    let data = await pokemonController.getPokemonList();
    res.send(data);
});

router.get("/search", async function(req, res) {
    let name = req.query.name;
    let type = req.query.type;
    let typeS = req.query.typeS;
    let hp = req.query.hp;

    let filters = {
        name: name,
        type: type,
        typeS: typeS,
        hp: hp
    }

    if (name === undefined && type === undefined && typeS === undefined && hp === undefined) {
        let data = await pokemonController.getPokemonList();
        res.send(data);
    }

    let data = await pokemonController.getPokemonByFilters(filters);
    if (data === undefined) {
        res.status(404).send("No pokemon found with these filters");
        return;
    }

    if (data.status === 'error') {
        res.status(400).send(data.message);
        return;
    }

    res.send(data);
});

router.get('/:id', async function(req, res){
    let data = await pokemonController.getPokemonById(req.params.id);
    if (data === undefined) {
        res.status(404).send("No pokemon found with id " + req.params.id);
        return;
    }

    if (data.status === 'error') {
        res.status(400).send(data.message);
        return;
    }

    res.send(data);
});

module.exports = router;