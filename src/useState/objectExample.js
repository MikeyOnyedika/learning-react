import React from 'react'

export default function UseStateObject() {
  const [person, setPerson] = React.useState({name: 'vic', age: 21, message: 'hello'})

  const changeMessage  = () => {
    //   use a spread operator on the current person object to 
    //   add all its property/values into the new object created, then override the chosen property(ies)
    //   If you don't do this, all the other values from the current object will lost after the update
      setPerson({...person, message: "me hello"})
  }

  return (
    <div>
        <h3>{person.name}</h3>
        <h4>{person.age}</h4>
        <h3>{person.message}</h3>
        <button type='button' onClick={changeMessage}>change message</button>
    </div>
  )
}
