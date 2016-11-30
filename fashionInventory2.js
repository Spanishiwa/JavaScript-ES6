function designerAveragePrice(inventory) {
  let designerData = inventory.map(function(designer) {
    let designerDatum = {};

    let sum = designer.shoes.reduce(function(total, shoe) {
      total += shoe.price;
      return total;
    }, 0);

    designerDatum.name = designer.name;
    designerDatum.averagePrice = sum / designer.shoes.length;

    return designerDatum;
  });

  let designersAveragePrice = {designers: designerData};

  return designersAveragePrice;
}

// function aggregateAveragePrice(designer) {
//   let sum = designer.shoes.reduce(function(total, shoe) {
//     total += shoe.price;
//     return total;
//   }, 0);
//
//   return (sum / designer.shoes.length);
// }

function testAggregateAveragePrice() {
  let inventory = [
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

  let expected = {
    'designers': [
      {
        'name': 'Brunello Cucinelli',
        'averagePrice': 1025
      },
      {
        'name': 'Gucci',
        'averagePrice': 850
      }
    ]
  };

  let actual = JSON.stringify(designerAveragePrice(inventory));
  let testName = "it should aggregate average price per designer";
  let expect = JSON.stringify(expected);

  return assertEqual(actual, expect, testName);
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed!');
  }
  else {
    console.log(`failed: ${testName}, actual is ${actual} expected is ${expected}`);
  }
}

testAggregateAveragePrice();
// console.log(designerAveragePrice(obj1));
