let myDate = new Date()
console.log(myDate);

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)

let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())

let myCreatedDateTwo = new Date(2024, 0, 23, 14, 23)
console.log(myCreatedDateTwo.toLocaleString())

let myDate2 = new Date("2024-02-23")
console.log(myDate2.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myDate2.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long",

})


