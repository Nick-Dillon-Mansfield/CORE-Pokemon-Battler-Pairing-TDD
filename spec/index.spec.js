const {expect} = require('chai');
const {Pokemon} = require('../index.js')

describe('Pokemon creation', () => {
    it('checks pokemon can be created', () => {
        const Bulbasaur = new Pokemon("Bulbasaur");
        expect(Bulbasaur).to.be.a("object");
    });
});
describe('Pokemon type/strength/weakness', () => {
    it('checks pokemon type is default to normal', () => {
        const Bulbasaur = new Pokemon("Bulbasaur");
        expect(Bulbasaur.type).to.equal("Normal");
    });
    it('checks pokemon strength defaults to none if type is normal', () => {
        const Bulbasaur = new Pokemon("Bulbasaur");
        expect(Bulbasaur.strongVS).to.equal("None");
    });
    it('checks pokemon weakness defaults to none if type is normal', () => {
        const Bulbasaur = new Pokemon("Bulbasaur");
        expect(Bulbasaur.weakVS).to.equal("None");
    });
    it('checks pokemon strength/weakness is set to Grass/Water if type is Fire', () => {
        const Bulbasaur = new Pokemon("Charmander", "Fire");
        expect(Bulbasaur.strongVS).to.equal("Grass");
        expect(Bulbasaur.weakVS).to.equal("Water");
    });
    it('checks pokemon strength/weakness is set to Fire/Grass if type is Water', () => {
        const Bulbasaur = new Pokemon("Squirtle", "Water");
        expect(Bulbasaur.strongVS).to.equal("Fire");
        expect(Bulbasaur.weakVS).to.equal("Grass");
    });
    it('checks pokemon strength/weakness is set to Water/Fire if type is Grass', () => {
        const Bulbasaur = new Pokemon("Bulbasaur", "Grass");
        expect(Bulbasaur.strongVS).to.equal("Water");
        expect(Bulbasaur.weakVS).to.equal("Fire");
    });
});
describe('Pokemon actions (talk and moves)', () => {
    it ('bulbasaur has the talk property', () => {
        const bulbasaur = new Pokemon("Bulbasaur");
        expect(bulbasaur.talk).to.be.a('function');
    });
    it ('bulbasaur has the move property', () => {
        const bulbasaur = new Pokemon("Bulbasaur");
        expect(bulbasaur.useYourMoves).to.be.a('function');
    });
    it ('bulbasaur says something', () => {
        const bulbasaur = new Pokemon("Bulbasaur", "Grass");
        expect(bulbasaur.talk()).to.equal("Grunt");
    });
    it ('bulbasaur does his move', () => {
        const bulbasaur = new Pokemon("Bulbasaur", "Grass");
        expect(bulbasaur.useYourMoves()).to.equal("Razor Leaf");
    });
    it ('Squirtle makes his sound and does his move', () => {
        const squirtle = new Pokemon("Squirtle", "Water");
        expect(squirtle.talk()).to.equal("Gurgle");
        expect(squirtle.useYourMoves()).to.equal("Hydro Pump");
    });
    it ('Charmander and Ratatta make their sounds and do their moves', () => {
        const charmander = new Pokemon("Charmander", "Fire");
        const ratatta = new Pokemon("Ratatta")
        expect(charmander.talk()).to.equal("Crackle");
        expect(ratatta.talk()).to.equal("Squeak");
        expect(charmander.useYourMoves()).to.equal("Fire Blast");
        expect(ratatta.useYourMoves()).to.equal("Tackle");
    });
});