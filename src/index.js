import React from 'react';
import ReactDom from 'react-dom';

// function Greeting(){
//     return <h2></h2>
// }

const Greeting = () => {
    return (
        <div>
            <h1>hello me</h1>
        </div>
    )
}

ReactDom.render(<Greeting/>, document.getElementById('root'))