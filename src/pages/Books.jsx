import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Dr. Seuss Books</h1>
      <div className="books-grid">
        {books.map(book => (
          <Link to={`/books/${book.id}`} key={book.id} className="book-card">
            <img
              src={book.image}
              alt={book.title}
              className="book-img"
              onError={(e) =>
                e.target.src = `https://via.placeholder.com/150x200?text=${encodeURIComponent(book.title)}`
              }
            />
            <p className="book-title">{book.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
