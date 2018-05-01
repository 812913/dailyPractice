// map filter reduce
var arr=[1,2,3];
var arr1=arr.map(function(item,index,arr){
    return item*2;
})
console.log(arr1);
var arr2=arr.map(item=>item*2);
console.log(arr2);

var arr3=arr.filter((item)=>item%2==1);
console.log(arr3);

var sum=arr.reduce((prev,cur)=>prev+cur);
console.log(sum);

var multiply=arr.reduce((prev,cur)=>prev*cur);
console.log(multiply);


// let const
//从此以后不要用var，看到ver先改成let，如果不需要修改，就再改为const

//模板字符串 ``
const me={
    name:'lwf',
    age:18,
    sex:'F'
}
console.log(`My name is ${me.name},my age is $(me.age)`);

//for...of
//使用for...of遍历具有iterator接口的数据结构，数组、字符串、Set和Map结构、类似数组的对象（arguments、DOM NodeList）、Generator对象、字符串
var iterator=[1,2,3];
for(const value of iterator){
    console.log(value);//1,2,3
}

//箭头函数
var materials=['lwf','li','lee'];
console.log(materials.map(function(material){
    return material.length;
}));

console.log(materials.map((material)=>{
        return material.length
    }
));

console.log(materials.map((material)=>material.length));

//默认参数值,没有值或为undefined被传入时使用
function multiplyFn(a,b=1){
    return a+b;
}
console.log(multiplyFn(1,2));
console.log(multiplyFn(1));
console.log(multiplyFn(1,null));

//rest参数,将不定量的参数表示为一个数组
function f(...[a,b,c]){
    return a+b+c;
}
console.log(f(1));//NaN
console.log(f(1,2,3));//6
console.log(f(1,2,3,4));//6

//解构赋值,可用于数组、对象、字符串、数值、布尔、函数参数
var a,b,rest;
[a,b,...rest]=[1,2,3,4,5];
console.log(a,b,rest);//1 2 [3,4,5]

//class

//Promise

