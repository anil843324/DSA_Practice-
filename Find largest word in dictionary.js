let res = ''
function findLongestWord(s, d) {
  
  //code here
  d.sort();
  for (let c of d) {
    check(c, s);
  }
  return res;


}

function check(d, s) {
  let i = 0;
  let j = 0;
  while (i < d.length && j < s.length) {
    if (d[i] === s[j]) {
      i++;
      j++;
    }
    else {
      j++;
    }

  }
  if (i === d.length && res.length < d.length) {
    res = d;
  }
}


// Driver program
let dict = ["ale", "apple", "monkey", "plea"];
let str = "abpcplea";
 console.log(findLongestWord(str,dict));




























