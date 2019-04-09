const { expect } = require("chai");
const { Pokemon, Trainer, Battle } = require("../index.js");

describe("Pokemon creation", () => {
  it("checks pokemon can be created", () => {
    const Bulbasaur = new Pokemon("Bulbasaur");
    expect(Bulbasaur).to.be.a("object");
  });
});
describe("Pokemon type/strength/weakness", () => {
  it("checks pokemon type is default to normal", () => {
    const Bulbasaur = new Pokemon("Bulbasaur");
    expect(Bulbasaur.type).to.equal("Normal");
  });
  it("checks pokemon strength defaults to none if type is normal", () => {
    const Bulbasaur = new Pokemon("Bulbasaur");
    expect(Bulbasaur.strongVS).to.equal("None");
  });
  it("checks pokemon weakness defaults to none if type is normal", () => {
    const Bulbasaur = new Pokemon("Bulbasaur");
    expect(Bulbasaur.weakVS).to.equal("None");
  });
  it("checks pokemon strength/weakness is set to Grass/Water if type is Fire", () => {
    const Bulbasaur = new Pokemon("Charmander", "Fire");
    expect(Bulbasaur.strongVS).to.equal("Grass");
    expect(Bulbasaur.weakVS).to.equal("Water");
  });
  it("checks pokemon strength/weakness is set to Fire/Grass if type is Water", () => {
    const Bulbasaur = new Pokemon("Squirtle", "Water");
    expect(Bulbasaur.strongVS).to.equal("Fire");
    expect(Bulbasaur.weakVS).to.equal("Grass");
  });
  it("checks pokemon strength/weakness is set to Water/Fire if type is Grass", () => {
    const Bulbasaur = new Pokemon("Bulbasaur", "Grass");
    expect(Bulbasaur.strongVS).to.equal("Water");
    expect(Bulbasaur.weakVS).to.equal("Fire");
  });
});
describe("Pokemon actions (talk and moves)", () => {
  it("bulbasaur can say something", () => {
    const bulbasaur = new Pokemon("Bulbasaur", "Grass");
    expect(bulbasaur.talk()).to.equal("Grunt");
  });
  it("bulbasaur can do his move", () => {
    const bulbasaur = new Pokemon("Bulbasaur", "Grass");
    expect(bulbasaur.useYourMoves()).to.equal("Razor Leaf");
  });
  it("Squirtle makes his sound and does his move", () => {
    const squirtle = new Pokemon("Squirtle", "Water");
    expect(squirtle.talk()).to.equal("Gurgle");
    expect(squirtle.useYourMoves()).to.equal("Hydro Pump");
  });
  it("Charmander and Ratatta make their sounds and do their moves", () => {
    const charmander = new Pokemon("Charmander", "Fire");
    const ratatta = new Pokemon("Ratatta");
    expect(charmander.talk()).to.equal("Crackle");
    expect(ratatta.talk()).to.equal("Squeak");
    expect(charmander.useYourMoves()).to.equal("Fire Blast");
    expect(ratatta.useYourMoves()).to.equal("Tackle");
  });
});

describe("Trainer creation, attributes and storage", () => {
  it("checks the Trainer object is created", () => {
    const Nick = new Trainer("Nick");
    expect(Nick).to.be.a("object");
  });
  it("creating a trainer gives them a blank pokemon storage, with a quantity of 0 as default", () => {
    const Nick = new Trainer("Nick");
    expect(Nick.pokemon).to.eql({});
    expect(Nick.quantity).to.equal(0);
  });
  it('Trainer using catch function returns "Trainer caught ..."', () => {
    const Nick = new Trainer("Nick");
    expect(Nick.catch("Bulbasaur")).to.equal(
      "Nick caught a Bulbasaur! They now have 1 pokemon stored!"
    );
  });
  it("catching a pokemon stores it in trainers storage", () => {
    const Nick = new Trainer("Nick");
    Nick.catch("Bulbasaur", "Grass");
    Nick.catch("Charmander", "Fire");
    expect(Nick.pokemon).to.haveOwnProperty("Bulbasaur");
    expect(Nick.pokemon).to.haveOwnProperty("Charmander");
  });
  it("stored pokemon should have correct position in storage", () => {
    const Nick = new Trainer("Nick");
    Nick.catch("Bulbasaur", "Grass");
    Nick.catch("Charmander", "Fire");
    expect(Nick.pokemon.Bulbasaur.position).to.equal(1);
    expect(Nick.pokemon.Charmander.position).to.equal(2);
  });
});
describe("Battle", () => {
  it("checks battle can be created", () => {
    const nickVSAndrew = new Battle();
    expect(nickVSAndrew).to.be.a("object");
  });
  it("a created battle has two trainer keys and their chosen pokemon as keys", () => {
    const nickVSAndrew = new Battle("Nick", "Bulbasaur", "Andrew", "Squirtle");
    expect(nickVSAndrew.trainerOne).to.equal("Nick");
    expect(nickVSAndrew.pokemonOne).to.equal("Bulbasaur");
    expect(nickVSAndrew.trainerTwo).to.equal("Andrew");
    expect(nickVSAndrew.pokemonTwo).to.equal("Squirtle");
  });
});
