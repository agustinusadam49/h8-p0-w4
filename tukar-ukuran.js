function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    
    var arrKalimat = []
    for (i = 0; i < kalimat.length; i++) {
        arrKalimat.push(kalimat[i])
    }
    
    var lowerDict = 'abcdefghijklmnopqrstuvwxyz '
    var upperDict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '
    var temp = '';
    
    for (i = 0; i < arrKalimat.length; i++) {
        for (j = 0; j < lowerDict.length; j++)
        if (arrKalimat[i] == lowerDict[j]) {
            arrKalimat[i] = upperDict[j]
        } else if (kalimat[i] == upperDict[j]) {
            arrKalimat[i] = lowerDict[j]
        }
    }
    
    var newKalimat = ''
    for (k = 0; k < arrKalimat.length; k++) {
        newKalimat += arrKalimat[k]
    }
    return newKalimat
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"