import React from 'react';
import ReactDom from 'react-dom';

const Greeting = () => {
    return (
        <div>
            <Person />
            <Message />
        </div>
    )
}

const Person =  () => <h2>Victor Mike</h2>
const Message = () => {
    return <p>hello from me</p>
}

ReactDom.render(<Greeting/>, document.getElementById('root'))