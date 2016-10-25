function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}
Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes "phrRRRRRR!!!"`);
};

let Dumbo = new Elephant("Dumbo", 12, ["painting a picture", "greeting the elephant"]);
Dumbo.trumpet();

Elephant.prototype.grow = function() {
  this.height += 12;
};
console.log(Dumbo.height);
Dumbo.grow();
console.log(Dumbo.height);

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

console.log(Dumbo.tricks);
Dumbo.addTrick("Consoling the dota");
console.log(Dumbo.tricks);

Elephant.prototype.play = function () {
  let i = Math.floor(Math.random() * (this.tricks.length));
  console.log(`${this.name} is ${this.tricks[(Math.floor(i))]}`);
};

console.log(Dumbo.play());

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function paradeHelper(elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

Elephant.paradeHelper(ellie);
herd.forEach(Elephant.paradeHelper);
