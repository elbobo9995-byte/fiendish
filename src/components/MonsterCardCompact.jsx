import { Link } from 'react-router-dom';
import './MonsterCardCompact.css';

export default function MonsterCardCompact({ monster }) {
  return (
    <article className="mcc">
      {/* Photo */}
      <div className="mcc__photo" style={{ background: monster.gradient }}>
        {monster.image && (
          <img src={monster.image} alt={monster.name} className="mcc__photo-img" />
        )}

        {/* Status dot — top right */}
        <div
          className={`mcc__status ${monster.isOnline ? 'mcc__status--online' : 'mcc__status--offline'}`}
          aria-label={monster.isOnline ? 'Online' : 'Offline'}
          title={monster.isOnline ? 'Online' : 'Offline'}
        />

        {/* Name + age overlay */}
        <div className="mcc__scrim" />
        <div className="mcc__identity">
          <span className="mcc__name">{monster.name}</span>
          {monster.age != null && <span className="mcc__age">, {monster.age}</span>}
        </div>
      </div>

      {/* View Profile button */}
      <Link
        to={monster.banned ? `/banned/${monster.id}` : monster.warning ? `/warning/${monster.id}` : `/profile/${monster.id}`}
        className="mcc__cta"
      >
        View Profile
      </Link>
    </article>
  );
}
