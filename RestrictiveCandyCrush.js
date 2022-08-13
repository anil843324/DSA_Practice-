function Reduced_String(k, s) {
  //code here
  let st = [];
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (st.length === 0) {
      st.push({ first: s[i], second: 1 });
    } else {
      if (st[st.length - 1].first === s[i]) {
        st.push({ first: s[i], second: st[st.length - 1].second + 1 });
        if (st[st.length - 1].second === k) {
          let x = k;

          while (x) {
            st.pop();
            x--;
          }
        }
      } else if (st[st.length - 1].first !== s[i]) {
        st.push({ first: s[i], second: 1 });
      }
    }
    
  }
  while(st.length!==0){
    ans+=st[st.length-1].first;
    st.pop()
 }

return  ans.split("").reverse().join("")
}

let k = 2;
let s = "geeksforgeeks";
let res = Reduced_String(k, s);

console.log(res);
