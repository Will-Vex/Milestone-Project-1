//creates an item of the specified id, and sets its coordinates 
async function newItem(id,x,y){
    let item = document.createElement('img')
    item.src = ('assets/'+ id + '.png')
    item.eqipped = false
    item.xpos = x
    item.ypos = y
    item.id = id
    mainDiv.append(item)
    await positionItem(item,x,y)
    return item
}

function positionItem(item,x,y){
    item.style.position = 'absolute'
    item.style.left = (((x-1)*70)+3 + 'px')
    item.style.top = (((y-1)*70)+3 + 'px')
}
