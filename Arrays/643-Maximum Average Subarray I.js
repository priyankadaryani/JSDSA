/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i = 0;
    let sum = 0;
    while(i<k){
        sum = sum+nums[i];
        i++;
    }
    let maxavg = sum/k;
    i = 1;
    while(i<=nums.length-k+1){ //total number of iterations - O(n)
        let j = i+k-1;
        sum = sum - nums[i-1] + nums[j];
        let avg = sum/k;
        if(avg>maxavg){
            maxavg = avg;
        }
        
        i++;
    }
    return maxavg;
};
