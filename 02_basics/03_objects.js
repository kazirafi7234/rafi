// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rafi",
    age: 18,
    [mySym]: "mykey1",
    Location: "Chattogram",
    email: "kazirafi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym) // if not used [], it will show string, not symbol

JsUser.email = "rafi7632@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "ragy672738hjdiwqj"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello Js user")
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}`)
}

console.log(JsUser.greetingTwo())


