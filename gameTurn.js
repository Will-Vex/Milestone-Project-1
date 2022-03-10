 let direction = null
function gameTurn(){
    if(playerTurn == true && direction != null){
        playerAction(direction)
        direction = null
        enemies.forEach(enemy => {
            if((enemy.xpos == playerCharacter.xpos + 1 && enemy.ypos == playerCharacter.ypos + 1)||(enemy.xpos >= (playerCharacter.xpos -1) && enemy.ypos > (playerCharacter.ypos + 1))){
                spaces[getPosition(enemy.xpos,enemy.ypos)] =''
                enemy.ypos--
            }else if((enemy.xpos == playerCharacter.xpos - 1 && enemy.ypos == playerCharacter.ypos + 1)||enemy.xpos < (playerCharacter.xpos -1) && enemy.ypos >= (playerCharacter.ypos - 1)){
                spaces[getPosition(enemy.xpos,enemy.ypos)] =''
                enemy.xpos ++
            }else if((enemy.xpos == playerCharacter.xpos - 1 && enemy.ypos == playerCharacter.ypos - 1)||enemy.xpos <= (playerCharacter.xpos +1) && enemy.ypos < (playerCharacter.ypos - 1)){
                spaces[getPosition(enemy.xpos,enemy.ypos)] =''
                enemy.ypos ++
            }else if((enemy.xpos == playerCharacter.xpos + 1 && enemy.ypos == playerCharacter.ypos - 1)||enemy.xpos > (playerCharacter.xpos +1) && enemy.ypos <= (playerCharacter.ypos + 1)){
                spaces[getPosition(enemy.xpos,enemy.ypos)] =''
                enemy.xpos --
            }else{
                playerStats.health -= enemy.attack
            }
            
            positionItem(enemy,enemy.xpos,enemy.ypos)
        });
        newEnemy()
        
    }


}
setInterval(gameTurn,100)


document.addEventListener('keydown', function(e){
    switch (e.key) {
        case 'ArrowUp':
            if (playerCharacter.ypos > 1) {
                direction = 'north'
            }
            break;
        case 'ArrowLeft':
            if (playerCharacter.xpos > 1) {
                direction = 'west'

            } break;
        case 'ArrowDown':
            if (playerCharacter.ypos < 10) {
                direction = 'south'
            }
            break;
        case 'ArrowRight':
            if (playerCharacter.xpos < 10) {
                direction = 'east'

            } break;
        default:
            break;
    }
})

//If an enemy is within range, the player attacks, otherwise the player moves
function playerAction(direction){
    if (enemyInRange(direction)){
        let target 
        for (let i = 1; i <= playerStats.range; i++) {
            switch (direction) {
                case 'north':
                    if (spaces[getPosition(playerCharacter.xpos, playerCharacter.ypos - i)].includes('enemy')) {
                        target = document.getElementById(spaces[getPosition(playerCharacter.xpos, playerCharacter.ypos - i)])
                        console.log(target)
                    }
                    break;
                case 'east':
                    if (spaces[getPosition(playerCharacter.xpos + i, playerCharacter.ypos)].includes('enemy')) {
                        target = document.getElementById(spaces[getPosition(playerCharacter.xpos + i, playerCharacter.ypos)])
                    }
                    break;
                case 'south':
                    if (spaces[getPosition(playerCharacter.xpos, playerCharacter.ypos + i)].includes('enemy')) {
                        target = document.getElementById(spaces[getPosition(playerCharacter.xpos, playerCharacter.ypos + i)])
                    }
                    break;
                case 'west':
                    if (spaces[getPosition(playerCharacter.xpos + i, playerCharacter.ypos)].includes('enemy')) {
                        target = document.getElementById(spaces[getPosition(playerCharacter.xpos + i, playerCharacter.ypos)])
                    }
                    break;
                default:
                    break;
            }
            target.health -= playerStats.attack 
        }

            
        if(target.health <= 0){
            spaces[getPosition(target.xpos, target.ypos)] = ''
            target.remove()
            playerStats.score ++
            target = ''
        }
        
    }else{
        spaces[getPosition(playerCharacter.xpos,playerCharacter.ypos)] = ''
        switch (direction) {
            case 'north':
                playerCharacter.ypos--
                
                break;
            case 'east':
                playerCharacter.xpos++
                
                break;
            case 'south':
                playerCharacter.ypos++
                
                break;
            case 'west':
                playerCharacter.xpos--
                break;

            default:
                break;
        }
        positionItem(playerCharacter,playerCharacter.xpos,playerCharacter.ypos)

    }
}

//checks to see if an enemy is within the player's attack range in the given direction
function enemyInRange(direction) {
    let inRange = false
    for (let i = 1; i <= playerStats.range; i++) {
        switch (direction) {
            case 'north':
                if (spaces[getPosition(playerCharacter.xpos, playerCharacter.ypos - i)].includes('enemy')) {
                    inRange = true
                }
                break;
            case 'east':
                if (spaces[getPosition(playerCharacter.xpos + 1, playerCharacter.ypos)].includes('enemy')) {
                    inRange = true
                }
                break;
            case 'south':
                if (spaces[getPosition(playerCharacter.xpos, playerCharacter.ypos + i)].includes('enemy')) {
                    inRange = true
                }
                break;
            case 'west':    
                if (spaces[getPosition(playerCharacter.xpos - i, playerCharacter.ypos)].includes('enemy')) {
                    inRange = true
                }
                break;
            default:
                break;
        }
        
    }
    return inRange
}
