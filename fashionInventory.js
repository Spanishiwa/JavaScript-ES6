var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

let obj1 = {
  name: 'Brunello Cucinelli',
  shoes: [
    {name: 'tasselled black low-top lace-up', price: 1000},
    {name: 'tasselled green low-top lace-up', price: 1100},
    {name: 'plain beige suede moccasin', price: 950},
    {name: 'plain olive suede moccasin', price: 1050}
  ]
};
// [{}, {}]
//
// [{name:, shoes: []}, {name:, shoes: []}]
//
// shoes: [{name:, price:}, {name:, price:}]

// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100

// function renderInventory(inventory) {
//   let results = [];
//
//   inventory.forEach(function(obj) {
//     results.push(renderDesignerInventory(obj));
//   });
//
//   return results.join('');
// }
//
// function renderDesignerInventory(obj) {
//   let results = [];
//
//   for (let i = 0; i < obj.shoes.length; i += 1) {
//     let result = `${obj.name}, ${obj.shoes[i].name}, ${obj.shoes[i].price}`;
//     results.push(result);
//   }
//
//   return results;
// }

function renderInventory(inventory) {
  let results = [];

  inventory.forEach(function(obj) {
    for (let i = 0; i < obj.shoes.length; i += 1) {
      let result = `${obj.name}, ${obj.shoes[i].name}, ${obj.shoes[i].price}`;
      results.push(result);
    }
  });

  return results.join('');
}

// console.log(renderDesignerInventory(obj1));
console.log(renderInventory(currentInventory));
