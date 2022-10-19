import React from 'react'
import Person,{ Country} from './Person'


function Render() {
  return (
    <div>
      <Person 
        name ={"Micheal"}
        email ={"micheal@y.com"}
        age={21}
        isMarried={true}
        friends={["Kent", "Cy", "Shola", "Emma"]}
        country = {Country.Nigeria}
      />
    </div>
  )
}

export default Render
