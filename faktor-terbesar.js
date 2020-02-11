function fpb(angka1, angka2) {
    // you can only write your code here!
    function angkaTerbesar(angka_1, angka_2) {
        if (angka_1 > angka_2) {
            return angka_1
        } else {
            return angka_2
        }
    }
    var temp = []
    var angka = angkaTerbesar(angka1, angka2)
    for (i = 1; i < angka; i++) {
        if (angka1 % i == 0 && angka2 % i == 0 ) {
            temp.push(i)
        }
    }
    return temp[temp.length - 1]
}
  
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1