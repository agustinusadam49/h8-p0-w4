function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp = []
    for (i = 1; i <= angka; i++) {
        for (j = 1; j <= angka; j++) {
            if (i * j == angka) {
                temp.push([i, j])
            }
        }
    }
    
    var temp2 = []
    if (angka > 1) {
        for (j = 1; j <= temp.length / 2; j++) {
            temp2.push(String(temp[j][0]) + String(temp[j][1]))
        }
    } else if (angka == 1) {
        for (j = 0; j < temp.length; j++) {
            temp2.push(String(temp[j][0]) + String(temp[j][1]))
        }
    }

    var temp3 = []
    for (k = 0; k < temp2.length; k++) {
        temp3.push(Number(temp2[k]))
    }

    // Sorting dari yang terbesar ke terkecil
    for (l = 0; l < temp3.length; l++) {
        for (m = 0; m < temp3.length; m++) {
            if (temp3[m] < temp3[m + 1]) {
                var sementara = temp3[m + 1]
                temp3[m + 1] = temp3[m]
                temp3[m] = sementara
            }
        }
    }

    var temp4 = []
    for (o = 0; o < temp3.length; o++) {
        temp4.push(String(temp3[o]))
    }

    var minimal = temp4[temp4.length - 1].length
    return minimal
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2