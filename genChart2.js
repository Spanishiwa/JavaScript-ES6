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
  {name: 'katherine', age: 12, gpa: 3.5},
  {name: 'bo', age: 26, gpa: 2.0}
];

function randomize(orderedArr){
  let randomizedArr = [];
  let indices = [];
  for (let i = 0; i < orderedArr.length; i+=1) {
    indices[i] = i;
  }
  for (let j = (orderedArr.length-1); j >= 0; j-=1){
    let ri = indices.splice( Math.floor(Math.random() * indices.length),1 );
    randomizedArr.push(orderedArr[ri]);
  }
  return randomizedArr;
}
function pullStudent(arr) {
  return arr.map(function(obj) {
    let student = obj.name.slice(0,5);

    while (student.length < 5) {
      student += " ";
    }
    return student;
  });
}

function dimensions(arr) {
  for(let i = 5; i > 2; i -= 1) {
    if ((arr.length%i) === 0) {
      let dimensionsArr = [(arr.length/i), i];
      return dimensionsArr;
    }
  }
}

function buildArray(arr) {
  let size = dimensions(arr);
  let row = size[0], col = size[1];
  let twoDArr = [];

  for (let i = 0; i < col; i += 1) {
    let filledRow = arr.slice( (i*row), ((i+1)*row) );
    twoDArr.push(filledRow);
  }
  return twoDArr;
}

function joinChart(nestedArr) {
  return nestedArr.map(function(row) {
    row = row.join(' ');
    console.log(row);
    return row;
  });
}

function orderBy(arr, prop) {
  let sorted = arr;
  sorted = sorted.sort(function(student1, student2) {
    return `${(student1[prop] - student2[prop])}`;
  });
  return sorted;
}

function nestedShuffle(nestedArr) {
  return nestedArr.map(function(row) {
    row = randomize(row);
    return row;
  });
}


function generateChart(arr, prop) {
  let chart = randomize(arr);
  if (prop !== "undefined") {
    chart = orderBy(chart, prop);
  }
  chart = pullStudent(chart);
  let nestedChart = buildArray(chart);
  nestedChart = nestedShuffle(nestedChart);

  return joinChart(nestedChart);
}

function transpose(arr) {
  let transposedArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    transposedArr.push([]);
    for (let j = 0; (j < arr[i].length); j += 1) {
      if (j === (arr[i].length - 1) ) {
        transposedArr[i].unshift(arr[i][j]);
        continue;
      }

      transposedArr[i].push(arr[i][j]);
    }
  }
  return transposedArr;
}

function transposeCol(arr) {
  let result = [];

  for (let r = 0; r < arr.length; r += 1) {
    result.push(arr[r].slice(1, (arr[r].length - 1) ));

    if (r === (arr.length - 1 )) {
      result[r].unshift(arr[0][0]);
      continue;
    }
    result[r].unshift(arr[(r+1)][0]);
  }

  return result;
}
// console.log(randomize(students));
// console.log(pullStudent( randomize(students) ));
// console.log(dimensions( pullStudent( randomize(students) ) ));
// console.log(joinChart(buildArray(pullStudent( randomize(students) ))));
// generateChart(students);
// console.log(nestedShuffle(buildArray(orderByAge(students))));
// console.log(nestedShuffle(buildArray(orderByAge(students))));
// generateChart(students, "age");
// console.log(orderBy(students, "name"));
console.log(transposeCol( buildArray(pullStudent(students))));
// console.log(joinChart(buildArray(pullStudent(students))));
