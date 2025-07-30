import { useEffect, useState } from 'react';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(res => {
        if (!res.ok) throw new Error('Error fetching quotes');
        return res.json();
      })
      .then(data => {
        setQuotes(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Loading quotes...</p>;
  if (error) return <p className="error-text">Failed to load quotes. Try again later.</p>;

  return (
    <div className="container">
      <h1 className="page-title">Random Quotes</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            “{quote.text}”
            {quote.book?.title && (
              <span className="quote-book">
                — <em>{quote.book.title}</em>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
