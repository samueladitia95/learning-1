const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));

function add(num1, num2) {
  let total = 1;
  for(let i = 1; i <= 10; i++) {
    total += num1 + num2;
  }
  return total;
}

console.log(add(2, 3));