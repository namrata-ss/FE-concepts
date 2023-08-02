//HOF Higher order function
//CALLBACK
//Function is calling function

/* A Higher order function is a function which take other function as a parameter
 or return a function as a value. The function passed as a parameter is called callback*/

function a(){
    console.log("I was called by a function");
}

function b(){
    a();
}

b();

//Example-1

const callback = (n) =>{
    return n ** 2;
}

function cube(callback, n){
    return callback(n) * n;
}

console.log(cube(callback, 3));



// Example-2

const arr = ["hey", "hi", "hello"];
// arr.forEach(myfunc);
// function myfunc(val){
//     console.log(val);
// }

arr.forEach((val)=>{
    console.log(val);
});
//forEach() is HOF and () => {} inside it is callback


// setTimeout
setTimeout(() =>{
    console.log('HELLO')
},1000);

// setInterval
// setInterval(() =>{console.log("smily")},3000);

// map
const numbers = [1,2,3,4,5,6];
const numSquare = numbers.map((num) => num * num);
console.log(numSquare);

// filter
const count = ["India", "Finland", "Canada", "Japan", "Germany","Ireland"];
const filteredCountry = count.filter((val) => val.includes("land"));
console.log(filteredCountry);

// Reduce
const num = [1,2,3,4,5,6,7];
const sum = num.reduce((acc,curr) => acc + curr, 0);
console.log(sum);

// Sort
const names = ["Anita","Ananya","Namrata","Nidhi","Mayuri"];
console.log(names.sort());
console.log(names.reverse());


