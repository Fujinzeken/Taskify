import React from 'react'


//in Ts you must declare the type of variables during assignment
// let name:String = 'mikol'
// let num:number = 5
// let arrOfStrings:String[]= [] // will be number[] if its an arr of nums
// let bool:boolean = true
// let tup:[number, String] // a tuple containing a fixed number of items, 1 num and 1 str
// for objects, bcos it can often contain lots of things, you have to define it using a type prop
// you can also make the object type property optional by adding a ?
// interface Person{
//     name:String;
//     age?:number;
//     friends?:String[];
// };
// let human:Person = {
//     name:"mikolo",

// }

// let lotsOfPeople:Person[] // an array of the person object 

// can also assing more than 1 type to a var by usng the union(|) sign.
// let newAge:number | String
// newAge = 22

// you can also declare a type for a function, by declaring the type of inputs and output
//let functName:(name:String)=>never; 

// types(alias) for objects can be split in two, type and interface
// type x = {
//     a:String;
//     b: number;
// } 

// in type, you can inherit from another type by using the & sign
// type Y = {
//     c: String;
//     d: number;
// }
// let y:Y ={
//     c:'num',
//     d:5
// }

// but with interface all you would need is the extends keyword and interfaces are declared without the = sign
// interface guy extends Person{
//     profession: String
// }

function Note() {
  return (
    <div>
      
    </div>
  )
}

export default Note
