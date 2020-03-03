a = 10;
function test(){
    console.log(this);//obj
    console.log(this.a);//undefined
}
var obj = {
    test: test,
    a: 20
}
test();
obj.test();//