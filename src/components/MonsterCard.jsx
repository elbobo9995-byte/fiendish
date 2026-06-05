import { useState } from 'react';
import './MonsterCard.css';

export default function MonsterCard({ monster }) {
  const [liked, setLiked] = useState(false);
  const [passed, setPassed] = useState(false);

  const handleLike = () => {
    setLiked((v) => !v);
    setPassed(false);
  };

  const handlePass = () => {
    setPassed((v) => !v);
    setLiked(false);
  };

  return (
    <article className={`monster-card ${liked ? 'monster-card--liked' : ''} ${passed ? 'monster-card--passed' : ''}`}>

      {/* ── Photo ─────────────────────────────────────────────── */}
      <div className="mc-photo" style={{ background: monster.gradient }}>
        {monster.image && (
          <img src={monster.image} alt={monster.name} className="mc-photo__img" />
        )}
        <div className="mc-photo__scrim" />
        <div className="mc-photo__identity">
          <h2 className="mc-photo__name">
            {monster.name}
            <span className="mc-photo__age">, {monster.age ?? '???'}</span>
          </h2>
        </div>
        {liked && (
          <div className="mc-photo__liked-badge">LIKED ♥</div>
        )}
      </div>

      {/* ── Card body ─────────────────────────────────────────── */}
      <div className="mc-body">

        {/* Location + tagline */}
        <div className="mc-meta">
          <span className="mc-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            {monster.location}
          </span>
          <p className="mc-tagline">&ldquo;{monster.tagline}&rdquo;</p>
        </div>

        <div className="mc-divider" />

        {/* About */}
        <section className="mc-about">
          <span className="mc-section-label">About {monster.name.split(' ')[0]}</span>
          <p className="mc-about__text">{monster.about}</p>
        </section>

        <div className="mc-divider" />

        {/* Prompts */}
        <div className="mc-prompts">
          {monster.prompts.map((prompt, i) => (
            <div className="mc-prompt" key={i}>
              <span className="mc-prompt__question">{prompt.question}</span>
              <p className="mc-prompt__answer">{prompt.answer}</p>
            </div>
          ))}
        </div>

        <div className="mc-divider" />

        {/* Stats */}
        <section className="mc-stats">
          <span className="mc-section-label">The basics</span>
          <div className="mc-stats__pills">
            {monster.stats.map((stat) => (
              <div className="mc-stat-pill" key={stat.label} title={stat.label}>
                <span className="mc-stat-pill__emoji">{stat.emoji}</span>
                <span className="mc-stat-pill__value">{stat.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Actions */}
        <div className="mc-actions">
          <button
            className={`mc-action-btn mc-action-btn--pass ${passed ? 'mc-action-btn--active' : ''}`}
            onClick={handlePass}
            aria-label="Pass"
            aria-pressed={passed}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            <span>{passed ? 'Passed' : 'Pass'}</span>
          </button>

          <button
            className={`mc-action-btn mc-action-btn--like ${liked ? 'mc-action-btn--active' : ''}`}
            onClick={handleLike}
            aria-label="Like"
            aria-pressed={liked}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>{liked ? 'Liked!' : 'Like'}</span>
          </button>
        </div>

      </div>
    </article>
  );
}
