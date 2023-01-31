//  let:-
// 1. let can not be re declaired
// 2. let has block scope
//  var:-
// 1. var can re declaired
// 2. var has function scope
//  const:-
// 1. const can not re declaired


let a = 12;
var b = 10;
const c = 13;
a = 20;
// console.log(a);
function xyz(){
    console.log(y);
{
    let x = 21;
    var y = 22;
    const z = 23;
    console.log(x,y,z);
}
{
    let x = 0;
    console.log(x);
}
console.log(y);
}
xyz()
// console.log();
console.log(a,b,c);


// console.log(ram);
let ram = 12;
console.log(ram);
ram = 221;
console.log(ram)
console.log(shyam);
var shyam;

const sita = 66;

// get time, date, secons, etc Day and months in the form of 0,1,2,3,4,...
let presentTime =new Date().getDay();
console.log(presentTime);

let text;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);

// set is always store unique value only
let arr =[2,4,5,2,9,6,1,5,11];
let narr =new Set(arr);
narr.add(12)
narr.delete(2)
console.log(narr.has(11));
console.log(narr.size);
console.log(narr);