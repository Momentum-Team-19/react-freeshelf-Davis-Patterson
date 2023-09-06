import './App.css';
import bookData from './book-data.json';

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      {bookData.map((book) => (
        <p>{book.title}</p>
      ))}
    </div>
  );
}

function Book(book) {
  return <p>{book['title']}</p>;
}

export default App;
