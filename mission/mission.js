
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo-white.png';
    } else {
        document.body.classList.remove('dark');
        logo.src = 'byui-logo-blue.webp';
    }
}           
                    

//When dark mode is selected, background screen turns black, all but the blue letters turn white, and the image changes to white
//when light mode is selected, or no mode chosen, screen in white, letters are black, and it includes the blue background image