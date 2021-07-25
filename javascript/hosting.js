// foo();
// bar();

// var foo = function() {
//     console.log('foo and x = ' + x);
// };

// function bar() {
//     console.log('bar and x = ' + x);
// }

// var x = 1;

// -------------------------

// var foo;

// function bar() {
//     console.log('bar and x = ' + x);
// }

// var x;

// // foo();
// bar();
// foo = function() {
//     console.log('foo and x = ' + x);
// }

// x = 1;

// -------------------------

x = 2;
console.log('x is ' + x);
hello();

function hello() {
    console.log('x is ' + x + ' in hello');
}

console.log(global.x);

var x = 1;
console.log(global.x);
console.log('x = ' + x);