let number = prompt("Enter your number: ");
let primeNum = [];

function isPrime(number) {
  for (let i = 2; i < number; i++) if (number % i === 0) return false;

  return true;
}

function print(number) {
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primeNum.push(i);
    }
  }
}

print(number);

let numOfPrime = primeNum.length;
var sum = 0;

for (i = 0; i < numOfPrime; i++) {
  sum += primeNum[i];
}

console.log(sum);