// singleton
//  Object.create 

// Object literal

const msym = Symbol("key 1")



const Jsuser ={
    name: "Naku",
    "full name" : "Nakul purohit",
    [msym] : "mykey1",
    age: 20,
    location: "chennai",
    email:"nakul@gooogle.com",
    isloggedin: false,
    lastLoginDays:["monday","saturday"]
}

// console.log(Jsuser);

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[msym]);

Jsuser.email = "nakul@chatgpt.com "
// Object.freeze(Jsuser)   // it will not allow to change the object
Jsuser.email = "mama@gpt.com"


Jsuser.greeting = function(){
     console.log("hello js user");
}

Jsuser.greetingTwo = function(){
     console.log(`hello js user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtw());
