function cariModus(arr) {
    // you can only write your code here!
    let data = {}
    for (i = 0; i < arr.length; i++) {
        if (data[arr[i]] == null) {
            data[arr[i]] = 1
        } else {
            data[arr[i]]++
        }
    }

    var count = 0
    for (key in data) {
        count++
    }

    var temp = []
    for (var key in data) {
        if (data[key] > 1) {
            temp.push(Number(key))
        }
    }


    if (count > 1) {
         if (temp.length > 0) {
            return temp[0]
        } else {
            return -1
        }
    } else if (count <= 1) {
        return -1
    }
}
  
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1 
