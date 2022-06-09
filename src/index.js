import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
     return (
          <section className="booklist">
               {books.map((book) => (
                    <Book key={book.id}  {...book} />
               ))}
          </section>
     );
}

const books = [
     {    id: 1,
          title: "shake and bake",
          author: "mc",
          downloads: 2,
     },
     {
          id: 2, 
          title: "Diamond maker",
          author: "daniel",
          downloads: 89,
     },
     {
          id: 3,
          title: "Canada coming",
          author: "pan ed",
          downloads: 89,
     },
];

const Book = (props) => {
     return (
          <article className="book">
               <h1 className="title">{props.title}</h1>
               <h4 className="author"> {props.author} </h4>
               {props.children}
          </article>
     );
};

ReactDom.render(<BookList />, document.getElementById("root"));
