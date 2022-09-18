/*Runtime: 128 ms, faster than 17.33% of JavaScript online submissions for Minimum Size Subarray Sum.
Memory Usage: 45.9 MB, less than 81.75% of JavaScript online submissions for Minimum Size Subarray Sum.*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let i = 0;
    let sum = nums[i];
    let minLen = 0;
    
    //check if the first element is greater than equal to target because it cannot get shorter than that
    if(sum>=target){
        return 1;
    }
    
    //lets pass through the array once to see if the total is 
    for(let k = 1; k<nums.length; k++){
        sum += nums[k];
    }
    if(sum>=target){
        minLen = nums.length;
    }
    else
        return 0;
    
    //now we work with the sliding window
    let j = 0;
    sum = nums[i];
    
    for(j=1; j<nums.length; j++){
        //add the next element and check
        sum = sum + nums[j];
        while(sum>=target){ //as soon as the sum is less, stop shrinking window
            let currLen = j-i+1;
            if(minLen>currLen){
                minLen = currLen;
            }
            sum = sum - nums[i];
            i++;
            
        }
    }
    return minLen;
    
    
};
