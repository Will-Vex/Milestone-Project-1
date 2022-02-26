//handles the effects applied when an item is picked up
//each item's effects are defined seperately
function itemEffects(item){
    switch(item){
        case 'bow':
            playerStats.range += 1
            break;
        case 'sword':
            playerStats.attack += 5
            break;
        case 'heart':
            playerStats.maxHP += 50
            playerStats.health = playerStats.maxHP
            break;
        case 'potion':
            playerStats.health += 50
            if(playerStats.health>playerStats.maxHP){
                playerStats.health = playerStats.maxHP
            }  
    }
}