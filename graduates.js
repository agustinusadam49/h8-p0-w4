function graduates (students) {
  // Code disini
  if (students.length !== 0) {
    var foxes = []
    var wolves = []
    var tigers = []
    var obj = {}
    for (i =0; i < students.length; i++) {
      // console.log(students[i]);
      if (students[i].class === 'foxes') {
        if (students[i].score > 75) {
          foxes.push(students[i])
          obj[students[i].class] = foxes
          delete students[i].class
        }
      } else if (students[i].class === 'wolves') {
        if (students[i].score > 75) {
          wolves.push(students[i])
          obj[students[i].class] = wolves
          delete students[i].class
        }
      } else if (students[i].class === 'tigers') {
        if (students[i].score > 75) {
          tigers.push(students[i])
          obj[students[i].class] = tigers
          delete students[i].class
        }
      }
    }

    console.log('')
    return obj
    
  } else {
    console.log('')
    return {}
  }
}

  
console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }
  
console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}