import React from "react";

export default function () {
     const [value, setValue] = React.useState(0);

     const incrementCount = () => {
          setValue((prevValue) => {
               console.log('increment called')
              return ++prevValue
          })
     }
     return (
          <>
               <h2>{value}</h2>
               <button type="button" onClick={incrementCount}>increase</button>
          </>
     );
}