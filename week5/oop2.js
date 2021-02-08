let rosie = {
  _name: "Rosie",
  _hops: 0,
  
  get name() {
    return this._name;
  },
  get hops() {
    return this._hops;
  },
  increaseHops() {
    this._hops++;
  },

}

class Bunny{
  constructor(name){
    this._name = name;
    this._hops = 0
  }

  get name() {
    return this._name;
  }

  get hops() {
    return this._hops;
  }
  increaseHops() {
    this._hops++;
  }
  
}