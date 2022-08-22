function Anagrams(n, string_list) {
  // code here

  let mp = new Map();

  for (let i = 0; i < n; i++) {
    let temp = string_list[i].split("").sort();
    temp = temp.join("");

    if (mp.size === 0) {
      mp.set(temp, [string_list[i]]);
    } else {
      if (mp.has(temp)) {
        // let temp2 = ;
        // temp2.puhs(mp.get(temp));
        mp.set(
            temp ,
            [...mp.get(temp), string_list[i]],
          );
      } else {
        mp.set(temp, [string_list[i]]);
      }
    }
  }
    console.log(mp)
      let ans=[]
 for( const [key,value] of mp ){
 
      ans.push(value)
 }
  return ans;

}

let N = 4;
let words = ['bfj' ,'tro', 'ffa', 'rph'];
let res=Anagrams(N, words);

 console.log(res);
