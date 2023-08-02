// prototype chaining/prototype inhenrince
let myHeros = ["thor", "spiderman"];
let dcHeros = [];

// OBJECT inhenritance

const Teacher = {
    makeVideos:true
}

const TeachingSupport = {
    isAvailable: false
}

const TSAssitance = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__ : TeachingSupport
}

// Teacher.__proto__ = User

//modern syntax

// Object.setProtypeOf(TeachingSupport, Teacher)

//Goal: get truelength of string
String.prototype.truelength = function(){
    console.log('true length is: ${this.trim().length}');

}

