//Conditions/Decisions in JS 

//IF
let age = 18;

if(age == 18){
    console.log('you are eligible');
}

// IF ELSE
if(age > 18){
    console.log('you are allowed inside the park');
} else{
    console.log('out of the park');
}

//ELSE IF

let standard = 2;

 if(standard == 1){
    console.log('Room one');
 } else if(standard == 2){
    console.log('Room two');                                                                            
 } else{
    console.log('Guest room');
 }


 //switch case(there is no difference betwn switch and else if)

 let user = 'Mentor';

 switch(user){
    case 'Admin':
        console.log('Redirect hime/her to the Admin Page');
        break;
    case 'Mentor':
        console.log('Redirect hime/her to the Mentor Page');
        break;
    default:
        console.log('Im normal user');
 }

 //Ternary Operator(Condition?True:False)

 let raining=true;

 raining ? console.log('It is raining') : console.log('It is not raining');

 //Ex 2

 let userLogin = true;

 userLogin ? console.log('loggedIn') : console.log('loggedOut');
