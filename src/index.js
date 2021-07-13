import React from 'react';
import ReactDOM from 'react-dom';
import data from './Books'
import Book from './Book'

//CSS
import './index.css'

function BookList(){
  return (
    <section className = 'booklist'>
      {data.map((book) =>{
        return (
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));