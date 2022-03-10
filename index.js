let playerTurn = true
let enemiesSpawned = 0
const enemies = []
const playerStats= {
    score: 0,
    highScore: 0,
    range: 2,
    attack: 10,
    health: 100,
    maxHP: 100
}

const mainDiv = document.getElementById('board')
const playerCharacter = newItem('axe',5,6)
newEnemy()
setInterval(display,1);
