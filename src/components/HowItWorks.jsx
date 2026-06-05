import { UserPlus, Search, MessageCircle, Sparkles } from 'lucide-react';
import './HowItWorks.css';

const ACCENT = '#C8102E';

const STEPS = [
  {
    number: '01',
    Icon: UserPlus,
    title: 'Create Your Profile',
    description:
      'Tell us about yourself — your interests, what you\'re looking for, and a few photos. Our compatibility algorithm does the rest.',
  },
  {
    number: '02',
    Icon: Search,
    title: 'Browse Profiles',
    description:
      'Explore a curated feed of potential matches. Filter by distance, shared interests, or level of commitment.',
  },
  {
    number: '03',
    Icon: MessageCircle,
    title: 'Start a Conversation',
    description:
      'Send a like, leave a comment on something specific, or just say hello. Matches unlock a private chat.',
  },
  {
    number: '04',
    Icon: Sparkles,
    title: 'Meet Your Match',
    description:
      'Take it offline when you\'re ready. We\'ll even suggest date ideas based on your shared preferences.',
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw" id="how-it-works">
      <div className="container hiw__inner">
        <div className="hiw__header">
          <span className="section-label">Simple by Design</span>
          <h2 className="section-title hiw__title">
            How Fiendish Works
          </h2>
          <p className="section-subtitle hiw__subtitle">
            From profile to first date in four straightforward steps.
            No games, no guesswork — just genuine connection.
          </p>
        </div>

        <div className="hiw__steps">
          {STEPS.map((step, i) => (
            <div className="hiw__step" key={step.number}>
              <div className="hiw__step-number">{step.number}</div>
              <div className="hiw__step-icon">
                <step.Icon size={32} color={ACCENT} aria-hidden="true" />
              </div>
              <h3 className="hiw__step-title">{step.title}</h3>
              <p className="hiw__step-desc">{step.description}</p>
              {i < STEPS.length - 1 && (
                <div className="hiw__connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
