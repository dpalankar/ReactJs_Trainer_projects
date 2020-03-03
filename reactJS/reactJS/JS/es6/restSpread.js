// function test(x,y,z) {
// 	console.log( x, y, z );
// }
// test( ...[1,2,3,4] );//spread 

// var a = [2,3,4];
// var b = [ 1, ...a, 5 ];
// console.log( b ); // [1,2,3,4,5]///spread

// function foo(x, y, ...z) {//rest/gather
//     console.log( x, y, z );//1,2,[3,4,5]
//     }
// foo( 1, 2, 3, 4, 5 );

// function test(...args){
//     console.log(args);//[30, 40, 50]
// }

// test(30, 40, 50);
function test(...args){
    console.log(args);
}
test(20, 30, 40);