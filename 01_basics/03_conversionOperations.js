let score = null

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score) 
console.log(typeof valueInNumber);
console.log(valueInNumber);

// score at "33abc" = typeof is string, valueInNumber is only number and it will show NaN
// score at null = typeof is object, valueInNumber is only number and it will show 0
// score at undefined = typeof is undefined, valueInNumber is only number and it will show NaN
// score at true = typeof is boolean, valueInNumber is only number and it will show 1
// score at false = typeof is boolean, valueInNumber is only number and it will show 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// If blank/ 0 => false
// "Rafi" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


