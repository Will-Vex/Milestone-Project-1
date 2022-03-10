function display(){
    let hp = document.getElementById('health')
    let atk = document.getElementById('attack')
    let range = document.getElementById('range')
    let score = document.getElementById('score')
    let highScore = document.getElementById('highscore')
    hp.innerHTML = ('Health: ' + playerStats.health + '/' + playerStats.maxHP)
    atk.innerHTML = ('Attack: ' + playerStats.attack)
    range.innerHTML = ('Range: '+ playerStats.range)
    score.innerHTML = ('Score: ' + playerStats.score + ' points')
    highScore.innerHTML = ('High Score: ' + playerStats.highScore + ' points')
}