function longestUniqueSubsttr(str) {
  //code here
  let end = 0;
  let start = 0;
  let maxlength = 0;

  if (!str) {
    return 0;
  }
  //  createing set fo js

  const uniquechar = new Set();

  while (end < str.length) {
    if (!uniquechar.has(str[end])) {
      uniquechar.add(str[end]);
      end++;
      maxlength = Math.max(maxlength, uniquechar.size);
    } else {
      uniquechar.delete(str[start]);
      start++;
    }
  }

  return maxlength;
}

let res = longestUniqueSubsttr("abcabcbb");

console.log(res);
