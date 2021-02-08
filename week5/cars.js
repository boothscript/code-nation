class Car {
  constructor(regNumber, hoursParked, rate) {
    this._regNumber = regNumber;
    (this._hoursParked = hoursParked), (this._rate = rate);
  }
  get sessionCost() {
    return this._rate * this._hoursParked;
  }
  displayPrice() {
    return `You parked for ${this._hoursParked} hours. Total to pay: £${this.sessionCost}`;
  }
}

class Staff extends Car {
  constructor(staffId, regNumber, credit, hoursParked, rate) {
    super(regNumber, hoursParked, rate);
    this._staffId = staffId;
    this._credit = credit;
  }
  pay() {
    console.log(this.displayPrice());
    this._credit -= this.sessionCost;
    console.log(`You have £${this._credit} remaining.`);
  }
}

const testCar = new Car(1234, 5, 1.5);
const testStaff = new Staff(0001, 12334, 25, 5, 1.1);

console.log(testCar.displayPrice());
testStaff.pay();
