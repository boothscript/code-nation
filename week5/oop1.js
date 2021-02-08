let offer = "none";
let time = 1200;

const cafe = {
  name: "Whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
  breakfastOffer: "Free croissant with coffee",
  lunchOffer: "Free drink with surprisingly priced sandwich",
  noOffer: "Sorry, no offer",
  openCafe() {
    if (this.hasSpecialOffers) {
      return "Time for special offer!";
    }
  },
  closeCafe() {
    return "We are closed, come back tomorrow.";
  },
};

cafe.biscuits = ["waffle", "shortbread"];

console.log(cafe);
console.log(cafe.openCafe());
console.log(cafe.closeCafe());
if (time < 1100) {
  offer = cafe.breakfastOffer;
  console.log(offer);
} else if (time < 1500) {
  offer = cafe.lunchOffer;
  console.log(offer);
}

const person = {
  name: "Steve Booth",
  age: 35,
  weekendAlarm: "no alarm needed",
  weekdayAlarm: "get up at 7am",
};

person.favSongs = ["O.P.P", "Return of the Mac"];

console.log(person.favSongs);

let day = "saturday";
let alarm = null;

if (day === "saturday" || day === "sunday") {
  alarm = person.weekendAlarm;
} else {
  alarm = person.weekdayAlarm;
}

console.log(alarm);
