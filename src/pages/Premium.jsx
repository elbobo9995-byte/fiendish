import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import './Premium.css';

const PAYMENT_OPTIONS = [
  { id: 'soul',      label: 'Your Soul',                    note: null },
  { id: 'other',     label: "Someone Else's Soul",          note: '+processing fee' },
  { id: 'object',    label: 'One Rare Cursed Object',       note: 'subject to appraisal' },
  { id: 'sacrifice', label: 'A Sacrifice',                  note: 'details provided upon selection' },
];

const FEATURES = [
  {
    title: 'Unlimited Likes',
    desc:  'No daily cap. No cooldown. They will know.',
  },
  {
    title: 'See Who Liked You',
    desc:  'Names, locations, and in some cases, coordinates.',
  },
  {
    title: 'Advanced Filters',
    desc:  "Filter by species, dimension, threat level, and one additional category we don't display publicly.",
  },
  {
    title: 'Read Receipts',
    desc:  'Know when your message has been read. Know when it has been read multiple times. Know when it is being read right now.',
  },
  {
    title: 'Priority Placement',
    desc:  'Your profile appears first in searches. It also appears in other places. This is a Premium feature.',
  },
  {
    title: 'Fiendish Passport',
    desc:  'Browse profiles in any location on Earth. And several locations that are not.',
  },
  {
    title: 'Profile Boost',
    desc:  'Be seen by 10x more people for 30 minutes. The boost cannot be cancelled once started.',
  },
  {
    title: 'Incognito Mode',
    desc:  'Browse without being seen. Note: Incognito Mode does not apply to all of our members.',
  },
];

const TESTIMONIALS = [
  { quote: 'Worth every soul.',                   attr: 'Rebecca M., Austin TX' },
  { quote: 'The coordinates feature alone.',      attr: 'Daniel F., Oslo' },
  { quote: "I used someone else's. No regrets.", attr: 'Anonymous' },
];

export default function Premium() {
  const [selected, setSelected] = useState('soul');
  const navigate = useNavigate();
  const isSoul = selected === 'soul';

  function handleUnlock() {
    if (isSoul) navigate('/premium/confirmed');
  }

  return (
    <div className="premium">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="premium__hero">
        <span className="section-label">Fiendish Premium</span>
        <h1 className="premium__headline">
          More Matches. More Possibilities. More.
        </h1>
        <p className="premium__subheadline">
          Unlock the full Fiendish experience. For those who are serious about connection — and what connection costs.
        </p>
      </section>

      {/* ── Pricing Card ─────────────────────────────────────── */}
      <section className="premium__card-wrap">
        <div className="premium__card">
          <div className="premium__tier-badge">Most Committed</div>
          <h2 className="premium__tier-name">Premium</h2>

          <div className="premium__payment-section">
            <p className="premium__payment-label">Select payment method</p>
            <div className="premium__payment-options">
              {PAYMENT_OPTIONS.map((opt) => (
                <label key={opt.id} className="premium__payment-option">
                  <input
                    type="radio"
                    name="payment"
                    className="premium__radio"
                    checked={selected === opt.id}
                    onChange={() => setSelected(opt.id)}
                  />
                  <span className="premium__option-label">{opt.label}</span>
                  {opt.note && (
                    <span className="premium__option-note">{opt.note}</span>
                  )}
                </label>
              ))}
            </div>
          </div>

          <p className="premium__card-note">
            Payment is binding. Fiendish does not offer refunds.{' '}
            <Link to="/all-matches-final" className="premium__card-link">
              Please see our All Matches Final policy.
            </Link>
          </p>

          <button
            className={`btn btn-primary btn-lg premium__cta${isSoul ? '' : ' premium__cta--inert'}`}
            onClick={handleUnlock}
          >
            Unlock Premium
          </button>
          {!isSoul && (
            <p className="premium__cta-note">
              This payment method is currently under review by our acquisitions team.
            </p>
          )}
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="premium__features-wrap container">
        <div className="premium__features">
          {FEATURES.map((f) => (
            <div key={f.title} className="premium__feature">
              <Check size={15} strokeWidth={2.5} className="premium__check" />
              <p className="premium__feature-text">
                <span className="premium__feature-title">{f.title}</span>
                <span className="premium__feature-sep"> — </span>
                <span className="premium__feature-desc">{f.desc}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="premium__testimonials-wrap">
        <div className="container premium__testimonials">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="premium__testimonial">
              <p className="premium__testimonial-quote">"{t.quote}"</p>
              <p className="premium__testimonial-attr">— {t.attr}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Fine Print ───────────────────────────────────────── */}
      <p className="premium__fine-print container">
        Fiendish Premium is a recurring arrangement. Cancellation requests are reviewed on a case-by-case basis by a panel that meets infrequently. By purchasing Premium you confirm that you are the legal or spiritual owner of any soul submitted as payment, or that you accept full responsibility for having submitted one that you were not. Fiendish is not a licensed soul broker in all jurisdictions.
      </p>

    </div>
  );
}
