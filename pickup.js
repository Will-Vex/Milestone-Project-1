// this function runs when the player presses space while standing in the same tile as an item.
// it equips the item, applying any relevant effects

function pickup(item){
    item.equipped = true
    itemEffects(item.id)
    item.remove()
}