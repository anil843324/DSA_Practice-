var productExceptSelf = function (nums) {
  // i am using divion operator this is not good solution
  let ans = [];

  let product = nums.reduce((prev, curr) => prev * curr, 1);

  let pr = 1;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      pr *= nums[i];
    } else if (count >= 1) {
      pr *= nums[i];
    } else {
      count++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      ans.push(pr);
    } else {
      ans.push(Math.floor(product / nums[i]));
    }
  }

  return ans;
};

let arr = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(arr));
