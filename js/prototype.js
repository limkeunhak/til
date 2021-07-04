const util = require('util');

function Test (a, b) {
    this.a = a;
    this.b = b;

    function abc() {
        console.log('abc');
    }
    return a + b;
}


const testObj = new Test();
console.log(util.inspect(Test.__proto__, true, null, true));
console.log(util.inspect(Test.prototype, true, null, true));
console.log(util.inspect(Test, true, null, true));
console.log(util.inspect(testObj.__proto__, true, 3, true));
