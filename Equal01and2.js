const EqualZeroOneTWo = (s) => {
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    let p = "";

    for (let j = i; j < s.length; j++) {
      p = p + s[j];
     

      if (p.length === 3) {
            let mp=new Map()
             for(let i=0;i<p.length;i++){
                  mp.set( Number(p[i]),1 )
             }
               let newarr=[0,1,2]
               let c=0;
             for(let j=0;j<p.length;j++){
                 if(mp.has(Number(newarr[j]))){
                    c++;
                 }
             } 
             if(c===3){
                count++;
             }
    
      }
    }
  }

  return count;

};

let str = "11100022";

let res = EqualZeroOneTWo(str);

console.log(res);
