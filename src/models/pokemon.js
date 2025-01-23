const Pokemon = {
    id: Number,
    name: String,
    img: String,
    type: [String],
    stats: {
        hp: Number,
        attack: Number,
        defense: Number,
        spattack: Number,
        spdefense: Number,
        speed: Number
    },
    moves: Object,
    damages: {
        normal: String,
        fire: String,
        water: String,
        electric: String,
        grass: String,
        ice: String,
        fight: String,
        poison: String,
        ground: String,
        flying: String,
        psychic: String,
        bug: String,
        rock: String,
        ghost: String,
        dragon: String,
        dark: String,
        steel: String
    },
    misc: Object,
    classification: String,
    height: String,
    weight: String,
    capturerate: Number,
    eggsteps: String,
    expgrowth: String,
    happiness: String,
    evpoints: [String],
    fleeflag: String,
    entreeforestlevel: String
}

exports.Pokemon = Pokemon;