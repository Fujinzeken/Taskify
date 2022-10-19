import React from 'react'

interface Props{
  name:String;
  email:String;
  age:number;
  isMarried:boolean;
  friends: String[];
  country: Country;
}

// You can create multiple options to one prop by using the enum
export enum Country{
  Brazil = "Brazil",
  Kenya = "Kenya",
  Nigeria = "Nigeria"
}

function Person(props:Props) {
  // specifying type in states: const [name, setName] = useState<String>("")
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried? "is" : "is not"} Married</h1>
      {props.friends.map((friends: String)=>{
         return <h1>{friends}</h1>
      })}
      <h1>Country: {props.country}</h1>
    </div>
  )
}

export default Person
