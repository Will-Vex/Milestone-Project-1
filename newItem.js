//creates an item of the specified id, and sets its coordinates 
function newItem(id,x,y){
    let item = document.createElement('img')
    item.src = ('assets/'+ id + '.png')
    item.eqipped = false
    item.xpos = x
    item.ypos = y
    item.id = id
    mainDiv.append(item)
    item.style.position = 'absolute'
    item.style.left = (((x-1)*70)+3 + 'px')
    item.style.top = (((y-1)*70)+3 + 'px')
    return item
}