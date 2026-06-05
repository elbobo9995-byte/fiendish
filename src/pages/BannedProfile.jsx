import { Link } from 'react-router-dom';
import { ShieldOff } from 'lucide-react';
import './BannedProfile.css';

export default function BannedProfile() {
  return (
    <div className="banned">
      <div className="banned__inner">

        <ShieldOff size={52} strokeWidth={1.5} className="banned__icon" />

        <div className="banned__heading">
          <span className="banned__eyebrow">Account Suspended</span>
          <h1 className="banned__headline">This profile is no longer available.</h1>
          <p className="banned__subheadline">
            The account associated with this profile has been permanently suspended following a review by the Fiendish Trust &amp; Safety team.
          </p>
        </div>

        <div className="banned__notice">
          <p className="banned__notice-salutation">Dear Fiendish Community,</p>
          <p>Following an internal review process that began in the Year of Darkness 997 and concluded more recently than we would like to admit, Fiendish has made the decision to permanently suspend the account of the user known as Griffith, also known as Femto, formerly of the Band of the Hawk, currently of Falconia.</p>
          <p>This decision was not made lightly. Fiendish maintains a broad and inclusive community and we do not suspend accounts without careful consideration of context, intent, and circumstance. In this case, the context was reviewed. The intent was reviewed. The circumstance — specifically, the Eclipse, the sacrifice of an entire mercenary band, the betrayal of his closest friend, and several subsequent acts that our legal team has advised us not to enumerate publicly — was reviewed at length.</p>
          <p className="banned__notice-emphasis">We suspended the account.</p>
          <p>Griffith's profile will remain visible in browse results as a courtesy to users who have already expressed interest. Clicking through will bring you here. We felt this was more honest than simply removing him, and also that it was important for people to know that we looked into it and made a decision and the decision was: no.</p>
          <p>Fiendish has no further comment on this matter. We wish the affected parties healing, in the cases where healing remains possible. We acknowledge that in some cases it does not. We are sorry about that.</p>
          <div className="banned__notice-footer">
            <p className="banned__signed">The Fiendish Trust &amp; Safety Team</p>
            <p className="banned__date">Reviewed and filed, Year of Darkness 997 — updated continuously as new information emerges</p>
          </div>
        </div>

        <div className="banned__footnote">
          <p>If you believe this suspension was made in error, you may submit an appeal to safety@fiendish.com. Appeals are reviewed on a case-by-case basis. This case has been reviewed. The suspension stands. Please do not appeal this one.</p>
        </div>

        <Link to="/browse?page=3" className="btn btn-primary banned__back">
          Back to Browse
        </Link>

      </div>
    </div>
  );
}
