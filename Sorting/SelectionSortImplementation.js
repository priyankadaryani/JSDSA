const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let index = 0;
  let curr = 0;
  for(let i = 0; i<array.length-1; i++){
    let curr = array[i];
    for(let j = i+1; j<array.length; j++){
      if(array[j]<curr){
        curr = array[j];
        index = j;
      }
    }
    let temp = array[i];
    array[i] = curr;
    array[index] = temp;
    
  }
}

selectionSort(numbers);
console.log(numbers);
