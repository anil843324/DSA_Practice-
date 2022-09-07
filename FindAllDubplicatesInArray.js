/** Time: O(N) Space: O(1) => result array is not considered as extra space
  * please note that all the nums are positive, 
  * and for array of number[1, 2, 3, 4, 5]  => postion(index) in array is 0, 1, 2, 3, 4
  * loop through nums, find the postion of the number and mark that postion negative
  * if the same number exist in the loop, the position for that number will already be negative, which means its duplicated, so push it to result */


 var findDuplicates = function(nums) {
    let result = []
    for(let i =0; i< nums.length;i++){
       let position =  Math.abs(nums[i]) - 1;
       if(nums[position] < 0) result.push(Math.abs(nums[i]))
       else nums[position] = -1 * nums[position]
    }

    return result
};
let nums = [4,3,2,7,8,2,3,1]
 console.log(findDuplicates(nums))

//Output: [2,3]