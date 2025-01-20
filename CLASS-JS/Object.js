const object ={
    rocket: 'rock',
    home: 'home'
}

//string, number, bigint, boolean, null, undefine, symbol-->apart from this other consider as object

//Part1
const obj1 = {
    //property
    //key:value
    rocket: 'rock',
    fuel:2,
    config:{
        name: 'mars'
    }
}

obj1.fuel = 200
obj1['year'] = 2000


//part2
const obj2 = new Object()   //constructor
obj2.redbook='redb'
obj2.bluebook='blueb'

//part3
const powers = {
    fly: true,
    cordinate: Math.random() + 2

}

//when you want to use existing object and property of existing object
const obj3 = Object.create(powers)
console.log(obj3);
console.log(obj3.cordinate)
console.log(Object.getPrototypeOf(obj3))

//part4
const obj4 = Oject.create({})
Object.defineProperties(obj4, 'book',{
    icon: 'icon',
    enuerable: true  //to make object enuemerable
})

console.log(obj4);
console.log(obj4.book);
console.log(Object.log(Object.getPrototypeOf(obj4)))

//part 5
const obj5 = {
    comics : 'marvel',
    pen: '',
    printComic: function(){
        // this refers to current object
        this.pen += 'mypen'
        console.log(this)
    },
    //arrow function doesnt have context to this
    printComic: () =>{
        console.log(this)
    }
    
}