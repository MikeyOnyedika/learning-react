import React, { useState } from "react";



export default function UseStateArray(){
    const p = [
         { id: 1, name: "john" },
         { id: 2, name: "james" },
         { id: 3, name: "cassie" },
         { id: 4, name: "meredith" },
    ];
     const [people, setPeople] = useState([...p]);

    const deletePerson = (id) => {
        const newPeople = people.filter(person => person.id !== id)
        setPeople(newPeople)
    }

     return (
          <div>
               {people.map((person) => {  
                    return (
                         <>
                              <h2>{person.name}</h2>
                              <button type="button" onClick={()=> deletePerson(person.id)}>remove</button>
                         </>
                    );
               })}
          </div>
     );
};
