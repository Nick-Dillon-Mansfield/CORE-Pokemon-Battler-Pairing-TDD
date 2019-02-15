class Pokemon {
  constructor(name, type = "Normal") {
    this.pokemon = name;
    this.HP = 0;
    this.atkDmg = 0;
    this.type = type;
    this.sound = getSound(type);
    this.move = getMove(type);

    this.strongVS = getStrongVS(type);
    this.weakVS = getWeakVS(type);
  }
  talk() {
    return this.sound;
  }
  useYourMoves() {
    return this.move;
  }
}

function getStrongVS(type) {
  return type === "Normal"
    ? "None"
    : type === "Fire"
    ? "Grass"
    : type === "Grass"
    ? "Water"
    : "Fire";
}

function getWeakVS(type) {
  return type === "Normal"
    ? "None"
    : type === "Fire"
    ? "Water"
    : type === "Water"
    ? "Grass"
    : "Fire";
}
function getSound(type) {
  return type === "Normal"
    ? "Squeak"
    : type === "Fire"
    ? "Crackle"
    : type === "Grass"
    ? "Grunt"
    : "Gurgle";
}
function getMove(type) {
  return type === "Normal"
    ? "Tackle"
    : type === "Fire"
    ? "Fire Blast"
    : type === "Grass"
    ? "Razor Leaf"
    : "Hydro Pump";
}

//const pokemonActions = {};
//  BULBASAUR = GRASS, CHARMANDER = FIRE, SQUIRTLE = WATER
// RATATTA = NORMAL
//Pokemon.prototype = pokemonActions;

function Trainer(name) {
  this.name = name;
  this.storage = {};
  this.quantity = 0;
}

const catchPokemon = {
  catch: function(pokemon) {
    quantity++;
    this.pokemon[this.quantity] = new Pokemon(`${pokemon}`);
  }
};

Trainer.prototype = catchPokemon;

const Nick = new Trainer("Nick");

module.exports = { Pokemon, Trainer };
