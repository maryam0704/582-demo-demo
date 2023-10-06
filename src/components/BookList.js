import React from "react";

const Books = () => {
 
  const books = [
    {
      title: "Book 1",
      author: "Author 1",
    },
    {
      title: "Book 2",
      author: "Author 2",
    },
    {
      title: "Book 3",
      author: "Author 3",
    },
  ];

  return (
    <div>
      <h1>List of Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong>{" "}
            {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
