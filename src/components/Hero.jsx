import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import './Hero.css';

const MOSAIC_CARDS = [
  {
    id: 'pinhead',
    name: 'Pinhead',
    age: null,
    image: '/images/pinhead.jpg',
    gradient: 'linear-gradient(160deg, #0a0a0a 0%, #1a1010 40%, #0d0a14 100%)',
    position: 'left',
  },
  {
    id: 'patrick-bateman',
    name: 'Patrick Bateman',
    age: 27,
    image: '/images/patrick-bateman.jpg',
    gradient: 'linear-gradient(160deg, #0f0f0f 0%, #1a1a1a 40%, #141414 100%)',
    position: 'center',
  },
  {
    id: 'freddy-krueger',
    name: 'Freddy Krueger',
    age: 70,
    image: '/images/freddy-krueger.jpg',
    gradient: 'linear-gradient(160deg, #1a0800 0%, #2d0d00 40%, #1a0a0a 100%)',
    position: 'right',
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-treatment" aria-hidden="true">
        <div className="hero__bg-blob hero__bg-blob--1" />
        <div className="hero__bg-blob hero__bg-blob--2" />
      </div>

      <div className="container hero__inner">
        {/* Left: copy */}
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span className="section-label">Now in Beta</span>
            <span className="hero__eyebrow-dot" />
            <span className="hero__eyebrow-stat">2.4M+ registered</span>
          </div>

          <h1 className="hero__headline">
            Find Your<br />
            Perfect Match.
            <span className="hero__headline-accent"> Whatever<br />They May Be.</span>
          </h1>

          <p className="hero__sub">
            Fiendish connects you with extraordinary individuals from all walks
            of life — and death. Real compatibility. Real connection. No judgment.
          </p>

          <div className="hero__actions">
            <Link to="/browse" className="btn btn-primary btn-lg">Start Matching</Link>
            <a href="#how-it-works" className="btn btn-outline btn-lg">See How It Works</a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={19} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
              ))}
            </div>
            <p className="hero__trust-text">
              <strong>4.9 stars</strong> · Over 840K matches made
            </p>
          </div>
        </div>

        {/* Right: profile card mosaic */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__mosaic">
            {MOSAIC_CARDS.map((card) => (
              <div key={card.id} className={`hero__mosaic-card hero__mosaic-card--${card.position}`}>
                <div className="hero__mosaic-photo" style={{ background: card.gradient }}>
                  <img src={card.image} alt={card.name} className="hero__mosaic-img" />
                  <div className="hero__mosaic-scrim" />
                  <div className="hero__mosaic-identity">
                    <span className="hero__mosaic-name">{card.name}</span>
                    {card.age != null && <span className="hero__mosaic-age">, {card.age}</span>}
                  </div>
                </div>
                <div className="hero__mosaic-cta">View Profile</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
