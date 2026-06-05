import './Stats.css';

const STATS = [
  { value: '2.4M+', label: 'Monsters Registered' },
  { value: '840K', label: 'Matches Made' },
  { value: '4.9★', label: 'App Store Rating' },
  { value: '44', label: 'Countries & Planes of Existence' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__inner">
        {STATS.map((stat) => (
          <div className="stats__item" key={stat.label}>
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
