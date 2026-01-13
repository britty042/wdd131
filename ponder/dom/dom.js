const title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web Page Components';

//targeting an id (#)
//document.querySelector('#topics').style.color = 'red';

//can also do it with a variable

//let topics = document.querySelector('#topics');
//topics.style.color = 'red'

//or with getElementbyId
document.getElementById('topics').style.color = 'purple';

//targeting a class (use a .)
let list = document.querySelector('.list');

list.style.border = '3px solid black';

let para = document.querySelector('p');

//para.style.backgroundColor = 'lightblue';

//this way uses previous defined CSS rules (.background) and calls them into action
para.classList.add('background');

//target the entire body of the document
document.querySelector('body').classList.add('background');

//changing images
const image = document.querySelector('img');

image.setAttribute('src', 'web.png');


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})
                