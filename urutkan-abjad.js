function urutkanAbjad(str) {
    // you can only write your code here!
    var alphabet = 'abcdefghijklmnopqrstuvwxzy'
    var temp = [];
    for (i = 0; i < alphabet.length; i++) {
        for (j = 0; j < str.length; j++) {
            if (str[j] == alphabet[i]) {
                temp.push(str[j])
            }
        }
    }
    var hasil = '';
    for (j = 0; j < temp.length; j++) {
        hasil += temp[j]
    }
    return hasil
}
  
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
