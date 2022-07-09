var merge = function(nums1, m, nums2, n) {
    
    
    
    
    let idx1 = m - 1, idx2 = n - 1, idx3 = m + n - 1;
     
     
   while (idx2 >= 0) {
     nums1[idx3--] = nums1[idx1] > nums2[idx2]
       ? nums1[idx1--]
       : nums2[idx2--];
   }
 
     return nums1;
    
      
     
 };


 let nums1 = [1,2,3,0,0,0]
 
  let m = 3
  let nums2 = [2,5,6]
  let n = 3


 let res=merge(nums1,m,nums2,n)

 console.log(res)