const name = "rafi"
const repoCount = 10

console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('rafigame')

console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('i'))

const gameName2 = new String('rafi-hc')
const newString = gameName2.substring(0, 4)
console.log(newString)

const anotherString = gameName2.slice(-3, 1)
console.log(anotherString)

const newStringOne = "    Rafi    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "http://rafi.com/rafi20%kazi"
console.log(url.replace('20%', "-"))
console.log(url.includes('kazi'))

console.log(gameName2.split('-'))

