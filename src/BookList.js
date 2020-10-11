import React, { useState } from "react";
import { useParams } from "react-router-dom";


// Components
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

const BookList = props => {
  const [query, setQuery] = useState("");
  const {color} = useParams();

  let filteredBooks = props.books.filter(book =>
    book.title
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  if (color)
    filteredBooks = filteredBooks.filter(book => book.color === color)

  const bookCards = filteredBooks.map(book => (
    <BookCard book={book} />
  ));

  return (
    <div>
      <h3>Books</h3>
      <SearchBar handleFilter={setQuery} />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">color</th>
            <th scope="col">authors</th>
            <th scope="col">title</th>
            <th scope="col">available</th>
          </tr>
        </thead>
        <tbody>
          {bookCards}
        </tbody>
      </table>



    </div>
  );
};

export default BookList;
