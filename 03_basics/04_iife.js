// Immediately Invoked Function Expressions

(function chai(){
    console.log(`DB CONNECTED`);
})();

// ; must

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) (`rafi`)

