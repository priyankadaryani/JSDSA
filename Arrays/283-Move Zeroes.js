/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//count all the zeroes, 
//move the elements to the left one by one.
var moveZeroes = function(nums) {
    
    
    let x = 0;
    let y = 0;
    
    while(y<nums.length){
        if(nums[y]!=0){
            nums[x]=nums[y];
            nums[y]=( x==y ? nums[y] : 0);
            y++;
            x++;
        }
        else{
            y++;
        }
    }
    
    return x; //or x+1?
    
};


// prev/alternate solution:

// let i = 0;
//     // move the elements to the right
//     while(i<nums.length){ 
//         let j = i+1;
        
//         if(j>nums.length-1)
//             break;
        
//         while(nums[i]==0){
//             if(nums[j]!=0){
//                 nums[i]=nums[j];
//                 nums[j]=0;
                
            
//             }
//             else {
//                 j++;
//                 if(j>nums.length-1) //4
//                     return nums;
//             }
            
//         }
        
//         i++;
//     }
    
