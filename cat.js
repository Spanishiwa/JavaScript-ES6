class Cat {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }
  cuteStatement() {
    return `${this.owner} loves ${this.name}`;
  }

  meow() {
    return `${this.name} said MEOW`;
  }

}

const cat = new Cat('Henry', 'Michael');
console.log(cat.meow());
console.log(cat.cuteStatement());
