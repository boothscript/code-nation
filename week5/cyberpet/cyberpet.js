function randomValue() {
  return Math.floor(Math.random() * 100 + 1);
}
function isFailure(chance) {
  return randomValue() < chance;
}

class CyberPet {
  constructor(name) {
    this.name = name;
    this.health = randomValue();
    this.food = randomValue();
    this.water = randomValue();
    this.thirst = randomValue();
    this.happiness = randomValue();
    this.energy = randomValue();
  }
  eat() {
    this.food = Math.min(this.food + 20, 100);
  }
  drink() {
    this.water = Math.min(this.water + 20, 100);
  }
  nap() {
    this.energy = Math.min(this.energy + 50, 100);
    this.health = Math.min(this.health + 15, 100);
    this.happiness = Math.min(this.health + 15, 100);
  }
  play() {
    this.happiness = Math.min(this.health + 30, 100);
    this.food = Math.max(this.health - 20);
    this.water = Math.max(this.health - 20);
    this.energy = Math.max(this.health - 25);
  }
  pet() {
    this.happiness = Math.min(this.health + 20, 100);
    this.food = Math.max(this.health - 10);
    this.water = Math.max(this.health - 10);
    this.energy = Math.max(this.health - 5);
  }
}
