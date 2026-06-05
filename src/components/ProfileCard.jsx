import './ProfileCard.css';

export default function ProfileCard({ card, index }) {
  const isTop = index === 0;

  return (
    <div
      className={`profile-card ${isTop ? 'profile-card--top' : ''}`}
      style={{
        '--card-index': index,
        transform: `rotate(${index === 1 ? '3deg' : index === 2 ? '-2deg' : '0deg'}) translateY(${index * -6}px)`,
        zIndex: 10 - index,
      }}
    >
      <div
        className="profile-card__image"
        style={{ background: card.gradient }}
      />
      <div className="profile-card__body">
        {card.badge && (
          <span className="profile-card__badge">{card.badge}</span>
        )}
        <div className="profile-card__identity">
          <span className="profile-card__name">{card.name}</span>
          <span className="profile-card__age">{card.age}</span>
        </div>
        <p className="profile-card__tagline">{card.tagline}</p>
      </div>
    </div>
  );
}
