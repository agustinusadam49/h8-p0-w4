function cariMedian(arr) {
    // you can only write your code here!
    low = 0
    high = arr.length - 1
    median = (low + high) / 2

    if (arr.length % 2 == 0) {
        var panjangArray = arr.length - 1
        var median1 = (low + panjangArray - 1) / 2
        var median2 = median1 + 1
        var newMedian = (arr[median1] + arr[median2]) / 2
        return newMedian
    } else if (arr.length % 2 !== 0) {
        return arr[median]
    }
}
  
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5