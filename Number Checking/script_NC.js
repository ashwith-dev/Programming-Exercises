const primeBtn = document.getElementById("prime");
const evenBtn = document.getElementById("even");
const armstrongBtn = document.getElementById("armstrong");
const palindromeBtn = document.getElementById("palindrome");
const sumBtn = document.getElementById("sum");
const reverseBtn = document.getElementById("reverse");

const input = document.getElementById("numberInput");
const output = document.getElementById("output");
const yesBox = document.getElementById("yes");
const noBox = document.getElementById("no");

function resetColors() {
  yesBox.style.backgroundColor = "black";
  noBox.style.backgroundColor = "black";
}

function resetOutputBox() {
  output.innerHTML = "";
}

function prime() {
    resetColors();

    let num = parseInt(input.value);

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break
        }
    }

   if (isPrime) {
    yesBox.style.backgroundColor = "lightgreen";
  } 
  else {
    noBox.style.backgroundColor = "lightcoral";
  }

  resetOutputBox();
}

primeBtn.onclick = prime;

function even() {
    resetColors();

    let num = parseInt(input.value);

    if (num % 2 === 0) {
        yesBox.style.backgroundColor = "lightgreen";
    }
    else {
        noBox.style.backgroundColor = "lightcoral"
    }
    
    resetOutputBox();
}

evenBtn.onclick = even;

function armstrong() {
  resetColors();
  let num = input.value;
  let power = num.length;
  let sum = 0;
  
  for (let i = 0; i < power; i++) {
    sum += num[i] ** power;
  }

  if (sum === Number(num)) {
    yesBox.style.backgroundColor = "lightgreen"
  }
  else {
    noBox.style.backgroundColor = "lightcoral"
  }

  resetOutputBox();
}

armstrongBtn.onclick = armstrong;

function palindrome() {
  resetColors();

  let num = input.value;
  let palNum = "";

  for (let i = 0; i < num.length; i++) {
    palNum += num[num.length - 1 - i]
  }

  if ( num === palNum) {
    yesBox.style.backgroundColor = "lightgreen";
  }
  else {
    noBox.style.backgroundColor = "lightcoral"
  }
  
  resetOutputBox();
}

palindromeBtn.onclick = palindrome;

function sum() {
  resetColors();

  let num = input.value;
  let total = 0;

  for ( i = 0; i < num.length; i++ ) {
    total += Number(num[i]);
  }
  
  output.innerText = total;

}

sumBtn.onclick = sum;

function reverse() {
  resetColors();

  let num = input.value;
  let revNum = "";

  for ( let i = 0; i < num.length; i++ ) {
    revNum += num[num.length - 1 - i]
  }

  output.innerText = revNum;

}

reverseBtn.onclick = reverse;