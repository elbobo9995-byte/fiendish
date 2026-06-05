import { Link } from 'react-router-dom';
import './Privacy.css';

export default function Privacy() {
  return (
    <div className="privacy">
      <div className="privacy__inner">
        <p className="privacy__statement">
          You are under observation and being reviewed thoroughly.
        </p>
        <Link to="/browse" className="btn btn-primary btn-lg">I Understand</Link>
      </div>
    </div>
  );
}
