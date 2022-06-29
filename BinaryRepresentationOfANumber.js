//Write a program to print Binary representation of a given number.

/*
Sample Input
N = 7
Sample Output
00000000000000000000000000000111

*/

 const Binary=(n)=>{

        let arr=[];
         while(n){

              let rem=n%2;
              n=Math.floor(n/2);
              arr.push(rem);

         }
         arr.reverse()
         
         return arr.join(" ")

 }
 let n=10;
 console.log(Binary(n))
 














