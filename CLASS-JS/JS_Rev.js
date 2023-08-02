// Javascript Eng => V8(Libuv) => CPP
// JS scan all code line by line and then execute

console.log(a);
var a = 10;
console.log(a);

// here b will be in the temporal dead zone for some 
// console.log(b);
// let b = 10;
// console.log(b);

// lexical scope and scope chaning

// "use strict" 
/*In JavaScript, the "use strict" directive is a feature introduced in ECMAScript 5 (ES5) to enable strict mode.
When strict mode is enabled, it enforces stricter parsing and error handling in JavaScript, which helps to catch common coding mistakes and make the code more robust.*/ 

// template literal/Interpolation/template string
let lastname = [1,2,3,4,5];
console.log(`Namrata ${lastname}`);
console.log(typeof(lastname));

//object method
let userDetails = {
    username: "Namrata",
    courseList:[],
    website:"namrata.me",
    buyCourse: function (courseName){
        userDetails.courseList.push(courseName);
    },
};

userDetails.buyCourse("FSJS");
console.log(userDetails)


