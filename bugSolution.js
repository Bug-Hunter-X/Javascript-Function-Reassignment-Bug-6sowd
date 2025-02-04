//Using IIFE to protect foo function from reassignment
(function(){function foo(a,b){return a+b;}console.log(foo(2,3));})();//or
const foo = (a,b) => a+b;console.log(foo(2,3));// foo = null; //This will throw error as foo is now a constant
console.log(foo(2,3));