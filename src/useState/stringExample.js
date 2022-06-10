import React from "react";

function UseStateString() {
     const [text, setText] = React.useState("hello me");

     const changeText = () => {
         if (text === 'hello me'){
             setText('another me')
         }else{
             setText('hello me')
         }
     }

     return (
          <>
               <h1>{text}</h1>
               <button type="button" onClick={ changeText }>change text</button>
          </>
     );
}

export default UseStateString;
