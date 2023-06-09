let fruits = ['mango','banana','apple'];
// let flowers = new Array ('mango','banana','apple');  //another way but not recommended
console.log('array basics...');
console.log(fruits);
console.log(fruits.length);

console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

fruits[2]='orange';
console.log(fruits);

//slice
console.log('Array.slice method...');
console.log(fruits.slice(1,3));

//splice
console.log('Array.splice method...');
let flowers = ['sunflower','rose','lotus'];
console.log(flowers);
flowers.splice(2,1,'red rose','red lotus');
console.log(flowers);

//concatenation
console.log('Array.concat method...');
let arr1 = [1,2,3,4];
let arr2 = [4,5,6,7];
let arr3 = [6,7,6,7,7,7];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3));

//fill
console.log('Array.fill method...');
let arr5 = [1,2,3,4,5,6,7];
arr5.fill('Namrata',2,4);
console.log(arr5);
// fill(value)/fill(value, start)/fill(value, start, end)
console.log([1, 2, 3].fill(4));
console.log([1, 2, 3].fill(4, 1));
console.log([1, 2, 3].fill(4, 1, 2));
console.log([1, 2, 3].fill(4, 1, 1));
console.log([1, 2, 3].fill(4, 3, 3));

//include 
console.log('Array.include method...');
console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(4));
console.log([1, 2, 3].includes(3, 3));
console.log([1, 2, 3].includes(3, -1)); // computed index 3+(-1)=2 from which start searching hence true

//indexof
console.log('Array.indexOf method...');
const array = [2, 9, 9];
console.log(array.indexOf(2)); 
console.log(array.indexOf(7)); 
console.log(array.indexOf(9));
console.log(array.indexOf(9, 2)); 
console.log(array.indexOf(2, -1)); 
console.log(array.indexOf(2, -3)); 

//isArray
console.log('isArray method...');
let myarr = [1,2,3,4];
console.log(Array.isArray(myarr));

//join
console.log('Array.join method...');
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('1'));
console.log(elements.join('-'));

//map
console.log('Array.map method...');
const mapArr = [1, 4, 9];
const map1 = mapArr.map(x => x * 2);
const roots = mapArr.map((num) => Math.sqrt(num));
console.log(map1);
console.log(roots);

//pop
console.log('Array.pop method...');
const randomArr = [1, 4, 9];
console.log(randomArr);
console.log(randomArr.pop());
console.log(randomArr);

//push 
console.log('Array.push method...');
console.log(randomArr);
console.log(randomArr.push(16));
console.log(randomArr.push(35,25));
console.log(randomArr);

// reverse
console.log('Array.reverse method...');
console.log(randomArr);
console.log(randomArr.reverse());

//sort
console.log('Array.sort method...');
const unsortedArr = [25, 35, 16, 4, 1];
console.log(unsortedArr);
console.log(unsortedArr.sort());//will return incorrect result in case of numeric value beacuse it is considered value as string
console.log(unsortedArr.sort(function(a,b){return a-b})); //correct result

//shift
console.log('Array.shift method...');
const math = [1,2,3,4,5];
console.log(math);
console.log(math.shift());
console.log(math);
console.log(math.unshift('Namrata'));
console.log(math);

//split
console.log('Array.split method...');
let myname = 'Namrata';
let converted = myname.split('');
console.log(converted);

//for..of
console.log('Array.forOf method...');
let names = ['Namrata', 'Neha','Nidhi'];
let convertedNames = [];
for (let name of names){
    convertedNames.push(name.toUpperCase());
}
console.log(convertedNames);

//break and Continue
console.log('break statement...');
for (let name of names){
    if(name){
    console.log(name);
        break;
    }
    console.log(name);
}

//continue
console.log('continue statement...');
for (let name of names){
    if(name=='Neha'){
        continue; //skip
    }
    console.log(name);
}

//filter
console.log('Array.filter method...');
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);












