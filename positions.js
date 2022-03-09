//Setting up arrays for the board spaces so I can reference them in other parts of the code.

const spaces = [null,null,null,null,null,null,null,null,null,null,
                null,null,null,null,null,null,null,null,null,null,
                null,null,null,null,null,null,null,null,null,null,
                null,null,null,null,null,null,null,null,null,null,
                null,null,null,null,null,null,null,null,null,null,
                null,null,null,null,null,null,null,null,null,null,
                null,null,null,null,null,null,null,null,null,null,
                null,null,null,null,null,null,null,null,null,null,
                null,null,null,null,null,null,null,null,null,null,
                null,null,null,null,null,null,null,null,null,null]


    const row1= [spaces[0],spaces[1],spaces[2],spaces[3],spaces[4],spaces[5],spaces[6],spaces[7],spaces[8],spaces[9]]
    const row2= [spaces[10],spaces[11],spaces[12],spaces[13],spaces[14],spaces[15],spaces[16],spaces[17],spaces[18],spaces[19]]
    const row3= [spaces[20],spaces[21],spaces[22],spaces[23],spaces[24],spaces[25],spaces[26],spaces[27],spaces[28],spaces[29]]
    const row4= [spaces[30],spaces[31],spaces[32],spaces[33],spaces[34],spaces[35],spaces[36],spaces[37],spaces[38],spaces[39]]
    const row5= [spaces[40],spaces[41],spaces[42],spaces[43],spaces[44],spaces[45],spaces[46],spaces[47],spaces[48],spaces[49]]
    const row6= [spaces[50],spaces[51],spaces[52],spaces[53],spaces[54],spaces[55],spaces[56],spaces[57],spaces[58],spaces[59]]
    const row7= [spaces[60],spaces[61],spaces[62],spaces[63],spaces[64],spaces[65],spaces[66],spaces[67],spaces[68],spaces[69]]
    const row8= [spaces[70],spaces[71],spaces[72],spaces[73],spaces[74],spaces[75],spaces[76],spaces[77],spaces[78],spaces[79]]
    const row9= [spaces[80],spaces[81],spaces[82],spaces[83],spaces[84],spaces[85],spaces[86],spaces[87],spaces[88],spaces[89]]
    const row10= [spaces[90],spaces[91],spaces[92],spaces[93],spaces[94],spaces[95],spaces[96],spaces[97],spaces[98],spaces[99]]

const rows = [row1,row2,row3,row4,row5,row6,row7,row8,row9,row10]


    const column1= [spaces[0],spaces[10],spaces[20],spaces[30],spaces[40],spaces[50],spaces[60],spaces[70],spaces[80],spaces[90]]
    const column2= [spaces[1],spaces[11],spaces[21],spaces[31],spaces[41],spaces[51],spaces[61],spaces[71],spaces[81],spaces[91]]
    const column3= [spaces[2],spaces[12],spaces[22],spaces[32],spaces[42],spaces[52],spaces[62],spaces[72],spaces[82],spaces[92]]
    const column4= [spaces[3],spaces[13],spaces[23],spaces[33],spaces[43],spaces[53],spaces[63],spaces[73],spaces[83],spaces[93]]
    const column5= [spaces[4],spaces[14],spaces[24],spaces[34],spaces[44],spaces[54],spaces[64],spaces[74],spaces[84],spaces[94]]
    const column6= [spaces[5],spaces[15],spaces[25],spaces[35],spaces[45],spaces[55],spaces[65],spaces[75],spaces[85],spaces[95]]
    const column7= [spaces[6],spaces[16],spaces[26],spaces[36],spaces[46],spaces[56],spaces[66],spaces[76],spaces[86],spaces[96]]
    const column8= [spaces[7],spaces[17],spaces[27],spaces[37],spaces[47],spaces[57],spaces[67],spaces[77],spaces[87],spaces[97]]
    const column9= [spaces[8],spaces[18],spaces[28],spaces[38],spaces[48],spaces[58],spaces[68],spaces[78],spaces[88],spaces[98]]
    const column10= [spaces[9],spaces[19],spaces[29],spaces[39],spaces[49],spaces[59],spaces[69],spaces[79],spaces[89],spaces[99]]
    
const columns= [column1,column2,column3,column4,column5,column6,column7,column8,column9,column10]

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