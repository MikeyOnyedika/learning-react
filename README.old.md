# Notes
## Installation and setup
- Run `npx create-react-app .` so as to create a react app in the current folder
> npx on the first line is not a typo — it’s a package runner tool that comes with npm 5.2+

## Introduction (Whats React)
It's a javascript library for building UI. UI is broken down into components which are build separately and then assembled to make the UI you want

> there is only one html file in React, everything goes there

## Creating First Component
### A component is a unit of user interface. Its just a javascript function defined with first letter being capitalized. It also has to return JSX which is a syntax like HTML written directly in js. JSX is not a must as you can still do all by calling functions

- Creating Component using JSX
```js
import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
    return <h2>hello me, welcome to react</h2>
}

// rendering it to the root html
ReactDom.render(<Greeting/>, document.getElementById('root'))
```

- Creating components by calling functions
```js
import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
    return React.createElement('h1', {}, 'hello me, welcome to react')
}
```

## Some extensions
### Install Prettier - Code Formatter extension

### Enable emmet to work with JSX in the settings.json
```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
}
```
### install ES7 React/Redux/GraphQl/React-Native snippets extension

## JSX rules - it is still javascript 
- return single element from a component
- instead of wrapping everything in a div, use a fragment
```jsx
<>
    <div></div>
    <div></div>
</>
```
- use camelCase
`<button  onClick="">sub</button>`
instead of
`<button  onclick="">sub</button>`
- use `className` instead of `class`
- close every element
- use brackets to enclose JSX - it makes it so that the JSX does not have to be in the same line as the `return` keyword

## Nesting Components
```js
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
```
