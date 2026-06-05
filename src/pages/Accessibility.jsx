import './Accessibility.css';

const SECTIONS = [
  {
    title: 'Our Commitment',
    body: 'Fiendish believes accessibility is important. We have believed this for some time. We continue to believe it. This page exists as a record of that belief.',
  },
  {
    title: 'What We\'ve Done',
    body: 'Fiendish has taken a number of steps to improve accessibility across the platform. These steps have been meaningful. We are proud of them. A full list of the steps is available internally.',
  },
  {
    title: 'Known Issues',
    body: 'Fiendish is aware of a number of accessibility issues currently present on the platform. We are tracking them. Several have been on the list for a while. This does not mean we have forgotten about them. It means they are complex. Accessibility is complex. We think about it often.',
  },
  {
    title: 'Assistive Technology',
    body: 'Fiendish is designed to work with a range of assistive technologies. Some of them work well. Others work in ways that are difficult to predict. We recommend trying your preferred assistive technology and seeing what happens. If something unexpected happens, please let us know using the contact method below. We will log it.',
  },
  {
    title: 'Text Size and Display',
    body: 'Users who require larger text are encouraged to use their device\'s built-in zoom functionality. Users who require smaller text are also encouraged to use zoom, but in the other direction. Fiendish does not currently offer in-app text size controls. This is something we are aware of. We are aware of a lot of things.',
  },
  {
    title: 'Colour and Contrast',
    body: 'Fiendish has made considered choices about colour and contrast across the platform. We believe these choices are good. If you find our contrast levels difficult, we understand, and we are sorry to hear it, and we want you to know that the choices were considered. They were considered by people who can see very well. We acknowledge this may be relevant.',
  },
  {
    title: 'Audio and Video',
    body: 'Fiendish does not currently offer captions, transcripts, or audio descriptions for any content on the platform. We are aware that this is not ideal. We are also aware of several other things that are not ideal. We are prioritising. Accessibility is on the list.',
  },
  {
    title: 'Keyboard Navigation',
    body: 'Fiendish supports keyboard navigation in most areas of the platform. The areas where keyboard navigation does not work are areas we are aware of. We have not published a list of those areas. We feel a list would be discouraging and that is not our intention. Our intention is to be accessible. We are working toward that intention at a pace we consider appropriate.',
  },
  {
    title: 'Feedback',
    body: 'If you encounter an accessibility barrier on Fiendish, we want to hear about it. Please contact us at accessibility@fiendish.com. We read every email. We respond to emails that we are able to respond to. If you do not receive a response, your email was read. We simply did not have anything to say about it yet. This may change. We will contact you if it does.',
  },
  {
    title: 'Third Party Content',
    body: 'Fiendish contains content and profiles created by third parties, including members, partners, and entities whose accessibility practices we cannot control or verify. Some of our members are not accessible in ways that go beyond the scope of this document.',
  },
];

export default function Accessibility() {
  return (
    <div className="a11y">
      <div className="a11y__inner">

        <div className="a11y__header">
          <span className="a11y__eyebrow">Accessibility</span>
          <h1 className="a11y__headline">Fiendish Is For Everyone.</h1>
          <p className="a11y__subheadline">
            We are committed to making Fiendish accessible to all users, regardless of ability, circumstance, or current state of being.
          </p>
          <p className="a11y__meta">Last Updated: March 2024</p>
        </div>

        <div className="a11y__body">
          {SECTIONS.map((s) => (
            <div key={s.title} className="a11y__section">
              <h2 className="a11y__section-title">{s.title}</h2>
              <p className="a11y__section-body">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="a11y__closing">
          Fiendish is committed to continuous improvement in accessibility. We have been committed to this for several years. We look forward to continued commitment going forward.
        </p>

      </div>
    </div>
  );
}
