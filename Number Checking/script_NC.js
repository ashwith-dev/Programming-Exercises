const primeBtn = document.getElementById("prime");
const evenBtn = document.getElementById("even");
const armstrongBtn = document.getElementById("armstrong");
const palindromeBtn = document.getElementById("palindrome");
const sumBtn = document.getElementById("sum");
const reverseBtn = document.getElementById("reverse");
const factorsBtn = document.getElementById("factors");

const input = document.getElementById("numberInput");
const output = document.getElementById("output");


function prime() {

    let num = parseInt(input.value);

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break
        }
    }

   if (isPrime) {
    output.innerHTML = `${num} is a Prime Number`;
  } 
  else {
    output.innerHTML = `${num} is not a Prime Number`;
  }

}

primeBtn.onclick = prime;

function even() {

    let num = parseInt(input.value);

    if (num % 2 === 0) {
        output.textContent = `${num} is a Even Number`;
    }
    else {
        output.textContent = `${num} is not a Even Number`;
    }
    
}

evenBtn.onclick = even;

function armstrong() {
  
  let num = input.value;
  let power = num.length;
  let sum = 0;
  
  for (let i = 0; i < power; i++) {
    sum += num[i] ** power;
  }

  if (sum === Number(num)) {
    output.textContent = `${num} is a Armstrong Number`;
  }
  else {
    output.textContent = `${num} is a not Armstrong Number`;
  }

}

armstrongBtn.onclick = armstrong;

function palindrome() {
 

  let num = input.value;
  let palNum = "";

  for (let i = 0; i < num.length; i++) {
    palNum += num[num.length - 1 - i]
  }

  if ( num === palNum) {
    output.textContent = `${num} is a Palindrome Number`;
  }
  else {
    output.textContent = `${num} is not a Palindrome Number`;
  }
  
}

palindromeBtn.onclick = palindrome;

function sum() {
  

  let num = input.value;
  let total = 0;

  for ( i = 0; i < num.length; i++ ) {
    total += Number(num[i]);
  }
  
  output.innerText = total;

}

sumBtn.onclick = sum;

function reverse() {
  

  let num = input.value;
  let revNum = "";

  for ( let i = 0; i < num.length; i++ ) {
    revNum += num[num.length - 1 - i]
  }

  output.innerText = revNum;

}

reverseBtn.onclick = reverse;

function factors() {

  let num = Number(input.value);
  let allFactors = [];

  for ( let i = 1 ; i <= num ; i++ ) {
    if ( num % i === 0 ) {
      allFactors.push(i);
    }
  }
  let factorsString = allFactors.toString();

  output.innerText = `The Factors of ${num} are -- ${factorsString}`
}

factorsBtn.onclick = factors;