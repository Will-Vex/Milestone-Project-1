//creates an item of the specified id, and sets its coordinates 
function newItem(id,x,y){    
    let item = document.createElement('img')
    item.src = ('assets/'+ id + '.png')
    item.column = columns[x-1]
    item.row = rows[y-1]
    item.id = id
    mainDiv.append(item)
    positionItem(item,x,y)
    return item
}

function positionItem(item,x,y){
    item.style.position = 'absolute'
    item.style.left = (((x-1)*70)+3 + 'px')
    item.style.top = (((y-1)*70)+3 + 'px')
}
