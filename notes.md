# Notes

## Installation and setup

-    Run `npx create-react-app .` so as to create a react app in the current folder
     > npx on the first line is not a typo — it’s a package runner tool that comes with npm 5.2+

## Introduction (Whats React)

It's a javascript library for building UI. UI is broken down into components which are built separately and then assembled to make the UI you want

> there is only one html file in React, everything goes there

## Creating First Component

### A component is a unit of user interface. Its just a javascript function defined with first letter being capitalized. It also has to return JSX which is a syntax like HTML written directly in js. JSX is not a must as you can still do all by calling functions

-    Creating Component using JSX

```js
import React from "react";
import ReactDom from "react-dom";

function Greeting() {
     return <h2>hello me, welcome to react</h2>;
}

// rendering it to the root html
ReactDom.render(<Greeting />, document.getElementById("root"));
```

-    Creating components by calling functions

```js
import React from "react";
import ReactDom from "react-dom";

function Greeting() {
     return React.createElement("h1", {}, "hello me, welcome to react");
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

## JSX rules -

-    return single element from a component just like normal javascript
-    instead of wrapping everything in a div, use a fragment

```jsx
<>
     <div></div>
     <div></div>
</>
```

-    use camelCase
     `<button onClick="">sub</button>`
     instead of
     `<button onclick="">sub</button>`
-    use `className` instead of `class`
-    close every element
-    use brackets to enclose JSX - it makes it so that the JSX does not have to be in the same line as the `return` keyword

## Nesting Components

```js
const Greeting = () => {
     return (
          <div>
               <Person />
               <Message />
          </div>
     );
};

const Person = () => <h2>Victor Mike</h2>;
const Message = () => {
     return <p>hello from me</p>;
};
```

## Adding CSS to the React javascript file

-    ### including external css file

```css
.greeting {
     color: pink;
}

.hello {
     background: black;
}
```

```js
import "./index.css"; // for css in same folder as the js file
// the styling in index.css will then be applied to all our components
```

Adding CSS class from `index.css` to an element in a Component. Use 'className' instead of 'class'

```js
const Greeting = () => <h1 className="greeting hello">hello me</h1>;
```

-    ### Adding inline styling
     The css styles will be passed as javascript object, with the css property/value as object properties. To add javascript code inside JSX, write it inside `{ }`. It has to be an expression (it has to return something)
     Thats why we have `{ {} }`

```js
const Greeting = () => (
     <h1 style={{ padding: "2rem", marginTop: "1rem", fontSize: "30px" }}></h1>
);
```

## Props

```js
// defining a component with props (properties)
const Book = (props) => {
     return (
          <article className="book">
               <h1 className="title">{props.title}</h1>
               <h4 className="author"> {props.author} </h4>
               <h5>{props.downloads}</h5>
               {console.log(props)}
          </article>
     );
};

//  creating mulitple instances of the Book component passing in the props
const BookList = () => {
     return (
          <section>
               <Book title="Shake and Bake" author="nath" dowloads={55} />
               <Book
                    title="Fake it till you make it"
                    author="bob daniel"
                    dowloads={200}
               />
          </section>
     );
};
```

### children props

children props is used to access JSX written in between the opening and closing tag of a component.
You can then decide where those children are to be rendered.

```js
const BookList = () => {
     return (
          <Book title="first book">
               <p> some description</p>
               <h4>
                    Date created: <span>08-06-2022</span>
               </h4>
          </Book>
     );
};

const Book = (props) => {
     <article>
          <h1 className="title">{props.title}</h1>
          <h4 className="author"> {props.author} </h4>
          {props.children}
     </article>;
};
```

## Rendering a list in a component
React knows how to render the content of a list when you just pass in the name of the list, provided the list is not a list of objects.
Use the map function of array to return a JSX element for each element in the array.
Each list item should have a unique `key` prop with a unique id or React will complain

```javascript
// simple list of strings
const names = ['vi', 'nano', 'atom', 'vscode']
function Names() {
    return (
        <section> { names.map( name => <h2> {name} </h2> ) } </section>
    )
}

// a bit complex list rendering
const books = [
     {
          title: "shake and bake",
          author: "mc",
          downloads: 2,
     },
     {
          title: "Diamond maker",
          author: "daniel",
          downloads: 89,
     },
     {
          title: "Canada coming",
          author: "pan ed",
          downloads: 89,
     }
];

function BookList() {
     return (
          <section className="booklist"> { books.map( book =>  <Book key={book.id}  {...book} />  )}</section>
     );
}
```

## Basic Event handling
`onClick` and `onMouseOver` events
```js
const Book = (props) => {
     const btnClickHandler = () => {
          console.log(props.title);
     };

     const showName = (title) => console.log(title);

     return (
          <article className="book" onMouseOver={ () => {
               showName(props.title)
          }}>
               <h1 className="title">{props.title}</h1>
               {props.children}
               <button onClick={btnClickHandler}>{props.title}</button>
               <button onClick={ () => console.clear()}>Clear the console</button>
          </article>
     );
};

```

## Hooks
> Hooks are useful functions we can use to achieve specific functionality in React

### useState hook
This hook is used to manage a value that will be displayed in a React Component but which we also need to be able to update/change e.g the text in a header element inside a component.
It triggers re-rendering so that the new value can appear on the DOM
`useState()` takes a default value and returns an array of two elements. The first element is the `value` and the second element is a `function` that will be used to update that value. The data type of the value can be any valid javascript type; string, number, boolean, object, array
A basic example
```js
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
```
### some general notes on hooks
-  They begin with `use` e.g `useState`, `useEffect`
-  You can only call them inside a React component whose name that begins with capital letters
-  You have to call them inside React component
- They can't be called conditionally (i.e inside if() statements)

### useState using array
```js
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
                              <button type="button" onClick={ ()=> deletePerson(person.id) }>remove</button>
                         </>
                    );
               })}
          </div>
     );
};
```

### useState with object
```js
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
```

### useState with number
```js
export default function () {
     const [value, setValue] = React.useState(0);

     const incrementCount = () => {
     //     setValue of the useState is an asynchronous function.
     // Passing a function instead of just the new value is useful 
     // when you want to make sure that multiple calls to setValue()
     // will wait in line and not execute in parallel. It also give us acces to
     // the previous value of state, maybe we may want to modifiy and return that 
     // as the new value
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
```

### useEffect Hook
useEffect() by default runs after every re-render. It is used to run side effects which are things to be done outside a component e.g data fetching, signing up for subscription, etc.
```js
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    const [name, setName]  = useState('vic');

    // the callback passed is by default run whenever a the component is re-rendered
    useEffect(() => {
        document.title = `New messages (${value})`;
        console.log('document update')
    })

    // passing an empty array as the second argument to useEffect will make it run only the first time the component is rendered
    useEffect(() => {
        console.log('empty use effect')
    }, [])

    // passing state values inside the array will make the useEffect to run first time the component is rendered and everytime any of the states in the array is re-rendered. These states are the dependencies for the useEffect
    useEffect(() => {
        console.log(name + ' from dep')
        console.log(value + ' from dep')
    }, [value, name])

  return (
    <>
        <h1>{value}</h1>
        <button type="button" onClick={() => setValue(value + 1)}>click me</button>
        <button type='button' onClick={() => setName(name + value)}>change name</button>
    </>
  )
}
```

### using the useEffect() cleanup function
this is just a function that useEffect can return. Once useEffect runs for the first time, this function is returned and will be run before the useEffect() is run again. You can put code that cleans up stuff like removing eventlisteners here before they are setup again when useEffect runs
```js
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
```
### Conditional Rendering
This means setting up the component to render depending on the value of some kind of state
