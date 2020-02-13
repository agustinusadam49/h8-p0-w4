function changeMe(arr) {
    // you can only write your code here!
    var data = ['firstName', 'lastName', 'gender', 'age']
    var num = 1
    var currentYear = 2020
    for (i = 0; i < arr.length; i++) {
        var obj = {}
        for (j = 0; j < data.length; j++) {
            obj[data[j]] = arr[i][j];
        }

        if (obj.age) {
            obj.age = currentYear - obj.age
        } else {
            obj.age = 'Invalid Birth year'
        }
        console.log(`${num}. ${obj.firstName} ${obj.lastName}:`)
        console.log(obj)
        console.log(' ')
        num += 1
    }
}
  
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""