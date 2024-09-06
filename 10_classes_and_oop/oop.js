const user = {
    username: "rafi",
    logInCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Get user details from detabase");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


function User(username, logInCount, isLoggedIn){
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this,username}`);
    }

    return this
}

const userOne = new User("rafi", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne.constructor);
//console.log(userTwo);

