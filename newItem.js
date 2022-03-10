//creates an item of the specified id, and sets its coordinates 
function newItem(id,x,y){    
    let item = document.createElement('img')
    item.src = ('assets/'+ id + '.png')
    item.xpos = x
    item.ypos = y
    item.id = id
    mainDiv.append(item)
    positionItem(item,x,y)
    return item
}

function positionItem(item,x,y){
    item.style.position = 'absolute'
    item.style.left = (((x-1)*70)+3 + 'px')
    item.style.top = (((y-1)*70)+3 + 'px')
    let position = getPosition(x,y)
    spaces[position] = item.id
}


//picks a random empty square on the edge of the board and creates a new enemy there.
//enemies get progressively stronger.
function newEnemy() {
    const spawnPoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 20, 29, 30, 39, 40, 49, 50, 59, 60, 69, 70, 79, 80, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
    let validSpawn = false
    let x
    let y
    while (validSpawn == false) {
        x = (Math.floor(Math.random() * 10) + 1)
        y = (Math.floor(Math.random() * 10) + 1)
        if (spawnPoints.includes(getPosition(x, y)) && spaces[getPosition(x,y)]=='') {
            validSpawn = true
        }
    }
    enemiesSpawned ++
    let enemy = newItem('scroll',x,y)
    enemies.push(enemy)
    enemy.id = ('enemy' + enemiesSpawned)
    enemy.health = enemiesSpawned
    enemy.attack = enemiesSpawned
    spaces[getPosition(x,y)] = enemy.id
}