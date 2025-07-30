import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Books</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  );
}
