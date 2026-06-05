import './InvestorRelations.css';

const METRICS = [
  { value: 'Substantial',          label: 'Revenue' },
  { value: 'Considerable',         label: 'YoY Growth' },
  { value: 'More than before',     label: 'Total Users' },
  { value: 'Not a concern at this time', label: 'Runway' },
];

const PILLARS = [
  {
    title: 'Large Market',
    body: 'The addressable market for Fiendish is difficult to quantify using standard frameworks. We have quantified it using non-standard frameworks. The number was large. We are comfortable with the number.',
  },
  {
    title: 'Defensible Position',
    body: 'Fiendish has built significant competitive moats across technology, brand, and several categories that do not have names yet. We believe our position is defensible. We also believe it is something else, but we are not prepared to disclose what.',
  },
  {
    title: 'Experienced Team',
    body: 'Our leadership team brings decades of combined experience across technology, finance, and other areas. Several members of our team have been with us since the beginning. A few have been with us longer than that, which we acknowledge is unusual and decline to elaborate on.',
  },
];

const FAQS = [
  {
    q: 'Is Fiendish profitable?',
    a: 'Fiendish operates on a financial model that prioritizes long-term value creation over short-term metrics. Whether this constitutes profitability depends on definitions we are currently in the process of finalizing.',
  },
  {
    q: 'Who are Fiendish\'s current investors?',
    a: 'Fiendish has received investment from a small number of individuals and entities who prefer not to be named. We respect their preference. They have been very supportive. We do not always know where they are.',
  },
  {
    q: 'Is Fiendish planning an IPO?',
    a: 'We do not comment on strategic plans. We will say that we are aware of what an IPO is, we have discussed it, and the discussion was interesting. That is all we will say.',
  },
  {
    q: 'How does Fiendish generate revenue?',
    a: 'Through Premium subscriptions, strategic partnerships, and a third revenue stream that we are not currently disclosing. It is performing well. We are happy with it. Please do not ask follow-up questions about the third revenue stream.',
  },
];

export default function InvestorRelations() {
  return (
    <div className="ir">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="ir__hero">
        <div className="container ir__hero-inner">
          <span className="section-label">Investor Relations</span>
          <h1 className="ir__headline">
            A Strong Company. A Clear Vision. Significant Numbers.
          </h1>
          <p className="ir__subheadline">
            Fiendish is growing. We are pleased to share what we are able to share, which is some of it.
          </p>
        </div>
      </section>

      {/* ── Metrics ──────────────────────────────────────────── */}
      <section className="ir__metrics-wrap">
        <div className="container">
          <div className="ir__metrics">
            {METRICS.map((m) => (
              <div key={m.label} className="ir__metric">
                <span className="ir__metric-label">{m.label}</span>
                <span className="ir__metric-value">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Fiendish ─────────────────────────────────────── */}
      <section className="ir__pillars-wrap">
        <div className="container">
          <div className="ir__section-header">
            <span className="section-label">Why Fiendish</span>
          </div>
          <div className="ir__pillars">
            {PILLARS.map((p) => (
              <div key={p.title} className="ir__pillar">
                <h3 className="ir__pillar-title">{p.title}</h3>
                <p className="ir__pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financials ───────────────────────────────────────── */}
      <section className="ir__financials-wrap">
        <div className="container ir__financials">
          <div className="ir__section-header">
            <span className="section-label">Financial Information</span>
            <h2 className="ir__section-title">Our Financials</h2>
          </div>
          <p className="ir__financials-body">
            Fiendish maintains audited financial statements prepared in accordance with generally accepted accounting principles, as well as a separate set of statements prepared in accordance with principles that are not generally accepted but are considered binding in the jurisdictions where they apply. Both sets of statements are available to qualified investors upon execution of an NDA, a secondary agreement, and one additional document that we will describe at the time of signing.
          </p>
          <button
            className="btn btn-primary"
            style={{ cursor: 'not-allowed' }}
            title="Requests are reviewed. You will know when a decision has been made."
          >
            Request Financials
          </button>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="ir__faq-wrap">
        <div className="container">
          <div className="ir__section-header">
            <span className="section-label">FAQ</span>
            <h2 className="ir__section-title">Frequently Asked Questions</h2>
          </div>
          <div className="ir__faq-list">
            {FAQS.map((item) => (
              <div key={item.q} className="ir__faq-item">
                <h3 className="ir__faq-q">{item.q}</h3>
                <p className="ir__faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ──────────────────────────────────────────── */}
      <section className="ir__closing-wrap">
        <div className="container ir__closing">
          <h2 className="ir__section-title">Get In Touch</h2>
          <p className="ir__closing-body">
            Qualified investors may reach our IR team at{' '}
            <span className="ir__email">investors@fiendish.com</span>.
            {' '}We respond to enquiries that we feel warrant a response. If you do not hear back, your enquiry was received. We simply did not feel it warranted a response at this time. This may change. We will contact you if it does. You do not need to follow up. Please do not follow up.
          </p>
          <button
            className="btn btn-primary"
            style={{ cursor: 'not-allowed' }}
            title="We already know."
          >
            Contact IR Team
          </button>
        </div>
      </section>

    </div>
  );
}
