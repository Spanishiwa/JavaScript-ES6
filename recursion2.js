function deepEval(obj1, obj2){
  if (typeof obj1 !== typeof obj2){
    return false;
  }
  else if ((obj1 === null) || (obj2 === null)){
    return false;
  }
  else if (Object.keys(obj1) === Object.keys(obj2)){
    for (var i = 0; i < Object.keys(obj1).length; i += 1){
      if ((Object.keys(obj1).map(e => obj1[e]) !== Object.keys(obj2).map(e => obj2[e]))){
        return false;
        }
      }
    }
    return true;
  }
var obj = {here: {is: "an"}, object: 2};
console.log(deepEval(obj, {here: 1, object: 2}));
