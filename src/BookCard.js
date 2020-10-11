import React, {useState} from "react";
import { Link } from "react-router-dom";

const BookCard = props => {
  const book = props.book;
  const [clicked,setClicked] = useState(false)
  const authors = book.authors.map(author => (
    <Link to={`/authors/${author.id}`} className="card">
      <p>{author.name}</p>
    </Link>
  ))

  const handleClick = () => {
    if(clicked){
      props.handleFilter("")
      setClicked(!clicked)
    }else{
      props.handleFilter(book.color)
      setClicked(!clicked)
    }
  }

  return (
    <tr>
      <th scope="row">{book.id}</th>
      <td><button className="btn" style={{backgroundColor: book.color}} onClick={handleClick}/></td>
      <td>{authors}</td>
      <td>{book.title}</td>
      {book.available ? <td>available</td> : <td>not available</td>}
    </tr>

  );
};

export default BookCard;
