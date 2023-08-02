//var(global) and let(local/script)
//Hoisting
/*Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is actually executed.
 This means that you can use variables and call functions before they are declared in your code.*/ 
// it's important to note that only the declarations are hoisted, not the initializations or assignments, hence ouput of console.log(a); is undefined
// In below example we have hoisted variable a and function sum and sub before its declaration

/*Explanation:
1. Hoisting: During the hoisting phase, variable and function declarations are moved to the top of their respective scope. In your code, the variable `a` and the function declarations for `sum()` and `sub()` are hoisted to the top of the global scope.

2. Execution Context: When the code is executed, the global execution context is created. It includes the variable `a` and the function declarations `sum()` and `sub()`. Initially, the value of `a` is `undefined`.

3. Call Stack: The call stack keeps track of the function calls and their corresponding execution contexts. In this case, the call stack initially contains the global execution context.

4. Function Calls: When `sum()` is called, a new function execution context for `sum()` is created and pushed onto the call stack. Similarly, when `sub()` is called, a new function execution context for `sub()` is created and added to the call stack. The call stack now contains the global execution context, `sum()` execution context, and `sub()` execution context.

5. Execution of Functions: The functions `sum()` and `sub()` are executed in the order they were called. The respective execution contexts are popped off the call stack once the functions complete their execution.

6. Logging `a`: After the function calls, `console.log(a)` is executed, logging the value of `a` (which is now assigned as 10) to the console. The global execution context remains on the call stack until the script finishes executing.*/

sum();
sub();
console.log(a);
var a = 10;

function sum(){
    var num1 = 10;
    var num2 = 20;
    console.log(num1 + num2);
}
function sub(){
    var num1 = 10;
    var num2 = 20;
    console.log(num1 - num2);
}

//closure

function add(){
    var a =10;
    function sub(){
        console.log(a);
    }
    sub();
}
sum();


/*In this code, we have a function `add()` that contains another function `sub()`. The `sub()` function accesses a variable `a` that is defined in the outer scope of `sub()`. Let's break down how closure works in this context:

1. When the `add()` function is invoked (`add()` is called), a new execution context is created for `add()`.

2. Inside the `add()` function, the variable `a` is declared and assigned a value of 10. This variable `a` is within the scope of the `add()` function.

3. Within the `add()` function, the `sub()` function is defined. This creates a closure over the surrounding state, including the variable `a` in its lexical environment.

4. The `sub()` function is immediately invoked (called) within the `add()` function. When `sub()` is called, a new execution context is created for the `sub()` function.

5. Inside the `sub()` function, the `console.log(a)` statement is executed, accessing the variable `a` from its surrounding scope (the scope of the `add()` function). Even though the `sub()` function is invoked outside the scope where `a` is defined, it still has access to `a` due to closure.

6. The value of `a`, which is 10, is logged to the console.

In summary, closure allows the `sub()` function to access variables from its outer scope, even after the outer function `add()` has finished executing. In this case, the `sub()` function maintains access to the variable `a` in the lexical environment of the `add()` function.*/