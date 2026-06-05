import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__inner">
        <span className="not-found__code">404</span>
        <h1 className="not-found__headline">This Page Does Not Exist.</h1>
        <p className="not-found__sub">
          Neither does your complaint. We appreciate your understanding.
        </p>
        <Link to="/browse" className="btn btn-primary btn-lg">
          Back to Browse
        </Link>
      </div>
    </div>
  );
}
