function test(num, obj1, obj2) {
  num = num * 10
  obj1.assign = 'changed'
  obj2 = {assign: 'changed'}
}

var num = 10
var obj1 = { assign: 'unchanged'}
var obj2 = { assign: 'unchanged'}

test(num, obj1, obj2)

console.log(num)
console.log(obj1)
console.log(obj2)

// EVENT LOOP
// THIS CONTEXT


https://cdn-images-1.medium.com/max/2000/1*VM84VPcCQe0gSy44l9S5yA.jpeg

Naive - space O(1), time O(n^2)
Ratcheting - space O(1), time (n) -- IF SORTED
Hash table - space O(n), time (n) -- IF NOT SORTED - still better than naive

Dynamic programming: 
best example - fibonacci sequence
memoization: top-down -- using an object like {} where you check store what you get and keep going
caching: bottom-up -- using an array



// TEMPORAL DEAD ZONE
let test = 'hey';

(function bla() {
  return test;
  let test = 'inside'; // since test is hoisted, it no longer recognizes test as a global scope but as a local scope
})();

https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone
https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6

For let and const, they are hoisted but you cannot access them before the actual declaration is evaluated at runtime



// DOCTYPE HTML
http://diveintohtml5.info/semantics.html



pass by value (primitives)
let x = 5
let y = x
x = 8

x // 8
y // 5

pass by reference (objects)
let x = { age: 5 }
let y = x
x.age = 8

x // { age: 8 }
y // { age: 8 }


// hide variables
function Mars(){
  var x = [{A:1, B:2, C:3},{A:1, B:2, C:3}];
  this.getArr = function(){
      return x;
  }
}
var mars = new Mars();
mars.x; // undefined
mars.getArr(); // [Object, Object]