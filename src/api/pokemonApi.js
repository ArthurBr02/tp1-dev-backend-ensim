var express = require('express'),
    router = express.Router();

const pokemonController = require('../controllers/pokemon');

router.get('/', async function(req, res) { // ajouter la pagination (page + nb elem par page)
    let data = await pokemonController.getPokemonList();
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