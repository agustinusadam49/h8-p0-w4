function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    var obj = [
        {
            product: 'Sepatu Stacattu', 
            shoppers: [], 
            leftOver: 0, 
            totalProfit: 0 
        }, 
        {
            product: 'Baju Zoro', 
            shoppers: [], 
            leftOver: 0, 
            totalProfit: 0
        }, 
        {
            product: 'Sweater Uniklooh', 
            shoppers: [], 
            leftOver: 0, 
            totalProfit: 0
        }
    ]
    
    if (shoppers.length !== 0) {

        for (i = 0; i < obj.length; i++)  {
            obj[i].leftOver = listBarang[i][2]
        }

        for (j = 0; j < shoppers.length; j++) {
            if (shoppers[j].product === 'Sepatu Stacattu' && shoppers[j].amount <= obj[0].leftOver) {
                obj[0].shoppers.push(shoppers[j].name)
                obj[0].leftOver -= shoppers[j].amount
                obj[0].totalProfit += listBarang[0][1] * shoppers[j].amount
            } else if (shoppers[j].product === 'Baju Zoro' && shoppers[j].amount <= obj[1].leftOver) {
                obj[1].shoppers.push(shoppers[j].name)
                obj[1].leftOver -= shoppers[j].amount
                obj[1].totalProfit += listBarang[1][1] * shoppers[j].amount
            } else if (shoppers[j].product === 'Sweater Uniklooh' && shoppers[j].amount <= obj[2].leftOver) {
                obj[2].shoppers.push(shoppers[j].name)
                obj[2].leftOver -= shoppers[j].amount
                obj[2].totalProfit += listBarang[2][1] * shoppers[j].amount
            }
        } 

        return obj

    } else {
        var emptyArr = []
        return emptyArr
    }
    
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
