function checkAB(num) {
    // you can only write your code here!
    var indexA = [];
    var indexB = [];
    for (i = 0; i < num.length; i++) {
        if (num[i] == 'a') {
            indexA.push(i)
        } else if (num[i] == 'b') {
            indexB.push(i)
        }
    }
    
    if (num[indexA[0]] === 'a' && num[indexA[0] + 4] === num[indexB[0]]) {
        return true
    } else if (num[indexB[0]] === 'b' && num[indexB[0] + 4] === num[indexA[0]]) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false