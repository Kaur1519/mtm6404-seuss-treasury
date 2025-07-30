import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <p className="loading-text">Loading...</p>;

  return (
    <div className="container">
      <h1 className="page-title">{book.title}</h1>
      <img src={book.image} alt={book.title} className="book-detail-img" />
      <p>{book.description}</p>
    </div>
  );
}
