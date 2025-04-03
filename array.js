const numbers=[10,25,32,47,50,63,78,89,90,101];
//sum of all numbers
const sum=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum);

//containing only even numbers
const evenNumbers=numbers.filter(number=>number%2===0);
console.log(evenNumbers);

//array includes the number 47
const includes47=numbers.includes(47);
console.log(includes47);

//first number greater than 60
for(let i=0;i<numbers.length;i++) {
    if(numbers[i]>60){
        console.log(numbers[i]);
        break;
    }
}

//array in descending order
numbers.sort(function(a,b){
    return b-a;
});
console.log(numbers);



