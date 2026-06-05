import { Link, useParams } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import './WarningProfile.css';

export default function WarningProfile() {
  const { id } = useParams();

  return (
    <div className="warning">
      <div className="warning__inner">

        <AlertTriangle size={52} strokeWidth={1.5} className="warning__icon" />

        <div className="warning__heading">
          <span className="warning__eyebrow">Profile Notice</span>
          <h1 className="warning__headline">A Note From the Fiendish Team.</h1>
        </div>

        <div className="warning__notice">
          <p>The profile you are about to view belongs to a user identified as Rasconious III, self-described Archmage of the Seventh Septum and holder of several titles we have been unable to verify through standard onboarding documentation.</p>
          <p>Fiendish would like to be transparent with you: we have attempted to remove this profile on four separate occasions. On each occasion, the removal did not take. Our engineering team has reviewed the issue and determined that the profile is protected by what they describe, in their incident report, as "a binding arcane clause of indeterminate origin that appears to supersede our standard moderation infrastructure." We have consulted with two external vendors. Neither was able to help. One has not responded to follow-up emails. We suspect this is also related.</p>
          <p>Rasconious III has not violated our Community Guidelines in any way that our current guidelines are equipped to address. He is, as far as we can determine, genuinely looking for a relationship. His methods are unorthodox. His profile is, in places, a lot.</p>
          <p>We are not endorsing this profile. We are also not able to remove it. We are disclosing this distinction because we think it matters and because our legal team has advised us that transparency is the appropriate posture given the circumstances.</p>
          <p>Proceed at your own discretion. He seems harmless. We are not certain he is harmless. We are choosing to be optimistic.</p>
          <div className="warning__notice-footer">
            <p className="warning__signed">The Fiendish Trust &amp; Safety Team</p>
          </div>
        </div>

        <div className="warning__actions">
          <Link to="/browse" className="btn btn-outline warning__btn-back">
            Back to Browse
          </Link>
          <Link to={`/profile/${id}`} className="btn btn-primary warning__btn-proceed">
            Proceed to Profile
          </Link>
        </div>

        <p className="warning__fine-print">
          Fiendish has filed a formal complaint with the Arcane Council of the Seventh Septum. We have not received a response. We did not expect one.
        </p>

      </div>
    </div>
  );
}
