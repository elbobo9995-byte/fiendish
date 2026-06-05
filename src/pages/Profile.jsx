import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Cake, User, MapPin,
  Briefcase, Car, Home, MessageCircle, Heart,
  Clock, Utensils, PawPrint, Activity,
} from 'lucide-react';
import { monsters } from '../data/monsters';
import './Profile.css';

const ACCENT = '#C8102E';

const STAT_ICONS = {
  'Occupation':          Briefcase,
  'Commute':             Car,
  'Living situation':    Home,
  'Communication style': MessageCircle,
  'Looking for':         Heart,
  'Schedule':            Clock,
  'Diet':                Utensils,
  'Pets':                PawPrint,
  'Exercise':            Activity,
};

export default function Profile() {
  const { id } = useParams();
  const monster = monsters.find((m) => m.id === id);
  const [liked, setLiked] = useState(false);
  const [passed, setPassed] = useState(false);

  if (!monster) {
    return (
      <div className="profile-404">
        <p>Profile not found.</p>
        <Link to="/browse" className="btn btn-primary">Back to Browse</Link>
      </div>
    );
  }

  const handleLike = () => { setLiked((v) => !v); setPassed(false); };
  const handlePass = () => { setPassed((v) => !v); setLiked(false); };

  return (
    <div className="profile">
      <div className="profile__inner">

        {/* ── Top: two columns ──────────────────────────────────── */}
        <div className="profile__top">

          {/* Left — unified card: photo + metadata */}
          <div className="profile__col">
            <div className="profile__left-card">
              <div
                className="profile__photo"
                style={{ background: monster.gradient }}
                role="img"
                aria-label={`${monster.name}'s profile photo`}
              >
                {monster.image && (
                  <img src={monster.image} alt={monster.name} className="profile__photo-img" />
                )}
              </div>
              <div className="profile__meta">
                <h1 className="profile__name">{monster.name}</h1>
                <ul className="profile__meta-lines">
                  <li className="profile__meta-line">
                    <Cake size={20} color={ACCENT} className="profile__meta-icon" aria-hidden="true" />
                    {monster.age ?? 'Age unknown'}
                  </li>
                  <li className="profile__meta-line">
                    <User size={20} color={ACCENT} className="profile__meta-icon" aria-hidden="true" />
                    {monster.gender}
                  </li>
                  {monster.sexuality && (
                    <li className="profile__meta-line">
                      <Heart size={20} color={ACCENT} className="profile__meta-icon" aria-hidden="true" />
                      {monster.sexuality}
                    </li>
                  )}
                  <li className="profile__meta-line">
                    <MapPin size={20} color={ACCENT} className="profile__meta-icon" aria-hidden="true" />
                    {monster.location}
                  </li>
                  <li className="profile__meta-line">
                    <span
                      className={`profile__status-dot ${monster.isOnline ? 'profile__status-dot--online' : 'profile__status-dot--offline'}`}
                      aria-hidden="true"
                    />
                    {monster.isOnline ? 'Online now' : 'Offline'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right — About Me (full right column) */}
          <div className="profile__col">
            <div className="profile__card">
              <span className="profile__block-label">About Me</span>
              <p className="profile__about-text">{monster.about}</p>
            </div>
          </div>

        </div>

        {/* ── The Basics — full width ───────────────────────────── */}
        <div className="profile__block">
          <span className="profile__block-label">The Basics</span>
          <div className="profile__stats-grid profile__stats-grid--wide">
            {monster.stats.map((stat) => {
              const Icon = STAT_ICONS[stat.label];
              return (
                <div className="profile__stat" key={stat.label}>
                  {Icon && <Icon size={28} color={ACCENT} className="profile__stat-icon" aria-hidden="true" />}
                  <span className="profile__stat-label">{stat.label}</span>
                  <span className="profile__stat-value">{stat.value}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Interests + Trivia — side by side ────────────────── */}
        <div className="profile__side-by-side">
          {monster.interests && monster.interests.length > 0 && (
            <div className="profile__block">
              <span className="profile__block-label">Interests</span>
              <p className="profile__about-text">{monster.interests.join(', ')}</p>
            </div>
          )}
          {monster.trivia && monster.trivia.length > 0 && (
            <div className="profile__block">
              <span className="profile__block-label">Trivia</span>
              <ul className="profile__trivia">
                {monster.trivia.map((item, i) => (
                  <li className="profile__trivia-item" key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ── Prompts — full width ───────────────────────────────── */}
        {monster.prompts.map((prompt, i) => (
          <div className="profile__block" key={i}>
            <span className="profile__block-label">{prompt.question}</span>
            <p className="profile__prompt-answer">{prompt.answer}</p>
          </div>
        ))}

      </div>

      {/* ── Sticky action bar ─────────────────────────────────── */}
      <div className="profile__action-bar" role="group" aria-label="Profile actions">
        <div className="profile__action-inner">
          <button
            className={`profile__action-btn profile__action-btn--pass ${passed ? 'profile__action-btn--active' : ''}`}
            onClick={handlePass}
            aria-pressed={passed}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            {passed ? 'Passed' : 'Pass'}
          </button>
          <button
            className={`profile__action-btn profile__action-btn--like ${liked ? 'profile__action-btn--active' : ''}`}
            onClick={handleLike}
            aria-pressed={liked}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {liked ? 'Liked!' : 'Like'}
          </button>
        </div>
      </div>
    </div>
  );
}
