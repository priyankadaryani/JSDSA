const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let i = 0;
  let len = numbers.length;
  for(let i = 0; i<numbers.length; i++){
    for(let j = 0; j<len-1; j++){
      if(numbers[j]>numbers[j+1]){
        let temp = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
      }
    }
    len--;
  }
}

bubbleSort(numbers);
console.log(numbers);

// so you don't even need the len-- and can just make the condition j<len 
// because it will stop once it encounters the last element you sorted as it is larger than the current element you have
