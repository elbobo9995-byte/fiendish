import './CookiePolicy.css';

const SECTIONS = [
  {
    n: 1,
    title: 'What Are Cookies?',
    body: 'Cookies are small baked goods, typically flour-based, that Fiendish uses to enhance the member experience. They may be chocolate chip, shortbread, oatmeal raisin, or a rotating seasonal variety determined by our internal baking committee. Fiendish does not use crackers. We want to be clear about that.',
  },
  {
    n: 2,
    title: 'What Cookies Do We Use?',
    body: null,
    list: [
      { label: 'Essential Cookies', text: 'Chocolate chip. These are required for the platform to function. You cannot opt out of essential cookies. We have tried to make them as enjoyable as possible.' },
      { label: 'Performance Cookies', text: 'Shortbread. These help us understand how members move through the platform, which areas they linger in, and which they avoid. The shortbread is plain. Some members have asked for icing. This is under review.' },
      { label: 'Functional Cookies', text: 'Oatmeal raisin. These remember your preferences so you don\'t have to re-enter them each visit. We are aware that oatmeal raisin is a divisive choice. The decision was made at the committee level and is not subject to appeal.' },
      { label: 'Third-Party Cookies', text: 'Provided by partners whose recipes we cannot fully disclose. They taste fine. Several members have asked what is in them. We appreciate the question and are not in a position to answer it at this time.' },
    ],
    preamble: 'Fiendish currently uses the following cookies:',
  },
  {
    n: 3,
    title: 'How Are Cookies Delivered?',
    body: 'Cookies are delivered at the start of each session. Premium members receive cookies before their session begins. We do not currently offer delivery to all locations, though we are expanding our delivery radius. Some addresses fall outside our standard delivery zone for reasons we do not publish. If you have not received your cookies, please wait. They are on their way.',
  },
  {
    n: 4,
    title: 'Cookie Storage',
    body: 'Cookies should be stored in a cool, dry place. Fiendish is not responsible for cookies that are stored improperly, left out overnight, or consumed by a third party without the account holder\'s knowledge. If your cookies have been consumed without your consent, please contact support. We take this seriously.',
  },
  {
    n: 5,
    title: 'Cookie Retention',
    body: 'Essential cookies are retained for the duration of your membership. Performance and functional cookies are retained for 12 months, after which they are replaced with a fresh batch. Third-party cookies do not expire. We have looked into this. It is simply how they are made.',
  },
  {
    n: 6,
    title: 'Managing Your Cookie Preferences',
    body: 'Members may opt out of non-essential cookies at any time by contacting our cookie team at cookies@fiendish.com. Please note that opting out of functional cookies means we will no longer remember your preferences, and each visit will feel like the first time. Some members prefer this. We do not judge.\n\nYou cannot opt out of essential cookies. We have been asked about this many times. The answer remains no. The chocolate chip cookies are non-negotiable. They are very good.',
  },
  {
    n: 7,
    title: 'Allergens',
    body: 'Fiendish cookies may contain gluten, dairy, eggs, nuts, and trace amounts of other ingredients we are not required to list in this jurisdiction. Members with severe allergies should contact us before their first session. Members with allergies to the third-party cookie ingredients should contact us urgently. We mean that.',
  },
  {
    n: 8,
    title: 'Changes to This Policy',
    body: 'Fiendish reserves the right to update this Cookie Policy at any time, including changes to varieties, ingredients, delivery schedules, and retention periods. Members will be notified of significant changes. A significant change is defined as any change that affects the chocolate chip cookies. All other changes will be implemented quietly.',
  },
  {
    n: 9,
    title: 'Contact',
    body: 'For questions about our Cookie Policy, please contact cookies@fiendish.com. Our cookie team responds to all enquiries within 3–5 business days. They are a dedicated team. They smell amazing.',
  },
];

export default function CookiePolicy() {
  return (
    <div className="cookie">
      <div className="cookie__inner">

        <div className="cookie__header">
          <span className="cookie__eyebrow">Cookie Policy</span>
          <h1 className="cookie__headline">Our Cookie Policy.</h1>
          <p className="cookie__subheadline">
            At Fiendish, we take cookies seriously. This policy explains what cookies we use, why we use them, and what happens if you don't want them.
          </p>
          <p className="cookie__meta">Last Updated: March 2024</p>
        </div>

        <div className="cookie__body">
          {SECTIONS.map((s) => (
            <div key={s.n} className="cookie__section">
              <div className="cookie__section-num">{s.n}</div>
              <div className="cookie__section-content">
                <h2 className="cookie__section-title">{s.title}</h2>
                {s.preamble && <p className="cookie__section-body">{s.preamble}</p>}
                {s.list && (
                  <ul className="cookie__list">
                    {s.list.map((item) => (
                      <li key={item.label} className="cookie__list-item">
                        <span className="cookie__list-label">{item.label}:</span>{' '}{item.text}
                      </li>
                    ))}
                  </ul>
                )}
                {s.body && s.body.split('\n\n').map((para, i) => (
                  <p key={i} className="cookie__section-body">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="cookie__closing">
          By using Fiendish, you accept our Cookie Policy in full. You also accept the cookies. Everyone accepts the cookies.
        </p>

      </div>
    </div>
  );
}
