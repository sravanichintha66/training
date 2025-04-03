// function add(num1,num2){
//     return num1+num2
// }
// let value=add(10,12);
// console.log(value)

// function greet(name){
//     return "Hello,"+name;
// }
// console.log(greet("Sravani"))

// const add=(a,b)=>a+b;
// let value=add(5,5);
// console.log(value)

// let fruits=["Apple","Banana"];
// console.log(fruits[1]);
// fruits.push("Mango");
// console.log(fruits)

// let arr=[1,2,3,4,5];
// arr.map((item)=>{
//     console.log(item*2)
// })

// let arr=[1,2,3,4,5];
// const updatearr=arr.map((item)=>item=item*2);
// console.log(updatearr)

const car=[{
    name:"ferrari",
    price:10000,
    color:"red"
},
{
    name:"ford",
    price:1000,
    color:"red"
},
{
    name:"BMW",
    price:10000,
    color:"white"

}]
// car.forEach(function(item){
//     if(item.price>1000){
//         console.log(item.name);
//     }
// });


// car.forEach(car=>{
//     if(car.color==="red"){
//         console.log(car.name);
//     }
// });

car.forEach(car=>{
    if(car.color==="white"){
        console.log(car.name);
    }
});