
// expected output   1 2 Fizz 4 Buzz 6 7 8 Fizz Buzz

/*
All natural numbers divisible by 3 and not by 5 are called as "Fizz" while those divisible by 5 and not by 3 are called as "Buzz". If any number is divisible by both it's called as "FizzBuzz". Rest all natural numbers remain in their original form.
*/
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