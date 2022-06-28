
// expected output   1 2 Fizz 4 Buzz 6 7 8 Fizz Buzz
const FizzBuzz = (n) => {

    let p = ''
    for (let i = 1; i <= n; i++) {

        if (i%3 === 0 && i%5!==0) {
            p = p + "Fizz" + " "
        } else if (i%5 === 0 && i%3 !== 0 ) {
            p = p + "Buzz" + " "
        }else if( i%3 === 0 && i%5=== 0 ){
            
            p = p + "FizzBuzz" + " "
        }
        else {
            p = p + i + " ";
        }
    }

   console.log(p)

}

let n = 10;
FizzBuzz(n)