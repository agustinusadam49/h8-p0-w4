function ubahHuruf(kata) {
    // you can only write your code here!
    var dictionary = 'abcdefghijklmnopqrstuvwxyz'
    var newWord = ''
    for (i = 0; i < kata.length; i++) {
        var huruf = ''
        for (j = 0; j < dictionary.length; j++) {
            if (dictionary[j] == kata[i]) {
                huruf += dictionary[j + 1]
            }
        }
        newWord += huruf
    }
    return newWord
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu