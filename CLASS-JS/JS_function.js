//function

//defination of function
function Sum(value1,value2){
    // let num1=3;
    // let num2=4;
    console.log("Addition is:",value1+value2);
}

Sum(3,4);  //caling of function

function Sum1(val1,val2){
    let result = val1 + val2;
    return result;
}
function Sub(val1,val2){
    let result = val1 - val2;
    return result;
}
function Mul(val1,val2){
    let result = val1 * val2;
    return result;
}
function Div(val1,val2){
    let result = val1 / val2;
    return result;
}
function Mod(val1,val2){
    let result = val1 % val2;
    return result;
}

let add = Sum1(12,11);
console.log(add);
let substraction = Sub(12,11);
console.log(substraction);
let mul = Mul(12,11);
console.log(mul);
let division = Div(12,11);
console.log(division);
let modules = Mod(12,11);
console.log(modules);


//String
function URL(url,domain){
    let con = 'https://';
    let result = con + url +domain;
    return result;
}
console.log(URL('namratasatardekar','.me'));

//passing multiple value usin array
function Sum2(arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
let myarray = [1,2,3,4,5,6];
let arraysum = Sum2(myarray);
console.log(arraysum);

//passing multiple value directly
function Sum3(){
    //by default Sum3 will create space for arguments
    let sum=0;
    for(let i = 0;i<arguments.length;i++){
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(Sum3(7,8,9,10,11,12,14,15));

//Arraow function
let namrata = (var1,var2)=>{
    console.log("sum in arrow function",var1+var2);
}
namrata(2,3);

let myString = ()=>{
    console.log("welcome to arrow function");
}
myString()