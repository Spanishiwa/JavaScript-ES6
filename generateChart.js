var students = [
  {name: 'bill', age: 14, gpa: 3.3},
  {name: 'max', age: 15, gpa: 3.7},
  {name: 'jean', age: 12, gpa: 3.2},
  {name: 'mary', age: 16, gpa: 3.8},
  {name: 'alex', age: 11, gpa: 2.7},
  {name: 'kate', age: 15, gpa: 3.9},
  {name: 'leah', age: 12, gpa: 3.8},
  {name: 'pat', age: 13, gpa: 3.1},
  {name: 'sally', age: 12, gpa: 3.5},
  {name: 'sue', age: 12, gpa: 2.5},
  {name: 'peter', age: 13, gpa: 1.4},
  {name: 'geoffry', age: 14, gpa: 3.3},
  {name: 'adam', age: 15, gpa: 2.7},
  {name: 'jack', age: 12, gpa: 1.2},
  {name: 'shelby', age: 16, gpa: 3.8},
  {name: 'ethan', age: 11, gpa: 2.7},
  {name: 'chaazi', age: 15, gpa: 1.9},
  {name: 'monica', age: 12, gpa: 3.8},
  {name: 'nick', age: 12, gpa: 3.5},
  {name: 'marion', age: 12, gpa: 1.5},
  {name: 'allison', age: 15, gpa: 3.9},
  {name: 'alexander', age: 12, gpa: 1.8},
  {name: 'maxamillion', age: 13, gpa: 3.1},
  {name: 'katherine', age: 12, gpa: 3.5}
];

function generateChart(arr){
  let n = Math.floor(arr.length * Math.random());
  let chart = [];
  let i = 0;
  while (i < arr.length) {
    if (chart.includes(arr[n].name.slice(0,5))){
      n = Math.floor(arr.length * Math.random());
    }
    else {
    chart.push(arr[n].name.slice(0,5));
    n = Math.floor(arr.length * Math.random());
    i += 1;
  }
  }
  return chart;
}
console.log(generateChart(students));
function printz(arr){
  let j = 0;
  while (j < 4){
    console.log(arr.splice((j*6),((j*6)+6)).join(" "));
    j += 1;
  }
}
printz(generateChart(students));
