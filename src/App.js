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
      <header>
        <h1>Freeshelf</h1>
      </header>
      {bookData.map((book, index) => (
        <>
          <div className="container">
            <div className="fullBox">
              <div key={index} className="basicBox">
                <Book
                  bookTitle={book.title}
                  bookAuthor={book.author}
                  shortDesc={book.shortDescription}
                  bookImg={book.coverImageUrl}
                />
              </div>
              <div className="buttonContainer">
                <div className="buttonBox">
                  <button
                    className="moreButton"
                    onClick={() => {
                      setActiveBook(index);
                      setShowMore(!showMore);
                    }}
                  >
                    More Information
                  </button>
                </div>
              </div>
              <div className="moreContainer">
                <div className="moreBox">
                  {activeBook === index && showMore && (
                    <>
                      <div className="bookUrl">
                        <strong>URL:</strong> <a href={book.url}>{book.url}</a>
                      </div>
                      <div className="bookPub">
                        <strong>Publisher:</strong> {book.publisher}
                      </div>
                      <div className="bookPubDate">
                        <strong>Publication Date:</strong>{' '}
                        {book.publicationDate}
                      </div>
                      <div className="bookFullDesc">
                        <strong>Full Description:</strong>
                      </div>
                      <div className="bookFullDescText">
                        {book.detailedDescription}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

const Book = ({ bookTitle, bookAuthor, shortDesc, bookImg }) => {
  return (
    <>
      <div className="infoContainer">
        <div className="infoBox">
          <div className="detailBox">
            <p className="bookTitle">{bookTitle}</p>
            <p className="bookAuthor">{bookAuthor}</p>
            <p className="shortDesc">{shortDesc}</p>
          </div>
          <div className="imgBox">
            <img src={bookImg} className="bookImg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
