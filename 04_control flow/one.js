// if

const isUserLoggedIn = true

if ( 2 == "2"){
    console.log("executed");
}

// <, >, <=, >=, ==,, !=, ===, !==

const temperature = 41

if (temperature < 50){
    console.log("less than 50")
} else{
    console.log("temperature is greater than 50")
}


const score = 200
 if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
 }
//console.log(`user power: ${power}`) // same not should be used outside

const balance = 1000

if (balance >500) console.log("test");

if (balance < 500) {
    console.log("less than");
} else if (balance < 750){
    console.log("less than 750");
} else {
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggerInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy phone");
}

if (loggedInFromGoogle || loggerInFromEmail){
    console.log("user logged in");
}


