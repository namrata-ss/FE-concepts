let userName = {
    firstname: 'namrata',
    lastname: 'satardekar',
    role: 'admin',
    loginCount: 25

}
console.log(userName.firstname);

//update value of role
userName.role='guest';
console.log(userName);

//for in(basedon keys get value)
for(let x in userName){
    console.log(x);//gwt all keys
    console.log(userName[x]);
}

for(const x in userName){
    console.log(x);
    console.log(userName[x]);
}