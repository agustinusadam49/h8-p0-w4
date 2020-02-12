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

    var minimal = temp2[temp2.length - 1].length
    return minimal
}
  
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2 
