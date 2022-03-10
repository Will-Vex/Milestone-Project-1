//Setting up arrays for the board spaces so I can reference them in other parts of the code.

const spaces = ['','','','','','','','','','',
                '','','','','','','','','','',
                '','','','','','','','','','',
                '','','','','','','','','','',
                '','','','','','','','','','',
                '','','','','','','','','','',
                '','','','','','','','','','',
                '','','','','','','','','','',
                '','','','','','','','','','',
                '','','','','','','','','','']             


// takes an element's x and y values and returns the corresponding index of the spaces array 
// I wanted to find a less lengthy way to do this but ran out of time
function getPosition(x,y){
    let position
    if(x == 1 && y == 1){
        position = 0
    }
    if(x == 2 && y == 1){
        position = 1
    }
    if(x == 3 && y == 1){
        position = 2
    }
    if(x == 4 && y == 1){
        position = 3
    }
    if(x == 5 && y == 1){
        position = 4
    }
    if(x == 6 && y == 1){
        position = 5
    }
    if(x == 7 && y == 1){
        position = 6
    }
    if(x == 8 && y == 1){
        position = 7
    }
    if(x == 9 && y == 1){
        position = 8
    }
    if(x == 10 && y == 1){
        position = 9
    }
    if(x == 1 && y == 2){
        position = 10
    }
    if(x == 2 && y == 2){
        position = 11
    }
    if(x == 3 && y == 2){
        position = 12
    }
    if(x == 4 && y == 2){
        position = 13
    }
    if(x == 5 && y == 2){
        position = 14
    }
    if(x == 6 && y == 2){
        position = 15
    }
    if(x == 7 && y == 2){
        position = 16
    }
    if(x == 8 && y == 2){
        position = 17
    }
    if(x == 9 && y == 2){
        position = 18
    }
    if(x == 10 && y == 2){
        position = 19
    }
    if(x == 1 && y == 3){
        position = 20
    }
    if(x == 2 && y == 3){
        position = 21
    }
    if(x == 3 && y == 3){
        position = 22
    }
    if(x == 4 && y == 3){
        position = 23
    }
    if(x == 5 && y == 3){
        position = 24
    }
    if(x == 6 && y == 3){
        position = 25
    }
    if(x == 7 && y == 3){
        position = 26
    }
    if(x == 8 && y == 3){
        position = 27
    }
    if(x == 9 && y == 3){
        position = 28
    }
    if(x == 10 && y == 3){
        position = 29
    }
    if(x == 1 && y == 4){
        position = 30
    }
    if(x == 2 && y == 4){
        position = 31
    }
    if(x == 3 && y == 4){
        position = 32
    }
    if(x == 4 && y == 4){
        position = 33
    }
    if(x == 5 && y == 4){
        position = 34
    }
    if(x == 6 && y == 4){
        position = 35
    }
    if(x == 7 && y == 4){
        position = 36
    }
    if(x == 8 && y == 4){
        position = 37
    }
    if(x == 9 && y == 4){
        position = 38
    }
    if(x == 10 && y == 4){
        position = 39
    }
    if(x == 1 && y == 5){
        position = 40
    }
    if(x == 2 && y == 5){
        position = 41
    }
    if(x == 3 && y == 5){
        position = 42
    }
    if(x == 4 && y == 5){
        position = 43
    }
    if(x == 5 && y == 5){
        position = 44
    }
    if(x == 6 && y == 5){
        position = 45
    }
    if(x == 7 && y == 5){
        position = 46
    }
    if(x == 8 && y == 5){
        position = 47
    }
    if(x == 9 && y == 5){
        position = 48
    }
    if(x == 10 && y == 5){
        position = 49
    }
    if(x == 1 && y == 6){
        position = 50
    }
    if(x == 2 && y == 6){
        position = 51
    }
    if(x == 3 && y == 6){
        position = 52
    }
    if(x == 4 && y == 6){
        position = 53
    }
    if(x == 5 && y == 6){
        position = 54
    }
    if(x == 6 && y == 6){
        position = 55
    }
    if(x == 7 && y == 6){
        position = 56
    }
    if(x == 8 && y == 6){
        position = 57
    }
    if(x == 9 && y == 6){
        position = 58
    }
    if(x == 10 && y == 6){
        position = 59
    }
    if(x == 1 && y == 7){
        position = 60
    }
    if(x == 2 && y == 7){
        position = 61
    }
    if(x == 3 && y == 7){
        position = 62
    }
    if(x == 4 && y == 7){
        position = 63
    }
    if(x == 5 && y == 7){
        position = 64
    }
    if(x == 6 && y == 7){
        position = 65
    }
    if(x == 7 && y == 7){
        position = 66
    }
    if(x == 8 && y == 7){
        position = 67
    }
    if(x == 9 && y == 7){
        position = 68
    }
    if(x == 10 && y == 7){
        position = 69
    }
    if(x == 1 && y == 8){
        position = 70
    }
    if(x == 2 && y == 8){
        position = 71
    }
    if(x == 3 && y == 8){
        position = 72
    }
    if(x == 4 && y == 8){
        position = 73
    }
    if(x == 5 && y == 8){
        position = 74
    }
    if(x == 6 && y == 8){
        position = 75
    }
    if(x == 7 && y == 8){
        position = 76
    }
    if(x == 8 && y == 8){
        position = 77
    }
    if(x == 9 && y == 8){
        position = 78
    }
    if(x == 10 && y == 8){
        position = 79
    }
    if(x == 1 && y == 9){
        position = 80
    }
    if(x == 2 && y == 9){
        position = 81
    }
    if(x == 3 && y == 9){
        position = 82
    }
    if(x == 4 && y == 9){
        position = 83
    }
    if(x == 5 && y == 9){
        position = 84
    }
    if(x == 6 && y == 9){
        position = 85
    }
    if(x == 7 && y == 9){
        position = 86
    }
    if(x == 8 && y == 9){
        position = 87
    }
    if(x == 9 && y == 9){
        position = 88
    }
    if(x == 10 && y == 9){
        position = 89
    }
    if(x == 1 && y == 10){
        position = 90
    }
    if(x == 2 && y == 10){
        position = 91
    }
    if(x == 3 && y == 10){
        position = 92
    }
    if(x == 4 && y == 10){
        position = 93
    }
    if(x == 5 && y == 10){
        position = 94
    }
    if(x == 6 && y == 10){
        position = 95
    }
    if(x == 7 && y == 10){
        position = 96
    }
    if(x == 8 && y == 10){
        position = 97
    }
    if(x == 9 && y == 10){
        position = 98
    }
    if(x == 10 && y == 10){
        position = 99
    }
    return position
}