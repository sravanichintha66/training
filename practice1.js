// //Asynchronous behaviour of javascript
// //Few Asynchronous operations:
// //fetch(),fs.read(),setTimeout(),setInterval()
console.log("Hello");
let count=0;
for(let i=0;i<100;i++){
    count=count+i
}
console.log(count);
setTimeout(()=>{
    console.log("After 3 seconds");
},3000);
console.log("Bye");


// //Handling the Asynchronous Operations
function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 is done")
        callback()
    },3000)
}

function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 is done")
        callback()
    },1500)
}
function task3(){
    setTimeout(()=>{
        console.log("Task 3 is done")
    },1000)
}
// // task1(()=>{
// //     task2(task3);
// // });
task1(()=>{
    task2(()=>{
        task3();
    });
});


// //Callbacks-Passing functions as an arguments to another function
function goodMorning(){
    console.log("Hello!! Good Morning")
}
function goodEvening(){
    console.log("Hello!! Good Evening")
}
function greet(callback){
    console.log("Greetings")
    callback()
}
greet(goodMorning)


// //Promises-object which handles asynchronous opertions
// //syntax-new Promise((resolve,reject)=>{asynchronous operations})
function task4(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const isTask4Done=true;//false ;
        if(isTask4Done){
            console.log("Task 4 is done")
            resolve();
        }else{
            reject("Task 4 is not done")
        }  
    },3000)
});
}

function task5(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Task 5 is done")
        resolve()
    },1500);
});
}
// task4().then(()=>task5())
//        .then()
//        .catch(err=>console.log(err))
// //Using async & await
async function excecuteAlltasks(){
    try{
        await task4();
        await task5();
        console.log("Helloo")
        // fetch("https://jsonplaceholde.typicode.com/todos/1")
        //   .then((data)=>data.json())
        //   .then((val)=>console.log(val));
    } catch (error){
        console.log(error)
    }
}
excecuteAlltasks()
    
