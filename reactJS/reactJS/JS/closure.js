function calc(a, b){
    return function(op){
        console.log(op);
        switch(op){
            case 'sum':
                return a+b
                break;
            case 'sub':
                return a-b
        }
    }
}
var part = calc(10, 20);
part('sub');
//console.log(part('sub'));

