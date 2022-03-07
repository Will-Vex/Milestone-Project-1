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

const rows = [row1,row2,row3,row4,row5,row6,row7,row8,row9,row10]

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

const columns= [column1,column2,column3,column4,column5,column6,column7,column8,column9,column10]

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