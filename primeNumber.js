

// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 


function primeNumber (isPrime) {
    let prime = 0;
    for ( let i = 2; i<isPrime; i++) {
        if (isPrime % i == 0) {
             prime ++
        }
    }
    if ( prime == 0) {
        return "This is prime Number"
    }
    else {
        return "this is not prime number"
    }   
}

let number = primeNumber(141);
console.log(number);