function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("M")
    console.log("I")
}

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(12 , 4)

function addTwoNumbers2(number3, number4){
    
    let result = number3 + number4
    return result
}

const result = addTwoNumbers2(12 , 4)
console.log("result: ", result)

function loginUserMessage(username){
    return `${username} just logged in`
}
    
console.log(loginUserMessage("Rafi"))


