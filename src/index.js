import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";


async function getUsers(){
    try{
        return (await (await fetch('https://randomuser.me/api/?results=25')).json()).results
    }catch(err){
         return "error couldn't get data from api"
    }
}

const users = getUsers().map(user => {
    return (
        user
    )
})

function Greeting(){
    return (
        <h1></h1>
    )
}


ReactDom.render(<Greeting/>, document.getElementById('root'))