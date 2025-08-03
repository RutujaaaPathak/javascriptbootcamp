// function greet(name,age)
// {
//     let message = `Hello , my name is ${name}! and my age is ${age}`;
//     return message;
// }

// const greeting = greet("shreya",20);
// console.log(greeting);

// let counter = 0;
// while(counter<3)
// {
//     console.log(`loop iteration ${counter}`);
//     counter++;
// }
// console.log("while loop done*****");

// const fruits = ["mango","apple","banana"];
// for(i=0;i<fruits.length;i++)
// {
//     const fruit=fruits[i];
//     console.log(`${fruit} is found at ${i}`);
// }

// let temp = 26;
// if (temp>30)
// {
//     console.log("its a hot day");
// }
// else if (temp>20)
// {
//     console.log("pleasant day");
// }
// else
// {
//     console.log("chill day");
// }

// let sum = 0;

// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }

// console.log("Sum:", sum);

// let a = 0, b = 1;
// let sum = 0;

// while (a < 4000000) {
//     if (a % 2 === 0) {
//         sum += a;
//     }
//     let next = a + b;
//     a = b;
//     b = next;
// }

// console.log("Sum of even Fibonacci numbers under 4 million:", sum);


// Function to check if a number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) 
  {
    if (n % i === 0) return false;
  }
  return true;
}

// Check from 7654321 down to 1234567
for (let i = 7654321; i >= 1234567; i--) {
  let str = i.toString();
  if (str.includes('0')) continue; // skip if it contains 0
  let digits = new Set(str);

  // check if it's 7-digit pandigital (uses 1–7 once)
  if (digits.size === 7 && [...digits].sort().join('') === '1234567') {
    if (isPrime(i)) {
      console.log("Largest n-digit pandigital prime is:", i);
      break;
    }
  }
}
