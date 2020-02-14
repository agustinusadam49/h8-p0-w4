function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var data = ["penumpang", "naikDari", "tujuan", "bayar"]
    var dataPenumpang = []
    var hargaPerRute = 2000
    for (i = 0; i < arrPenumpang.length; i++) {
        var obj = {}
        for (j = 0; j < data.length; j++) {
            if (data[j] === "bayar") {
                var indexNaik = 0
                for (idx = 0; idx < rute.length; idx++) {
                    if (rute[idx] === arrPenumpang[i][1]) {
                        indexNaik += idx
                    }
                }

                var num = indexNaik;
                var count = 0;
                for (idx = 0; idx < rute.length; idx++) {
                    if (rute[num] === arrPenumpang[i][2]) {
                        var hargaAkhir = count * hargaPerRute
                    } else {
                        num ++
                        count ++
                    }
                }
                obj[data[j]] = hargaAkhir
            } else {
                obj[data[j]] = arrPenumpang[i][j]
            }
        }
        dataPenumpang.push(obj)
    }

    return dataPenumpang
}
  
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
