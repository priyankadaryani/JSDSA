// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  //base case is factorial of 1
  let answer = 1;
  if(number == 1){
    return 1;
  }
  answer = number * findFactorialRecursive(number-1);
  return answer;
}

function findFactorialIterative(number) {
  //code here
  //simple for loop
  let answer = 1;
  for(let i=1; i<=number; i++){
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursive(3));
