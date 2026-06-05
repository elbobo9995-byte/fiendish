import './SuccessStories.css';

const STORIES = [
  {
    quote:
      "I almost swiped left because of the profile picture. My friend said give it a chance. We've been together seven months. He is genuinely the funniest person I've ever met and I mean that without irony. The balloon thing was a lot at first. I've come around on it. Mostly.",
    name: 'Priya S.',
    location: 'Portland, OR',
    detail: 'Matched with Pennywise',
    gradient: 'linear-gradient(135deg, #e8d5c4 0%, #c4b5a4 100%)',
  },
  {
    quote:
      "He doesn't say much but he is incredibly handy around the house. Fixed my pipes, redid my floors, built me a dining table from scratch. I don't ask about the materials. The relationship is going really well.",
    name: 'Marcus T.',
    location: 'New Orleans, LA',
    detail: 'Matched with Leatherface',
    gradient: 'linear-gradient(135deg, #d4e8d5 0%, #b4c8b5 100%)',
  },
  {
    quote:
      "I know it's unconventional. My therapist also said that. But I have never felt more at home anywhere in my life and I think that counts for something. Yes there are some recurring issues with a previous tenant. We're working through it. Room 237 stays locked, that's just a boundary we've established.",
    name: 'Dani R.',
    location: 'Salem, MA',
    detail: 'Matched with The Overlook Hotel',
    gradient: 'linear-gradient(135deg, #d5d4e8 0%, #b5b4c8 100%)',
  },
];

export default function SuccessStories() {
  return (
    <section className="stories" id="success-stories">
      <div className="container stories__inner">
        <div className="stories__header">
          <span className="section-label">Real People, Real Matches</span>
          <h2 className="section-title stories__title">
            Love Finds a Way
          </h2>
          <p className="section-subtitle">
            Don't take our word for it. Here's what our members are saying.
          </p>
        </div>

        <div className="stories__grid">
          {STORIES.map((story) => (
            <article className="story-card" key={story.name}>
              <div
                className="story-card__avatar"
                style={{ background: story.gradient }}
                aria-hidden="true"
              />
              <blockquote className="story-card__quote">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <footer className="story-card__footer">
                <div className="story-card__identity">
                  <strong className="story-card__name">{story.name}</strong>
                  <span className="story-card__location">{story.location}</span>
                </div>
                <span className="story-card__detail">{story.detail}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
