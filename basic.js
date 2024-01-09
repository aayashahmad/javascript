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
std["age"]=std["age"]+1;
std["fullName"]=std["fullName"]="aqib";
console.log(std);
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
    console.log("key=",key, "values=",std[key]);
}

// Using Object.values to get an array of property values
let values = Object.values(std);

// Printing the array of values
console.log("obj method+++",values);
      //init... condito.. updaT....
 for(let i=1; i<=100; i++){
  console.log("agib")
 }
  // FOR OF, FOR IN
  // FOR OF -> STRING "ASHU" -> A,S,H,U
  // FOR IN -> OBJECT KEY -> KEY OR PROPT...
//  let str = "aqib";
//  let size= 0;
//  for(let rr of str ){
//     console.log(rr);
//     size++;
//  }
//  console.log("string size=", size);


//  let num = 6;
//  let userNum = prompt("Guess the game no. 1 to 10:");
 
//  while (userNum != num) {
//      userNum = prompt("You entered the wrong number. Guess again:");
//  }
 
//  console.log("You win!");

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
//string  ->immutable
let str ="hellolllcvsdvksdvlllscvshlll";
// let agee =23;
// console.log(`my name is ${str} and age is ${agee}`) //temp literals
//trem remove whitespace....
//slice (str, end->not included..)
//replace chng->str -val replaceAll(selected val,chg-> newval)
// console.log(str.replaceAll("l","a"))
console.log(str)