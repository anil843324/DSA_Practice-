/*

Binary Representation to Number

Sample Input
00000000000000000000000000000111
Sample Output
7


*/



const  binaryToNumber=(str,len)=>{
    // Function to convert binary to decimal
     let  number = 0
     
     let   base = 1
    
    for (let i = len - 1; i >= 0; i--) {
        if (str[i] === '1'){
            number += base;
        }
           
        base = base * 2;
    }
    return number;
}

 let str="101"
 let len=str.length;
 console.log(binaryToNumber(str,len))
 