 let direction = null
 function gameTurn(){
    if(playerTurn == true && direction != null){
        playerAction(direction)
    }
}
setInterval(gameTurn,1)


document.addEventListener('keydown', function(e){
    switch (e.key) {
        case 'ArrowUp':
            direction = 'north'
            break;
        case 'ArrowLeft':
            direction = 'west'
            break;
        case 'ArrowDown':
            direction = 'south'
            break;
        case 'ArrowRight':
            direction = 'east'
            break;
        default:
            break;
    }
})

function playerAction(direction){
    
}

function enemyInRange(direction){
    for (let i = 1; i < playerStats.range; i++) {
         
        
    }
}