/**
 * @param {string} s
 * @return {number}
 */

/*Runtime: 71 ms, faster than 80.97% of JavaScript online submissions for Length of Last Word.
Memory Usage: 42.7 MB, less than 6.72% of JavaScript online submissions for Length of Last Word.*/
var lengthOfLastWord = function(s) {
    
    
    let count = 0;
    s = s.trim();
    console.log(s);
    let i = s.length-1;
    

    while(s[i]!=" " && i>=0){
            count++;
            i--;
        }
            
    
    return count;
};



/* Runtime: 123 ms, faster than 5.47% of JavaScript online submissions for Length of Last Word.
Memory Usage: 42.3 MB, less than 31.40% of JavaScript online submissions for Length of Last Word. */

var lengthOfLastWord = function(s) {
    if (!s.length) {
        return 0;
    };
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
};



/* Runtime: 113 ms
Memory Usage: 42 MB */

var lengthOfLastWord = function(s) {
    let count = 0;
    let lastCount = 0;
    let i = s.length-1;
    
    if(s[i]===" "){
        while(s[i]===" " && i>=0){
            i--;
        }
    }
    
    if(s[i]!=" "){
        while(s[i]!=" " && i>=0){
            count++;
            i--;
        }
            
    }
    
    return count;
};


