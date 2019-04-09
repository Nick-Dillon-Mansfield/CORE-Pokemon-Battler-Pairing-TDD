class Pokemon {
  constructor(name, type = "Normal", position = 0) {
    this.pokemon = name;
    this.position = position;
    this.HP = 50;
    this.atkDmg = 10;
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

class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemon = {};
    this.quantity = 0;
  }
  catch(pokemon, type, position) {
    this.quantity++;
    this.pokemon[pokemon] = new Pokemon(`${pokemon}`, `${type}`, this.quantity);
    return `${this.name} caught a ${pokemon}! They now have ${
      this.quantity
    } pokemon stored!`;
  }
}

class Battle {
  constructor(trainerOne, pokemonOne, trainerTwo, pokemonTwo) {
    this.trainerOne = trainerOne;
    this.pokemonOne = pokemonOne;
    this.trainerTwo = trainerTwo;
    this.pokemonTwo = pokemonTwo;
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

//  BULBASAUR = GRASS, CHARMANDER = FIRE, SQUIRTLE = WATER
// RATATTA = NORMAL

const Nick = new Trainer("Nick");

module.exports = { Pokemon, Trainer, Battle };

/*
Finally, you will need a way to battle the pokemon.

        create a battle class {
            constructor(trainerOne, pokemonOne, trainerTwo, pokemonTwo) {
                this.trainerOne = trainerOne;
                this.pokemonOne = trainerOne.pokemon[pokemonOne];
                this.trainerTwo = trainerTwo;
                this.pokemonTwo = trainerTwo.pokemon[pokemonTwo];
            }
        }




The battle should take two trainers and the names of the pokemon they wish to battle.
    
        make a function called haveFight(trainerOne, pokemonOne, trainerTwo, pokemonTwo)
            let trainerFight = new Battle(trainerOne, pokemonOne, trainerTwo, pokemonTwo)


The battle should have a fight method available.
     This should take the pokemon whose turn it is, attack the defending pokemon (deducting attacker's attack damage from the defender's hit points), and end their turn.


The fight method should take each pokemon's strengths and weaknesses into account. 

If a defender is strong against the attacking type, the attacking type's damage should be multiplied by 0.75. 

If a defender is weak against the attacking type, the attacking type's damage should be multiplied by 1.25.


Each attack should be followed by an attack message. The message will vary depending on the defender's weakness/strength.


If the defending pokemon faints (depletes all hit points), the attacker wins.
*/
