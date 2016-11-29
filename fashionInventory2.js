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

function designerAveragePrice(currentInventory) {

}

function testAggregateAveragePrice() {
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
