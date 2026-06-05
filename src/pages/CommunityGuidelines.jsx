import { Link } from 'react-router-dom';
import './CommunityGuidelines.css';

const GUIDELINES = [
  {
    n: 1,
    title: 'Be Respectful',
    body: 'Treat every member with dignity and respect. This includes members who do not appear to be present, members who are present but not visible, and members who exist in a state that makes respect difficult to define. When in doubt, behave as though you are being watched. You probably are.',
  },
  {
    n: 2,
    title: 'Be Honest',
    body: 'Represent yourself accurately on your profile. Fiendish understands that some members have complex identities, multiple forms, or a complicated relationship with the concept of a fixed self. We ask only that you are honest about the aspects of yourself that are relevant to dating. If you are unsure which aspects those are, our onboarding quiz will help. Most of it.',
  },
  {
    n: 3,
    title: 'Respect Boundaries',
    body: 'No means no. This applies universally across all species, dimensions, and states of being. Fiendish takes boundary violations extremely seriously. Members who repeatedly violate boundaries will be removed from the platform. We acknowledge that for some of our members, removal from the platform is more complicated than it sounds. We are working on this.',
  },
  {
    n: 4,
    title: 'No Harassment',
    body: "Harassment of any kind is strictly prohibited. This includes repeated unwanted contact, threatening behaviour, and showing up uninvited at a match's place of residence. Fiendish acknowledges that several members on our platform have historically struggled with this last point. We ask that all members make a good faith effort. We define good faith broadly.",
  },
  {
    n: 5,
    title: 'No Impersonation',
    body: 'Do not impersonate other members, public figures, or entities. Fiendish has encountered impersonation cases that were difficult to resolve due to the nature of the impersonator. We have developed protocols. The protocols are classified. The outcomes have been satisfactory in most cases.',
  },
  {
    n: 6,
    title: 'Authentic Profile Photos',
    body: "Profile photos must be a reasonable likeness of the member. Fiendish understands that some members do not photograph consistently, do not appear in mirrors, or have a form that standard camera technology struggles to capture. In these cases, an artist's impression is acceptable. The impression must be accurate. We will know if it isn't.",
  },
  {
    n: 7,
    title: 'Communication Standards',
    body: 'Members are expected to communicate in good faith. Fiendish supports all communication styles including written, verbal, non-verbal, telepathic, and symbolic. Members who communicate exclusively through the suffering of others are asked to moderate this tendency on the platform. Off-platform behaviour is outside our jurisdiction. Mostly.',
  },
  {
    n: 8,
    title: 'Meeting In Person',
    body: 'When meeting a match in person for the first time, Fiendish recommends choosing a public location. We acknowledge that some of our members consider all locations public in a sense that most users would find unsettling. We recommend a café. We recommend going during daylight hours. We recommend telling someone where you are going. We recommend being specific.',
  },
  {
    n: 9,
    title: 'Reporting Concerns',
    body: 'Members may report concerns using the in-app reporting tool. Reports are reviewed by our Trust & Safety team within 3–5 business days, unless the report involves a Category 4 or above incident, in which case it is escalated to a separate team that operates on a different timeline. Members involved in Category 4 or above incidents will be notified when it is appropriate to notify them. Some members are never notified. This is also appropriate.',
  },
  {
    n: 10,
    title: 'Conduct Toward Fiendish Staff',
    body: 'Fiendish employees are to be treated with respect at all times. Members who interact with staff in an inappropriate manner will have their accounts reviewed. Members are reminded that Fiendish staff are people too, in most cases, and that they are doing their best under circumstances that are, frankly, unusual.',
  },
  {
    n: 11,
    title: 'The Uncategorised',
    body: 'Fiendish reserves the right to moderate behaviour that is not covered by the above guidelines but that we nonetheless feel is not in the spirit of the platform. The spirit of the platform is difficult to define. We know it when we see it. We are always seeing it.',
  },
  {
    n: 12,
    title: 'Enforcement',
    body: 'Violations of these guidelines may result in a warning, a temporary suspension, permanent removal from the platform, or other measures appropriate to the severity of the violation and the nature of the member involved. Fiendish does not publish a full list of enforcement measures. Some of them do not have names. We are working on naming them.',
  },
];

export default function CommunityGuidelines() {
  return (
    <div className="cg">
      <div className="cg__inner">

        <div className="cg__header">
          <span className="cg__eyebrow">Community Guidelines</span>
          <h1 className="cg__headline">Be Excellent to Each Other.</h1>
          <p className="cg__subheadline">
            Fiendish is built on the belief that meaningful connection requires mutual respect. These guidelines exist to ensure every member — regardless of origin, form, or dietary requirement — has a safe and positive experience on our platform.
          </p>
          <p className="cg__meta">Last Updated: March 2024</p>
        </div>

        <div className="cg__body">
          {GUIDELINES.map((g) => (
            <div key={g.n} className="cg__section">
              <div className="cg__section-num">{g.n}</div>
              <div className="cg__section-content">
                <h2 className="cg__section-title">{g.title}</h2>
                <p className="cg__section-body">{g.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cg__cta">
          <Link to="/browse" className="btn btn-primary btn-lg">I Understand</Link>
        </div>

        <p className="cg__closing">
          These guidelines were last reviewed by a committee of nine. Eight members of the committee agreed on all points. The ninth member's position was noted and filed under a category we do not discuss in this document.
        </p>

      </div>
    </div>
  );
}
