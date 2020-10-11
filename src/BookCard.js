import React, {useState} from "react";
import { Link } from "react-router-dom";

const BookCard = props => {
  const book = props.book;
  const authors = book.authors.map(author => (
    <Link to={`/authors/${author.id}`}>
      <p>{author.name}</p>
    </Link>
  ))

  return (
    <tr>
      <th scope="row">{book.id}</th>
      <Link to={`/books/${book.color}`}>
        <td><button className="btn" style={{backgroundColor: book.color}}/></td>
      </Link>
      <td>{authors}</td>
      <td>{book.title}</td>
      {book.available ? <td>available</td> : <td>not available</td>}
    </tr>

  );
};

export default BookCard;
