import { Link, useSearchParams } from 'react-router-dom';
import { monsters } from '../data/monsters';
import MonsterCardCompact from '../components/MonsterCardCompact';
import './Browse.css';

const FILTER_PILLS = ['Near Me', 'Online Now', 'New Arrivals', 'Verified Only', 'Serious Only'];
const PAGE_SIZE = 9;

export default function Browse() {
  const [searchParams] = useSearchParams();
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const totalPages = Math.ceil(monsters.length / PAGE_SIZE);
  const visible = monsters.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="browse">
      {/* Sub-header */}
      <div className="browse__subheader">
        <div className="browse__subheader-inner">
          <div className="browse__title-row">
            <h1 className="browse__title">Discover</h1>
            <span className="browse__count">{monsters.length} near you</span>
          </div>
          <div className="browse__filters" role="list">
            {FILTER_PILLS.map((pill) => (
              <button className="browse__filter-pill" key={pill} role="listitem">
                {pill}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="browse__feed">
        <div className="browse__grid">
          {visible.map((monster) => (
            <MonsterCardCompact key={monster.id} monster={monster} />
          ))}
        </div>

        {/* Pagination */}
        <div className="browse__pagination">
          {page > 1 && (
            <Link to={`/browse?page=${page - 1}`} className="btn btn-outline browse__page-btn">
              ← Back
            </Link>
          )}
          <span className="browse__page-indicator">{page} / {totalPages}</span>
          {page < totalPages && (
            <Link to={`/browse?page=${page + 1}`} className="btn btn-primary browse__page-btn">
              Next →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
