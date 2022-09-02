// 1. Two-Sum
// https://leetcode.com/problems/two-sum/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
// Hash Table solution:
    
    let map = {}; 
    
    let ans = [];
    for(let i=0; i<nums.length; i++){
        num = target-nums[i];
        if(map[num]!=undefined){ //check if we have the target-current number value in map already
            ans.push(i);
            ans.push(map[num]);
            return ans;
        }
        else {
            map[nums[i]] = i;  //store the number and the index as a key-value pair
        }
    }
    
    
    
    
    
//      Brute force solution:
//     let i=0;
//     while(i<=nums.length-2){
//         let j=i+1;
//         while(j<=nums.length-1){
//             if(nums[j] == target-nums[i]){ //6-3=3
//                 let ans = [i, j];
//                 console.log(ans);
//                 return ans;
//             }
//             j++;
//         }  
//         i++;
//     }
    
};
