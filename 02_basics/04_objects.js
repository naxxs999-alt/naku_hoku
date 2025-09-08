// const Tinderuser = new Object() 
const Tinderuser ={}
 Tinderuser. ID = "123abc"
Tinderuser. name = "Nax"
Tinderuser.isLoggedIn = false

// console.log(Tinderuser);

const regularuser ={
    email: "x@gmail.com",
    fullname:{
    userfullname: {
        firstname : "nakuul",
        lastname : "purohit",
    } 
    
}
}
// console.log(regularuser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
 


// const obj3  = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2 ,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}            // prefer this method  
// console.log(obj3);


const users =[
    {
        ID:1,
        email:"h@gmail.com"
    },
    {
        ID:1,
        email:"h@gmail.com"
    },
    {
        ID:1,
        email:"h@gmail.com"
    },
]

users[1].email
// console.log(Tinderuser);
// console.log(Object.keys(Tinderuser));
// console.log(Object.values(Tinderuser));
// console.log(Object.entries(Tinderuser));

// console.log(Tinderuser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename : "JS in hindi",
    price: 999,
    courseInstructor: "naku",
    }

//    course.courseInstructor

const {courseInstructor:instructor} = course

// console.log(courseInstructor);
console.log(instructor);

{ {
//      "name": "nakul"
//      "coursename": "js in hindi"
//      "price": "free"
// }

[
    {},
    {},
    {}
]

