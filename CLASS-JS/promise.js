//promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Event loop

/*JavaScript has a runtime model based on an event loop,
which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks*/

//event loop example
const userOne = () =>{
    console.log('hello user one');
}
const userTwo = () =>{
    setTimeout(() => {
        console.log('Hello i am inside use two');
    }, 3000)
    console.log('hello user two');
}
const userThree = () =>{
    console.log('hello user three');
}
userOne();
userTwo();
userThree();

//promise example

const one = () => {
    return "I'm one";
}
const two = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Credential correct");
        },3000);
    });
};

const three = () => {
    return "redirecting to home";
}
//async - where all fuction will be called
//await - where should wait-->await keyword is used within an async function to pause the execution and wait for a promise to resolve before proceeding further.

const callMe = async () => {
    let Valone = one();
    console.log(Valone);

    let ValTwo = await two();
    console.log(ValTwo);

    let ValThree = three();
    console.log(ValThree);

}

callMe();

// // REAL TIME EXAMPLE OF PROMISE

// /*
// While it's possible to handle asynchronous operations without promises,
//  using promises can greatly improve the readability, maintainability, and error handling of your code,
//  especially as the complexity of your project and the number of asynchronous operations increase.
// */

//EX-1
const fetch = require('isomorphic-fetch');
const APIurl = "https://jsonplaceholder.typicode.com/todos/1";
fetch(APIurl)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

//EX-2
const fetch = require("isomorphic-fetch");
const url = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject("Error: Failed to fetch data.");
        }
      })
      .catch((error) => reject(error));
  });
};

// Consuming the promise
fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));



