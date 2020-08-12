function changeMe(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i][3]) {
          arr[i].push("Invalid Birth Year")
        } else {
          arr[i][3] = 2020 - arr[i][3];
        }

        let idObject = {
          "firstName" : arr[i][0],
          "lastName" : arr[i][1],
          "gender" : arr[i][2],
          "age" : arr[i][3]
        };
        
        console.log(`${arr[i][0]} ${arr[i][1]}:\n`, idObject);
    }
}

// TEST CASES
changeMe([
    ["Christ", "Evans", "Male", 1982],
    ["Robert", "Downey", "Male"],
]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 38 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""