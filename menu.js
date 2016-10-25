const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var arr = ["add", "subtract", "divide", "multiply", "exit"];
function menu(callback) {

  reader.question("What do you want to do?", function(ans1) {
    console.log(`You chose ${ans1} ${arr[ans1]}`);
    reader.question("Input a number", function(ans2) {
      reader.question("Input another number", function(ans3) {
        const choice = parseInt(ans1);
        const num1 = parseInt(ans2);
        const num2 = parseInt(ans3);


        switch (choice) {

        case 0:
          callback(num1 + num2);
          break;
        case 1:
          callback(num1 - num2);
          break;
        case 2:
          callback(num1 / num2);
          break;
        case 3:
          callback(num1 * num2);
          break;
        case 4:
        default:
          menu(callback);
        }

      });
    });
  });
}

menu(function(result) {
  console.log(`the result is ${result}`);
  reader.close();
});
