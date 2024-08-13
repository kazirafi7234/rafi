let a = 10
const b = 20
var c = 30

if(true){
    let a = 2
    console.log("Inner", a)
}

console.log(a)
console.log(b)
console.log(c)


// 2nd class

function one(){
    const username = "rafi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()


if (true) {
    const username = "rafi"
    if (username === "rafi") {
        const website = " youtube"
        console.log(username + website)
    }
        // console.log(website);

}


// ************* interesting *************

function addone(num){
    return num + 1
}

console.log(addone(5))


const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(7))


