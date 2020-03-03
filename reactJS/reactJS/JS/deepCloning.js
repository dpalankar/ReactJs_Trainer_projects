// var arr = [10, 20, 30];
// var arr_temp = arr.slice();
// arr_temp[2] = 300;
// console.log("arr",arr);

var obj = {name: "Akash", age: 33};
var tempObj = {}
Object.assign(tempObj, obj)
tempObj.name = "Akshay";
console.log(tempObj);
console.log(obj);
