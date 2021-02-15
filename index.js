function LeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var result = LeapYear(2019);
var result1 = LeapYear(2024);
//var result2 = LeapYear('abcd')
console.log(result, result1);
function reverse(word) {
    var ww = word.split('').reverse().join('');
    console.log(ww);
}
reverse('hello');
var callbacks = [];
var _loop_1 = function (i) {
    callbacks[i] = function () { return i * 2; };
};
for (var i = 0; i <= 2; i++) {
    _loop_1(i);
}
callbacks[0]();
callbacks[1]();
callbacks[2]();
console.log(callbacks[0](), callbacks[1](), callbacks[2]());
{
    function foo() { console.log(1); }
    foo();
    {
        function foo() { console.log(2); }
        foo();
    }
    foo();
}
function msgAfterTimeout(msg, who, timeout) {
    return new Promise(function (resolve, reject) {
        // setTimeout(() => reject("Rejected"), 100)
        setTimeout(function () { return resolve(msg + " Hello " + who + "!"); }, timeout);
    });
}
msgAfterTimeout("        ", "Foo", 100).then(function (msg) {
    return msgAfterTimeout(msg, "Bar", 200);
}).then(function (msg) {
    console.log("done after 300ms:" + msg);
});
var a = [1, 3, 4, 2];
a.filter(function (x) { console.log(x > 3); });
var list = [1, 2, 3];
var a = list[0], b = list[2];
console.log(a, b);
var _a = [a, b], b = _a[0], a = _a[1];
console.log(a, b);
//var obj = { a: 1 }
//var list = [ 1 ]
//var hold = []
//var hold1 = {}
//var { hold, b = 2 } = list
//var [ hold1, y = 2 ] = obj
//console.log(a,b,hold,hold1)
var obj = { a: 1 };
var list = [1];
var a = obj.a, _b = obj.b, b = _b === void 0 ? 2 : _b;
var x = list[0], _c = list[1], y = _c === void 0 ? 2 : _c;
console.log(a, b, x, y);
