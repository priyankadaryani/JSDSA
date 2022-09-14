
//recursive solution - Runtime: 179 ms, faster than 9.13% of JavaScript online submissions
var fib = function(n) {
    if(n < 2){
        return n;
    }
    
    return fib(n-1) + fib(n-2);
};

//iterative solution - Runtime: 99 ms, faster than 52.33% of JavaScript online submissions
var fib = function(n) {
    if(n === 0){
        return 0;
    }
    
    if(n === 1){
        return 1;
    }
    
    let a = 0;
    let b = 1;
    
    for(let i = 2; i<=n; i++){
        let temp = a+b;
        a = b;
        b = temp;
    }
    
    return b;
};
