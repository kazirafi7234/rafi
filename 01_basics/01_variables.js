const accountId = 114365
let accountEmail = "rafi1234@gmail.com"
var accountPassword = "123456"
accountCity = "Chattogram"
let accountState;

// accountId = 2 // not allowed

accountEmail = "vsgddfr@gmail.com"
accountPassword = "12312423"
accountCity = "Cumilla"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
