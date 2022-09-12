// Grokking the Coding Interview: Patterns for Coding Questions
// Sliding Window Pattern
const max_sub_array_of_size_k = function(k, arr) {
  let sum = 0;
  for(let i=0; i<k; i++){
    sum += arr[i];
  }
  let maxSum = sum;
  i = 1;
  while(i<=arr.length-k){
    sum = sum - arr[i-1] + arr[i+k-1];
    i++;
    maxSum = sum > maxSum ? sum : maxSum ;
  }
  // TODO: Write your code here
  return maxSum;
};
