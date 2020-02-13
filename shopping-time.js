function shoppingTime(memberId, money) {
    // you can only write your code here!
    
    // barang SALE
    var onSale = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]
    
    // uang awal pembeli
    var uangAwal = money

    // Sortir barang dari yang termahal
    for (i = 0; i < onSale.length; i++) {
		for (j = 0; j < onSale.length; j++) {
			// console.log(list[j])
			if (onSale[j][1] < onSale[i][1]) {
				var temp = onSale[j]
				onSale[j]= onSale[i] 
				onSale[i] = temp
			}
		}
    }
    
    // Cek apa saja barang yang bisa dibeli berdasarkan jumlah (input money)/uang yang ada 
	var newArr = []
	var sisaUang = 0;
	for (j = 0; j < onSale.length; j++) {
        if (money >= onSale[j][1]) {
            newArr.push([onSale[j][0]])
            sisaUang = money - onSale[j][1]
            money -= onSale[j][1]
        }
	}
    
    // buat object untuk menyimpan daftar barang2 yang telah dibeli
	var data = {}
    for (i = 0; i < newArr.length; i++) {
        if (data[newArr[i][0]] == null) {
            data[newArr[i][0]] = 1
        } else {
            data[newArr[i][0]]++
        }
    }
    
    // ubah daftar barang2 ke dalam bentuk array multidimensi
    var belanjaan = Object.entries(data)
    
    // Object untuk menyimpan semua data pembelian
    var obj = {
        memberId: memberId,
        money: uangAwal,
        listPurchased: [],
        changeMoney: sisaUang
    }

    // Memasukan daftar barang yang telah dibeli ke dalam obj.listPurchased
    for (idx = 0; idx < belanjaan.length; idx++) {
        obj.listPurchased.push(belanjaan[idx][0])
    }
    
    // Cek kondisi untuk dapat melakukan pembelian 
    // Jika semua syarat terpenuhi maka akan menampilkan object berisi seluruh data pembelian secara lengkap
    if (!obj.memberId) {
        var message = 'Mohon maaf, toko X hanya berlaku untuk member saja'
        return message
    } else if (uangAwal < onSale[0][1] && uangAwal < onSale[1][1] && uangAwal < onSale[2][1] && uangAwal < onSale[3][1] && uangAwal < onSale[4][1]) {
        var message = 'Mohon maaf, uang tidak cukup'
        return message
    } else {
        return obj
    }
}
  
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
