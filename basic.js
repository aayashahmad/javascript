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