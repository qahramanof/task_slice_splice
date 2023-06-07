

let nums = [1, 2, 3];
let n = 9;

for (let i = 0; i < n; i++) {
  let sum = nums.slice(nums.length - 3).reduce((a, b) => a + b);
  nums.push(sum);
}

console.log(nums);