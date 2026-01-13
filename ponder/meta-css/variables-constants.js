const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;

console.log(area);
//once the variable has been assigned, you can change it without "let"
radius = 20;
area = radius * radius * PI;

console.log(area);

// type coersion (assumes that the string is a number in this case)
const one = 1;
const two = '2';
                    
let result = one * two;

console.log(result);

// concats instead of assumes with the +
result = one + two;
console.log(result);

//works with a string to add rather than concat by changing the string to a number
result = one + Number(two);
console.log(result)

//Scope
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block (its been declared inside the block)
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    //Needs to be declared outside of the block to access it outside of the block