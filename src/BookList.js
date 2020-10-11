import React, { useState } from "react";

// Components
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

const BookList = props => {
  const [query, setQuery] = useState("");
  const [color, setColor] = useState("");

  let filteredBooks = props.books.filter(book =>
    book.title
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  filteredBooks = props.books.filter(book =>
    book.color.includes(color)
  );
  const bookCards = filteredBooks.map(book => (
    <BookCard book={book} handleFilter={setColor} />
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
