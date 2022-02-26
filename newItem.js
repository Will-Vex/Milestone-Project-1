//creates an item of the specified id, and sets its coordinates 
function newItem(id,x,y){
    let item = document.createElement('img')
    item.src = ('assets/'+ id + '.png')
    item.eqipped = false
    item.xpos = x
    item.ypos = y
    item.id = id
    document.body.append(item)
    return item
}