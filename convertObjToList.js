let test1 = {
  name: 'Holly',
  age: 35,
  role: 'producer',
  species: 'canine',
  name: 'Bowser',
  weight: 45
}
let test2 = {
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

function convertObjectToList(obj) {
  let result = [];
  for(key in obj)
    result.push([key, obj[key]]);
  return result;
}

console.log(convertObjectToList(test1));
// console.log(convertObjectToList(test2));
