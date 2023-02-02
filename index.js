// //  let:-
// // 1. let can not be re declaired
// // 2. let has block scope
// //  var:-
// // 1. var can re declaired
// // 2. var has function scope
// //  const:-
// // 1. const can not re declaired

// console.log(b);
// // console.log(as);
// // let as;
// let a = 12;
// var b = 10;
// const c = 13;
// a = 20;
// function xyz(){
//     console.log(y);
// {
//     let x = 21;
//     var y = 22;
//     const z = 23;
//     console.log(x,y,z);
// }
// {
//     let x = 0;
//     console.log(x);
// }
// console.log(y);
// }
// xyz()
// // console.log();
// console.log(a,b,c);


// // console.log(ram);
// let ram = 12;
// console.log(ram);
// ram = 221;
// console.log(ram)
// console.log(shyam);
// var shyam;

// const sita = 66;

// //==============================================
// // get time, date, secons, etc Day and months in the form of 0,1,2,3,4,...
// let presentTime =new Date().getDay();
// console.log(presentTime);

// let text;
// switch (new Date().getDay()) {
//   case 4:
//   case 5:
//     text = "Soon it is Weekend";
//     break;
//   case 0:
//   case 6:
//     text = "It is Weekend";
//     break;
//   default:
//     text = "Looking forward to the Weekend";
// }
// console.log(text);
// //================================================
// // set is always store unique value only
// let arr =[2,4,5,2,9,6,1,5,11];
// let narr =new Set(arr);
// narr.add(12)
// narr.delete(2)
// console.log(narr.has(11));
// console.log(narr.size);
// console.log(narr);
// //=====================================================
// //object, map, entries
// let obj = {
//     name : "vineet",
//     nobj : {
//         class : 10,
//         board : "state",
//         result : "pass"
//     },
//     age : 25,
//     color : "fair",
//     skill : "coding"
// }
// console.log(obj.nobj.board);
// //======================================================
// //double all element inside the array using map Method
//     let ar = [4,2,8,5,1];
//     console.log(ar.map((e)=>{
//         return e*2
//     }));

// //find even number using filter method
//     console.log(ar.filter((e)=>{
//         if(e%2 == 0){
//             return e;
//         }
//     }))

// // find max using reduce method
//     console.log(ar.reduce((max,curr)=>{
//         if(curr > max){
//             max = curr;
//         }
//         return max;
//     }))
// //========================================================
// // Bitwise Operators and, or
// let BitwiseAnd = 5 & 1;   //5 = 0 1 0 1 ,  1 = 0 0 0 1 => output 0 0 0 1 = 1
// console.log(BitwiseAnd);

// let BitwiseOr = 5 || 1;    // 5 = 0 1 0 1 ,  1 = 0 0 0 1 => output 0 1 0 1 = 5
// console.log(BitwiseOr);
// //=======================================================
// // Error Try an catch
// try {
//     console.log("Block of code to try");
//   }
//   catch(err) {
//     console.log("Block of code to handle errors")
//   }
// //======================================================
//   function strict() {
//     // "use strict"
//     // return "use of strict"
//     a = 50;
//     return a;
//   }
//   console.log(strict());

// //   "use strict"
// //   c = 100;
// //   console.log(c);
// //========================================================
// //  this Keyword  => this keyword refers to current object
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
// console.log(person.fullName());

// // call methot in this => it call this keword object value in other object
// const person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }

//   const person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }
//   console.log(person1.fullName.call(person2));  // Return "John Doe"

// // bind method in object => it can borrow a method from other object(it borrow as a function)
// const persons = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
// //   console.log(person.fullName.bind(member)());
//   let fullName = persons.fullName.bind(member);
//   console.log(fullName());

// // apply method =>it work like call only diffrence is apply() method accepts arguments in an array
// const personss = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1s = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
// console.log(personss.fullName.apply(person1, ["Oslo", "Norway"]));
// //==================================================================================
// //sort array
// let arrs = [6,41,8,3,9,2];
// arrs.sort((a,b)=>a-b);
// console.log(arrs);
// //=================================================================
// // Rest Operator => para2 store rest value in the form of array except first value and para1 store first value
// function sum(para1,aa, ...para2){
//   // console.log(para1);
//   // console.log(para2);
//   let p2sum = 0;
//   for (let i=0; i<para2.length; i++){
//     p2sum += para2[i];
//   }
//   return p2sum;
// }
// console.log(sum("vineet","abc",10,12,18));

// Spread Operator => 
// let arr = [10,50,30,20];
// console.log(...arr);
// let arr2 = arr;   // shallow Copy => it copy only refrence of original array
// arr2.push(90);
// console.log(arr2);
// let arr3 = [...arr];  //Deep Copy => it Store array in new memory
// console.log(arr3);

// let obj = {
//   name : "vineet",
//   age : 25
// }
// let newobj = {...obj};
// console.log(newobj);

//==================================================================
// Object Literal => it is new way of writing object
// Ex:- 1
// let name = "ram";
// let age = 25;
// let obj = {
//   name,
//   age
// }
// console.log(obj);

//EX:- 2
// let name = "ram";
// let age = 25;
// let obj2 = {
//   name : "shyam",
//   city : "delhi",
//   age
// }
// console.log(obj2);
//===================================================================

// Prototype
//For example, 
// function Person () {
//     this.name = 'John',
//     this. age = 23
// }
// const persons = new Person(); // checking the prototype value console.
// console.log(persons);


//=======================================================================
// event bubbling => bubbling is go child to parent 
// event capturing => capturing is go parent to child



//=======================================================================
// debouncing(it solve typing leters into input) => It is a function and it takes 2 argument (function , delay)
//                if we type in search box every leter it call api or run code but if we want
//                call is run or call api when use is pause or stop typing then we can use debouncing. 


// Throttling(it solve click many time) => it is mainly use for code optimization, It is also a function and it takes 2 argument (function , delay) 
//                and if use click many time on buttion so api call many time then we can use this and give some time delay between api call

//====================================================================================

// Currying
// let multiply = function (x , y){
//     console.log(x * y);
// }
// let multiplybytwo = multiply.bind(this, 2); // bind return function
// multiplybytwo(6);

// let multiplybyfive = multiply.bind(this, 5);
// multiplybyfive(10);

