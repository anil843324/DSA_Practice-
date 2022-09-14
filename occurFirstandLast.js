function indexes(v, x) {
  // code here

  // first occur
  let ansf = -1;
  // last occur
  let ansl = -1;
  let l = 0;
  let h = v.length - 1;

  while (l <= h) {
    let mid = l + Math.floor((h - l) / 2);
    if (v[mid] === x) {
      ansf = mid;
      h = mid - 1;
    } else if (v[mid] > x) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  // second occur
   l = 0;
   h = v.length - 1;
  while (l <= h) {
    let mid = l + Math.floor((h - l) / 2);
    if (v[mid] === x) {
      ansl = mid;
      l = mid + 1;
    } else if (v[mid] > x) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return [ansf, ansl];
}

9


let arr=[1 ,3 ,5 ,5 ,5 ,5 ,67 ,123, 125]
let x=5;
 console.log(indexes(arr,x)) 