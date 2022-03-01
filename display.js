function display(){
    let hp = document.getElementById('health')
    let atk = document.getElementById('attack')
    let range = document.getElementById('range')
    hp.innerHTML = ('Health: ' + playerStats.health + '/' + playerStats.maxHP)
    atk.innerHTML = ('Attack: ' + playerStats.attack)
    range.innerHTML = ('Range: '+ playerStats.range)
}