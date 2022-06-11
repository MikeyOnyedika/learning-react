import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
     const [size, setSize] = useState(window.innerWidth);

     const checkSize = () => {
          setSize(window.innerWidth);
     };
     useEffect(() => {
          window.addEventListener("resize", checkSize);

         // the clean up function  
          return () => {
               window.removeEventListener("resize", checkSize);
          };
     });

     return (
          <div>
               <h2>Window Width</h2>
               <h2>{size} px</h2>
          </div>
     );
};

export default UseEffectCleanup;
