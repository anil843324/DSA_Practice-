function isValid(s) {
  //code here

  
    const myArray = s.split(".");

    let [n1, n2, n3, n4] = myArray;

     if((n1===undefined || n2===undefined || n3===undefined || n4===undefined) ||  (n1.length===0 || n2.length===0 || n3.length===0 || n4.length===0 ) || (n1.length>3 || n2.length>3 || n3.length>3 || n4.length>3    ) ){
        return 0;
     }
     if (
      Number(n1) <= 255 &&
      Number(n1) >= 0 &&
      Number(n2) <= 255 &&
      Number(n2) >= 0 &&
      Number(n3) <= 255 &&
      Number(n3) >= 0 &&
      Number(n4) <= 255 &&
      Number(n4) >= 0 
     
    ) {
      return 1;
    }

    return 0;
   
}

let str = "0000.0000.0000.0000";
let res = isValid(str);

console.log(res);
