function arrFn() {
    return [1,2,3];
}

function objFn(){
    return {a: 20, c: 30, b: 50};
}
// var {a, b, c} = objFn();
// console.log(a, b, c);

var [a, b, c] = arrFn();//[1,2,3];
console.log(a,b,c);
var x = 10, y = 20;
[x,y] = [y,x];