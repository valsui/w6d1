
// Write a sum function that takes any number of arguments:
// 
//     sum(1, 2, 3, 4) === 10
//     sum(1, 2, 3, 4, 5) === 15
// Solve it first using the arguments keyword, then rewrite your solution to use the ... rest operator.

// using arguments 
let sumArgs = function () {
  let result = 0;
  const args = Array.from(arguments);
  args.forEach((el) => result += el);
  return result;
};

// console.log(sumArgs(1, 2, 3, 4));
// console.log(sumArgs(1, 2, 3, 4, 5));

let sum = (...nums) => {  
  let result = 0;
  nums.forEach((el) => result += el);
  return result;
};

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

// Function.prototype.myBind = function (ctx, ...bindArgs) {
//   return (...callArgs) => {
//     return this.apply(ctx, bindArgs.concat(callArgs));
//   };
// };
Function.prototype.myBind = function (context) {
  const args = Array.from(arguments);

  const boundArgs = args.slice(1);

  const that = this;
    return function () {

      return that.apply(context, boundArgs.concat(Array.from(arguments)));
    };
};
  

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true
class Dog {
  constructor(name) {
    this.name = name;
  }
}

const ein = new Dog("Ein");


