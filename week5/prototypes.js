let PersonP = function (nm, id) {
  this.name = nm;
  this.id = id;
};

// adds a method to a function
PersonP.prototype.getDetails = function () {
  return `Name: ${this.name} / Id: ${this.id}`;
};

// can call this method using function.method()
let fred = new PersonP("Fred", 321);
console.log(fred.getDetails(), fred.name);

//  creates a subclass from PersonP
let EmployeeP = function (nm, id, salary) {
  PersonP.call(this, nm, id);
  this.salary = salary;
};

// binds personP prototype (in memory)
EmployeeP.prototype = PersonP.prototype;
