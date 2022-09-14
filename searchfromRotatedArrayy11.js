var search = function (nums, target) {
  let low = 0;

  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] == target) {
      return true;
    }

    if (nums[mid] > nums[low]) {
      if (nums[mid] > target && nums[low] <= target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (nums[mid] < nums[low]) {
      if (nums[mid] < target && nums[low] > target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      low++;
    }
  }

  return false;
};
let arr = [1, 0, 1, 1, 1];
let target = 0;
console.log(search(arr, target));
