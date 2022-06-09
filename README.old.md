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

## JSX rules - it is still javascript

-    return single element from a component
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
