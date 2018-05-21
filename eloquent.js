// Eloquent JavaScript

// Minimum

function min(1, 5) {
   if (1 < 5) {
   return 1;
  }  else if (1 > 5) {
      return 5;
 }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
// Recursion

function isEven(N) {
    if (N === 1) {
      return false;
    } else if (N === 0) {
      return true;
    } else {
      return is Even(N - 2);
    }
}
console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??

// Bean Counting

function countBs(str) {
    var count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == target) count++;
    }
    return count;
}
function countChar(str, target) {
    var count = 0;
    for (i = 0; i <str.length; i++) {
        if (str[i] == target) count++
    }
    return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4