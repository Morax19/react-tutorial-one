import React from 'react'

const Book = (props) =>{
//
  const {img, title, author} = props;

  const clickHandler = (e) =>{
    console.log(e);
    console.log(e.target);
    alert('Hello Wolrd');
  };
  const complexExample = (author) =>{
    console.log(author);
  };
  return (
    <article className = 'book' onMouseOver={() => {
      console.log(title)
    }}>
      <img src={img} alt='' />
      <h3 onClick={() => console.log(title)}>{title}</h3>
      <h4>{author}</h4>
      <button onClick={clickHandler}>Example 1</button>
      <button onClick={() => complexExample(author)}>Example 2</button>
    </article>
  )
}

export default Book