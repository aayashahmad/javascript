//  var a= 10;  //gl scp
//  let b =10;  //blk scp
//  const c =10;  //blk scp    // vaRBLES
//   let n = null;
//   let u = undefined

//object....
let std = {
   fullName : "ashu",
    age :25,
    gender:"male",
    isFollow: true,
}
//This code uses a for...in loop to iterate over all the 
// properties of the std object.
//  Inside the loop, ${key}: ${std[key]}
//   prints the property name followed by its value.

// Keep in mind that the order of properties in the output is not 
// guaranteed to be in the same order they were 
// defined in the object literal. 
// If you need a specific order,
//  you may want to use an array of property names in a desired order.
for (let key in std) {  
    console.log(`${key}: ${std[key]}`);
}

// Using Object.values to get an array of property values
let values = Object.keys(std);

// Printing the array of values
console.log(values);


//cond.....
// equal to  ==  a=2 b=2 a==b true
// equal to and  === a=3 b="3" false
// not equal to !==
// let a = 5;
// let b = "5";
// if(a == b){  
//     console.log(true)
// }else if(a===b){
//     console.log("false")
// }

// condition? ture val: false output

 
let age = 16;
let result =age<=18?"bacha":"men";

// if(age <=18 ){
//   console.log("under age");
// }
// else if(age >= 18){
//     console.log("adult uh can enter our website");
// }
// else{
//     console.log("invalid age");
// }

console.log(result)