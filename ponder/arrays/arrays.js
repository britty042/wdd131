//.forEach
const steps = ['one', 'two', 'three'];

//steps.forEach(function(item) {
//    console.log(item);
//});

steps.forEach(showSteps);

function showSteps(step) {
    console.log(step);
};

//.map

let myList = document.querySelector('#myList');

const stepsHtml = steps.map(listTemplate);
//dynamically add list items to the HTML
function listTemplate(item) {
    //back ticks required, not quote marks, as well as ${} = template literal
    return `<li> ${item}</li>`;
};

//adds with commas in between.  the .join('') makes it so there is nothing in between
myList.innerHTML = stepsHtml.join('');



let grades = ['A', 'B', 'C'];
let points;

let gpaPoints = grades.map(convert);

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

console.log(gpaPoints);
          
//.reduce

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item) {
    return total + item;
}

console.log(totalPoints);

gpaAverage = totalPoints/gpaPoints.length;

console.log(gpaAverage);

//.filter (filters out results depending on a certain condition.
// Done here using an anonymous function)


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
    
const shortWords = words.filter(function(word) {
    return word.length < 6;
})

console.log(shortWords);

//.indexOf (will return the index of something in the array)

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;

let luckyIndex = myArray.indexOf(luckyNumber);

console.log(luckyIndex);

//dynamic content
let container = document.querySelector('#studentContainer');


const students = [
    {
        last: 'Andrus', 
        first: 'Aaron'
    },
    {
        last: 'Masa', 
        first:'Manny'
    },
    {
        last: 'Tanda', 
        first: 'Tamanda'
    }
];

students.forEach(function(item) {
    let name = document.createElement('div');
    name.className = 'format';

    let html = `
        <span>${item.first}</span>
        <span>${item.last}</span>
        <hr>
        `;
    name.innerHTML = html;
    container.appendChild(name);
})
          
