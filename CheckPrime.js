
const checkPrime = (n) => {

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;

}

let n = 10;

if (checkPrime(n)) {

    console.log("Yes")
} else {

    console.log("No")
}