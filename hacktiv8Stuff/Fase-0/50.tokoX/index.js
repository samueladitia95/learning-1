function countProfit(shoppers) {
    let listBarang = [
        ["Sepatu Stacattu", 1500000, 10],
        ["Baju Zoro", 500000, 2],
        ["Sweater Uniklooh", 175000, 1],
    ];

    if (!shoppers.length) {
        return [];
    }

    let result = [];

    for (let i = 0; i < listBarang.length; i++) {
        result.push({
            product: listBarang[i][0],
            shoppers: [],
            leftOver: listBarang[i][2],
            totalProfit: 0,
        });
    }

    for (let i = 0; i < shoppers.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (shoppers[i].product === result[j].product) {
                if (shoppers[i].amount <= result[j].leftOver) {
                    result[j].shoppers.push(shoppers[i].name);
                    result[j].leftOver -= shoppers[i].amount;
                    result[j].totalProfit +=
                        shoppers[i].amount * listBarang[j][1];
                }
            }
        }
    }

    return result;
}

console.log(
    countProfit([
        { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
        { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
        { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
        { name: "Devi", product: "Baju Zoro", amount: 1 },
        { name: "Lisa", product: "Baju Zoro", amount: 1 },
    ])
);
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
console.log(
    countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);
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
