//operators
//Arithmetic operators
let x=12;
let y=3;
let z=x+y;
let w=x-y
let p=x*y;
let R=x/y;
console.log(z)
console.log(w);
console.log(p);
console.log(R)
// increment operators a++=>a+1

let as=1
console.log(as)
//postfix
let bs=as++
let cs=++as
console.log(bs)
console.log(as)
console.log(cs)
//postfix decrement
let k=10
let q=k--
let e=--k
console.log(k--)
console.log(q)
console.log(e)
//comparison operators
let num1=5;
let num2=5
if (num1===num2){
console.log("Equal")}
else{
    console.log("not equal")
}
let numm1=8;
let numm2='8'
if (numm1===numm2){
console.log("Equal")}
else{
    console.log("not equal")
}
//!=,>,>=<,<=
let L=100;
let W=500
if(L!=W){
    console.log( " Numbers are not equal")
}
else if(L>=W){
    console.log( "first number is Greater or same")
}else if(L<=W){
    console.log( " second number is greater or same")
}else if(L>W){
    console.log( " first number is Greater")
}
else if(L<W){
    console.log( " second number is greater")
}
//Logical operators

if ((L===W)&&(L==100) ){
    console.log(" Both are equal")
} else {
   console.log("check failed") 
}
if ((L===W)||(L==100) ){
    console.log(" Both are equal")
} else {
   console.log("check failed") 
}
//object
let person ={
    name:"Tiya",
    age:10,
    place:"Kollam"
}
console.log(person)
console.log(person.age)
let people={
    name:"maya",
    age:20,
    address:{
        str:"xyz",
        city:"TVM",
        pin:1234
    }
}
console.log(people.address.str)
// new keyword
var car=new Object();
car.brand="maruti"
car.name="suzuki"
car.color="black"
console.log(car)

let colors=["red","pink"]
console.log(colors.length)
colors.push("Black")
colors[3]="yellow"
colors.unshift("green")
console.log(colors)
colors.shift() // first element deletion
colors.pop()  //last element deletion
console.log(colors)
console.log(colors.indexOf("pink"))
var fruits=[{name: "Apple", price:200},
            {name: "Banana",price:500},
            {name: "Orange",price:300}
        ]
console.log(fruits[1].name)

let cars=["ciaz","Celerio","ilo"]
cars.splice(2,1)
console.log(cars)
//functions
function add(a,b){
    let c=a+b;
    console.log(c)
}

function add(a,b){
    let c=a+b;
    return c
}
let d=add(5,6);
console.log(d);
function greetings(name){
    console.log("hello",name)
    console.log("hello"+name)
}
greetings("john");// can call before defenition also

function calc(num){
return num*num
}
console.log(calc(5));

function temp(F){
    let p= 5/9*(F-32)
    return p;
    }
    console.log(temp(100));