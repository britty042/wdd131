const character = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 8,
    health: 40,
    image: 'images/snortleblat.webp',
    attack: function() {
        const healthIndex = this.health -= 20;
        
        if (healthIndex <= 0) {
            this.health = 0;
            createCharacter();
        }

        else {
            createCharacter();
        }
    },
    levelUp: function() {
        this.level++;
        createCharacter()},
}
      
function createCharacter() {
    document.querySelector('.name').textContent = character.name;

    let healthInfo = character.health;

    if (healthInfo === 0) {
        healthInfo = "Bummer! This character has died!";
    }

    document.querySelector('.stats').innerHTML = 
        `<p>Class: ${character.class}</p>
        <p>Level: ${character.level}</p>
        <p>Health: ${healthInfo}</p>`;

    document.querySelector('.image').src = character.image;
    document.querySelector('.image').alt = 'Image of a tough looking alligator with armor';

}

createCharacter();

document.querySelector("#levelUp").addEventListener("click", function () {
    character.levelUp();
});

document.querySelector("#attacked").addEventListener("click", function () {
    character.attack();
});