function highestScore (students) {
  // Code disini
  if (students.length !== 0) {
    var foxes = []
    var wolves = []
    var tigers = []
    for (i =0; i < students.length; i++) {
      // console.log(students[i]);
      if (students[i].class === 'foxes') {
        foxes.push(students[i])
      } else if (students[i].class === 'wolves') {
        wolves.push(students[i])
      } else if (students[i].class === 'tigers') {
        tigers.push(students[i])
      }
    }
  
    var arrObj = []
    // Sorting foxes
    if (foxes.length !== 0) {
      for (var i = 0; i < foxes.length; i++) {
        for (var j = i + 1; j < foxes.length; j++) {
          if (foxes[j].score > foxes[i].score) {
            var temp = foxes[j];
            foxes[j] = foxes[i];
            foxes[i] = temp;
          }
        }
      }
      arrObj.push(foxes[0])
    }
  
    // Sorting wolves
    if (wolves.length !== 0) {
      for (var i = 0; i < wolves.length; i++) {
        for (var j = i + 1; j < wolves.length; j++) {
          if (wolves[j].score > wolves[i].score) {
            var temp = wolves[j];
            wolves[j] = wolves[i];
            wolves[i] = temp;
          }
        }
      }
      arrObj.push(wolves[0])
    }
  
    // Sorting tigers
    if (tigers.length !== 0) {
      for (var i = 0; i < tigers.length; i++) {
        for (var j = i + 1; j < tigers.length; j++) {
          if (tigers[j].score > tigers[i].score) {
            var temp = tigers[j];
            tigers[j] = tigers[i];
            tigers[i] = temp;
          }
        }
      }
      arrObj.push(tigers[0])
    }

    var obj = {}
    for (i = 0; i < arrObj.length; i++) {
      // console.log(arrObj[i].class);
      if (obj[arrObj[i]] == null) {
        if (arrObj[i].class == 'foxes') {
          obj[arrObj[i].class] = {name: arrObj[i].name, score: arrObj[i].score}
        } else if (arrObj[i].class == 'wolves') {
          obj[arrObj[i].class] = {name: arrObj[i].name, score: arrObj[i].score}
        } else if (arrObj[i].class == 'tigers') {
          obj[arrObj[i].class] = {name: arrObj[i].name, score: arrObj[i].score}
        }
      }
    }

    console.log('');
    return obj
    
    
  } else {
    console.log('')
    return {}
  }
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }
  
  
console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

  
console.log(highestScore([])); //{}