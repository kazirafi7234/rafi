const tinderUser = new Object()

tinderUser.id = "1234abc"
tinderUser.name = "fahim"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "rafi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kazi",
            lastname: "rafi"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {...obj1, ...obj2 }
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

const users = [
    {
      id: 1,
      email: "r@google.com"  
    }
]
//users[1].email

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('phone'))


