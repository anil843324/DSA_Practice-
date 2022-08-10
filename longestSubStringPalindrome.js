function longestSubstring(S) {
  //code here

  let ans = 0;

  for (let i = 0; i < S.length; i++) {
    let p = "";

    for (let j = i; j < S.length; j++) {
      p = p + S[j];
      let mp = new Map();

      for (let k = 0; k < p.length; k++) {
        if (mp.has(p[k])) {
          mp.set(p[k], mp.get(p[k]) + 1);
        } else {
          mp.set(p[k], 1);
        }
      }
      let count = 0;
      for (const [key, value] of mp) {
        if (value === 1) {
          count++;
        } else if (count === 2) {
          break;
        }
      }
      if (count === 1) {
        ans = Math.max(ans, p.length);
      }else if(count===0){
        ans = Math.max(ans, p.length);
      }
    }
  }

   console.log(ans)
}


longestSubstring("adbabd")