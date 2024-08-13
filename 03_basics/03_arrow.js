const user = {
    username: "rafi",
    price: 999,

    WelcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }

}
user.WelcomeMessage()

user.username = "rahat"
user.WelcomeMessage()

// console.log(this)

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => return num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )


