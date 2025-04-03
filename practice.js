//destructuring for arrays
//Breaking down arrays or objects into individual variables.
const arr=[1,2,3];
const[first,second,third]=arr;
console.log(first,second,third);

//destructuring for objects
const obj={
    employeeId:1,
    employee:"Ram",
    employeeSalary:5000,
    address:"kodad",
};
const{employeeId,employee,employeeSalary,address}=obj;
console.log(employeeId,employee,employeeSalary,address);

//Rest(...) operator:(array)
//Collects remaining elements into the array
const arr2=["Hello",2,3,4,5];
const[firstString,secondValue,...remaining]=arr2;
console.log(remaining);

//Rest(...) operator:(object)
function displayNames(...a){
    console.log(`The names are:${a}`)
}
displayNames("Ram","Charan","Prabhas","Jr.NTR","Mahesh")

function displayName(a,b){
    console.log(`The names are:${a},${b}`)
}
displayName("Ram","Charan","Prabhas","Jr.NTR","Mahesh")

//Spread (array)
// Expands array or object into individual elements
const arr3=["a","d","c"];
const arr4=arr3;
arr3.push("d");
console.log(arr3); 
console.log(arr4);

const arr5=["a","d","c"];
const dummy=["orange","Mango"]
const arr6=[...arr5,...dummy];
arr5.push("d");
console.log(arr5); 
console.log(arr6);


//Spread(object)
const car1={name:"bmw",price:"1 cr"};
const car2={color:"white",engineCC:5000}
const car={...car1,...car2};
console.log(car);

//Callback
//A function passed as an argument to another function
function square(val){
    return val*val
}
function cube(val){
    return val*val*val
} 
// function sumofSquares(val1,val2){
//     let firstValue=square(val1);
//     let secondValue=square(val2);
//     return firstValue+secondValue
function sumofSomething(val1,val2,callbackFn){
        let firstValue=callbackFn(val1);
        let secondValue=callbackFn(val2);
        return firstValue+secondValue
}   
const answer=sumofSomething(2,3,square);
const ans=sumofSomething(2,3,cube);
console.log(answer,ans);


// setInterval(()=>console.log("Hiee Helooo")2)








