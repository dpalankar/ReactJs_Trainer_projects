var calc = (function(a,b){
    return function(op){
        switch(op){
            case 'sum':
                return a+b;
            case 'sub':
                return a-b;
        }
    }
}(20, 10));
console.log(calc('sum'));
//IIFE - Immediately Invoked Function expression