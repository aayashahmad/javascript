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
// console.log(std);
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
    // console.log("key=",key, "values=",std[key]);
}

// Using Object.values to get an array of property values
let values = Object.values(std);

// Printing the array of values
// console.log("obj method+++",values);
      //init... condito.. updaT....
 for(let i=1; i<=100; i++){
//   console.log("agib")
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

// console.log(result)
//string  ->immutable
let str ="hellolllcvsdvksdvlllscvshlll";
// let agee =23;
// console.log(`my name is ${str} and age is ${agee}`) //temp literals
//trem remove whitespace....
//slice (str, end->not included..)
//replace chng->str -val replaceAll(selected val,chg-> newval)
// console.log(str.replaceAll("l","a"))
// console.log(str)

// array topic str////////////////////////////////////////////////////////////

// let arr=[10,20,"hello",40,["ashu"]];
// let arr = ["ashu","aqib","amir"];
// let arr2 = [13,54,75];
//  for (let val of arr){
//  console.log("arrayyyy",val)
//  }
// for(let i=0; i<arr.length;i++ ){
//     // console.log(`index :${i}, value :${arr[i]}`);
//     console.log(arr[i]);
// }
// console.log("arrayyyy",arr)
//array methods
//push add on last
// let arr2 = [13,54,75];
// console.log(arr2)
// arr2.push(99);
// console.log(arr2)
//pop delete at last
// let arr2 = [13,54,75];
// console.log(arr2)
// arr2.pop();
// console.log(arr2)
//shift delete first element
//unshift add first element
//tostring
// let arr = ["ashu","aqib","amir"];
// console.log(arr.toString());//covert into string
//CONCAT
// let arr = ["ashu","aqib","amir"];
// let arr2 = ["apple","box","bmw"];
// console.log(arr.concat(arr2));//join two arrays
// let r = arr.concat(arr2);
// console.log("arrrrrrr",r)
//SLICE
let arr3 = [33,66,77,99,0];
// console.log(arr.slice(1,2))//start from index 1 to end NOT INCL....
//SPLICE
let r = arr3.splice(1,1,22)
console.log("del ",r);//splice(stridx,delindx,addidx)
//add  item at index 3 = splice(3,0,88)
//delete item at index 3 = splice(3,1)
//replace item at idx 1 = splice(1,0,66)
console.log(arr3);

//sytax
// function aqib(){
//   console.log("named function")
// }

// let anonfunc = function(){
//     console.log("anonymous function")
// }

// let arrofun = () =>{     
//     console.log("arrow func");
// }

// foreach()
// let arr = [1,2,3,4,5, "ashu"];
// arr.forEach((val,idx,arr)=>{
//     console.log(`value ${val} is in the position ${idx}`);
// })

// let newarr=arr.map((item)=>{
//     return item*10;   
// })
// console.log(newarr)
//filter 
// let newarr = arr.filter(item => item === "ashu");
// console.log(newarr)
// const books = [
//     {
//         title: "book1",
//         author: "JD Salinger",
//         pages: 200,
//         publishYear: 1951
//     },
//     {
//         title: "book2",
//         author: "Another Author",
//         pages: 250,
//         publishYear: 2028
//     },
//     {
//         title: "book3",
//         author: "Another Author",
//         pages: 250,
//         publishYear: 2027
//     }
// ];
// let bookAuthor = books.filter(book => book.publishYear <= 2000);
// console.log(bookAuthor);
// let arr2 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumVal = arr2.reduce((accumulator, currVal) => accumulator + currVal, initialValue);
// console.log(sumVal);


// let title = document.getElementById("tile")
// console.log(title)

let d= document.querySelector(".desc")
console.log(d)
function bk(){
    document.body.style.background="black"
    document.body.style.color="white"
}
function wt(){
    document.body.style.background="white"
    document.body.style.color="black"
}