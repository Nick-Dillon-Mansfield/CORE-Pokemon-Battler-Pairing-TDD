function Pokemon(name, type='Normal') {
    this.pokemon = name;
    this.HP = 0;
    this.atkDmg= 0;
    this.sound= sound(type);
    this.move= move(type);
    this.type= type;
    this.strongVS= strongVS(type);
    this.weakVS= weakVS(type);
    //Pokemon traits also includes all functions in pokemonActions
}

const strongVS = function(type){
    if (type === "Normal") return "None";
    return type === "Fire" ? "Grass" : type === "Grass" ? "Water" : "Fire";
}

const weakVS = function(type){
    if (type === "Normal") return "None";
    return type === "Fire" ? "Water" : type === "Water" ? "Grass" : "Fire";

}

const sound = function(type){
    if (type === "Normal") return "Squeak";
    return type === "Fire" ? "Crackle" : type === "Grass" ? "Grunt" : "Gurgle";
}

const move = function(type){
    if (type === "Normal") return "Tackle";
    return type === "Fire" ? "Fire Blast" : type === "Grass" ? "Razor Leaf" : "Hydro Pump";
}

const pokemonActions = {
    talk: function(){
        return this.sound;
    },
    useYourMoves: function(){
        return this.move;
    }
}
//  BULBASAUR = GRASS, CHARMANDER = FIRE, SQUIRTLE = WATER
// RATATTA = NORMAL
Pokemon.prototype = pokemonActions






module.exports = {Pokemon}