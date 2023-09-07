import { useState } from 'react';
import './App.css';
import bookData from './book-data.json';

function App() {
  const [showMore, setShowMore] = useState(false);
  const [activeBook, setActiveBook] = useState(null);
  console.log('activeBook', activeBook);
  return (
    // map through all the data for display, create variables for each thing
    <div>
      <h1>Freeshelf</h1>
      {bookData.map((book, index) => (
        <div key={index}>
          <Book
            bookTitle={book.title}
            bookAuthor={book.author}
            bookImg={book.coverImageUrl}
          />
          <button
            onClick={() => {
              setActiveBook(index);
              setShowMore(!showMore);
            }}
          >
            More Information
          </button>
          {activeBook === index && showMore && (
            <>
              <div>URL: {book.url}</div>
              <div>Publisher: {book.publisher}</div>
              <div>Publication Date: {book.publicationDate}</div>
              <div>Full Description: {book.detailedDescription}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

const Book = ({ bookTitle, bookAuthor, bookImg }) => {
  return (
    <div>
      <p>{bookTitle}</p>
      <p>{bookAuthor}</p>
      <img src={bookImg}></img>
    </div>
  );
};

export default App;
