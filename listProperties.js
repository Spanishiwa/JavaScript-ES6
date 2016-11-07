var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

function listProperties(obj) {
  return Object.getOwnPropertyNames(obj);
}

// console.log(listProperties(library[0]).join(', '));

function deleteProperty(obj, prop) {
  console.log(`before ${obj.name} properties: ${listProperties(obj)}`);
  delete obj[prop];
  console.log(`after ${obj.name} properties: ${listProperties(obj)}`);
}

// deleteProperty(student, "sclass");
// console.log(student);

function objLength(obj) {
  return listProperties(obj).length;
}

// console.log(objLength(student));

function readingStatus(lib) {
  lib.forEach(function(obj) {
    let book = `${obj.title} by ${obj.author}`;
    console.log(`${obj.readingStatus ? "Already read" : "Yet to read"} ${book}`);
  });
}

readingStatus(library);

class Cylinder {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }

  volume() {
    let radius = (this.diameter/2);
    let vol = (Math.PI * radius * radius * this.height);
    return parseFloat(vol.toFixed(4));
  }
}

const can = new Cylinder(10.0, 4.0);
console.log(can.volume());
