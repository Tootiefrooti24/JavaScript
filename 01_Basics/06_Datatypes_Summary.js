// ***Datatypes type***

// 1.primitive-->Call By Value
//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const id=Symbol('123');
const anotherid=Symbol('123');
console.log(id===anotherid);//output is false cuz symbol give uniqueness to variables even if their data or value is same




//2.Reference(Non-primitive)
//Array,Objects,Functions

const heroes=["Shaktiman","naagraj","Me"]//array

let object={
    name:"Shubham",
    age:20,
}//Objects are key value pairs like name is key and Shruti is Value.So it will be written like this always

const myFunction= function(){
    console.log("Hello Worls")
}//we can write function directly also but here we have stored in a constant


// JavaScript is a dynamically typed language.No explicit type declarations: You do not need to specify the data type (e.g., number, string) when declaring a variable, unlike in statically typed languages like Java or C++.
// var x = 5;      // x is a number but here we were not required to specify its type
// x = "Hello";    // x is now a string
// x = [1, 2, 3];  // x is now an array

//typeof will help to know the datatype of variables
console.log(typeof(id));


// https://262.ecma-international.org/5.1/#sec-11.4.3
// Official documentation....you can read everything or clear confusion from here



// **********************************************************************************
// STACK AND HEAP MEMORY

let myYoutubename="Tootiefrooti@2004"
let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
} 
let userTwo=userOne
userTwo.email="Hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)


