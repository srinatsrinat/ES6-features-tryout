function LeapYear(year:number){
if(year%4 ==0)
{
    return true
}
else{
    return false
}

}

var result = LeapYear(2019)

var result1 = LeapYear(2024)

//var result2 = LeapYear('abcd')

console.log(result,result1)


function reverse(word:string){
   
        var ww = word.split('').reverse().join('')

        console.log(ww)
   
}

reverse('hello')


let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}

callbacks[0]()
callbacks[1]() 
callbacks[2]()


console.log(callbacks[0](),
callbacks[1]() ,
callbacks[2]())

{
    function foo() { console.log(1) }
    foo() 
    {
        function foo () { console.log(2) }
        foo() 
    }
    foo() 
}

function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
       // setTimeout(() => reject("Rejected"), 100)
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
        
    })
}


msgAfterTimeout("        ", "Foo", 100).then((msg) =>
    msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})


var a = [ 1, 3, 4, 2 ]
a.filter(function (x) { console.log( x > 3) })

var list = [ 1, 2, 3 ]
var [ a, , b ] = list
console.log(a,b)
var [b,a ] = [ a, b ]
console.log(a,b)


//var obj = { a: 1 }
//var list = [ 1 ]
//var hold = []
//var hold1 = {}
//var { hold, b = 2 } = list
//var [ hold1, y = 2 ] = obj

//console.log(a,b,hold,hold1)

var obj = { a: 1 }
var list = [ 1 ]
var { a, b = 2 } = obj
var [ x, y = 2 ] = list

console.log(a,b,x,y)