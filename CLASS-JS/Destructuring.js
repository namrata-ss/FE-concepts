// Destructuring and Rest and Spread
// In JavaScript, destructuring is a syntax that allows you to extract values from arrays or objects into distinct variables.

const sci = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, grav, bodytemp, boiltemp] = sci;
console.log(e, pi, grav, bodytemp, boiltemp);

const val = [1,2,3];
let [var1, var2] = val;
console.log(var1, var2);

// spread 
// the spread operator is used to split an array or iterable into individual elements
function sumone(x, y) {
    return x + y;
}

let vari = [9, 7];
console.log(sumone(...vari)); //spread


//Rest
// the rest parameter is used to combine multiple function arguments into an array
const arr2 = [1,2,3,4,5,6,7];
let [val1,val2, ...restVal] = arr2;
console.log(val1,val2);
console.log(restVal);

function addition(...args){
    console.log(args);
    let sum = 0;
    for(const x of args){
        sum = sum + x;
    }
    return sum;
}
console.log(addition(1,2,4,5,6,7,8,9));

