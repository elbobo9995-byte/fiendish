import { Heart, Home, Star, Users, Zap, Shield } from 'lucide-react';
import './Careers.css';

const PERKS = [
  {
    icon: Heart,
    title: 'Comprehensive Health Coverage',
    desc: 'Medical, dental, vision, and one additional coverage category described in your onboarding packet.',
  },
  {
    icon: Home,
    title: 'Remote-Friendly',
    desc: 'Work from anywhere. We have found that our employees are most productive when they feel they could be observed at any time. This is unrelated to our remote policy.',
  },
  {
    icon: Star,
    title: 'Unlimited PTO',
    desc: 'Take the time you need. PTO requests are approved automatically. We have never denied a PTO request. We have also never needed to.',
  },
  {
    icon: Users,
    title: 'Team Events',
    desc: 'Quarterly offsites at locations selected by senior leadership. Attendance is encouraged. The locations are beautiful. We do not share them in advance.',
  },
  {
    icon: Zap,
    title: 'Growth Opportunities',
    desc: 'Fiendish promotes from within whenever possible. Several of our longest-tenured employees have not left the building in years. They seem happy.',
  },
  {
    icon: Shield,
    title: 'Soul Insurance',
    desc: 'Industry-leading soul protection policy. Terms and conditions apply. Please read the terms and conditions.',
  },
];

const ROLES = [
  {
    title: 'Soul Intake Coordinator',
    dept: 'Operations',
    location: 'Remote / Liminal Space',
    type: 'Full-time',
    desc: 'Manage the intake, logging, and filing of soul-based payment transactions. Strong organizational skills required. Experience with non-standard filing systems a plus. Must be comfortable working with sensitive materials.',
  },
  {
    title: 'Matching Algorithm Ethicist',
    dept: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    desc: 'Provide ethical oversight for our proprietary 47-dimension matching algorithm, including the 12 dimensions not perceivable by human users. Philosophy background preferred. Applicants should be comfortable with ambiguity, paradox, and the occasional existential irregularity.',
  },
  {
    title: 'Community Safety Specialist',
    dept: 'Trust & Safety',
    location: 'Remote',
    type: 'Full-time',
    desc: 'Monitor platform activity and enforce community guidelines across our diverse user base. Experience moderating communities with non-standard communication styles strongly preferred. Applicants must be comfortable with silence, darkness, and things that appear suddenly in peripheral vision.',
  },
  {
    title: 'Interdimensional Growth Manager',
    dept: 'Marketing',
    location: 'New York, NY + Travel Required',
    type: 'Full-time',
    desc: 'Drive user acquisition across new markets including untapped geographical regions, emerging dimensions, and select planes of existence currently in beta. Travel will be required. Some travel may be non-linear. Frequent flyer miles do not apply.',
  },
  {
    title: 'Member Experience Associate',
    dept: 'Customer Support',
    location: 'Remote',
    type: 'Part-time',
    desc: 'Serve as first point of contact for member inquiries, with the exception of inquiries related to Section 11, soul payment disputes, and matches that have already been finalized. Empathy, patience, and a high tolerance for unanswerable questions are essential.',
  },
  {
    title: 'Cursed Object Appraiser',
    dept: 'Finance',
    location: 'London, UK',
    type: 'Contract',
    desc: 'Evaluate rare and cursed objects submitted as Premium payment. Candidates must have demonstrable experience appraising objects of unusual provenance. Gloves provided. Appraiser assumes no liability for objects that resist appraisal. Competitive day rate.',
  },
];

const APPLY_TOOLTIP = 'Applications are reviewed on a rolling basis. You may have already applied.';
const INTRO_TOOLTIP  = 'Our inbox is always open. It has never been closed. Not once.';

function scrollToRoles() {
  document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
}

export default function Careers() {
  return (
    <div className="careers">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="careers__hero">
        <span className="section-label">Join the Team</span>
        <h1 className="careers__headline">Build the Future of Connection.</h1>
        <p className="careers__subheadline">
          Fiendish is a fast-growing, mission-driven company connecting humans with extraordinary individuals across 38 countries and six planes of existence. We're looking for passionate people to help us do it.
        </p>
        <button className="btn btn-primary btn-lg" onClick={scrollToRoles}>
          View Open Roles
        </button>
      </section>

      {/* ── Perks ────────────────────────────────────────────── */}
      <section className="careers__perks">
        <div className="container">
          <div className="careers__section-header">
            <span className="section-label">Why Fiendish</span>
            <h2 className="careers__section-title">We Take Care of Our People</h2>
          </div>
          <div className="careers__perks-grid">
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="careers__perk">
                  <Icon size={22} strokeWidth={1.75} className="careers__perk-icon" />
                  <h3 className="careers__perk-title">{perk.title}</h3>
                  <p className="careers__perk-desc">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Open Roles ───────────────────────────────────────── */}
      <section className="careers__roles" id="roles">
        <div className="container">
          <div className="careers__section-header">
            <span className="section-label">Open Positions</span>
            <h2 className="careers__section-title">Current Openings</h2>
          </div>
          <div className="careers__job-list">
            {ROLES.map((role) => (
              <div key={role.title} className="careers__job">
                <div className="careers__job-top">
                  <div className="careers__job-meta-wrap">
                    <h3 className="careers__job-title">{role.title}</h3>
                    <div className="careers__job-meta">
                      <span className="careers__job-dept">{role.dept}</span>
                      <span className="careers__job-dot">·</span>
                      <span>{role.location}</span>
                      <span className="careers__job-dot">·</span>
                      <span className="careers__job-type">{role.type}</span>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary careers__apply-btn"
                    style={{ cursor: 'not-allowed' }}
                    title={APPLY_TOOLTIP}
                  >
                    Apply Now
                  </button>
                </div>
                <p className="careers__job-desc">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ──────────────────────────────────────────── */}
      <section className="careers__closing">
        <div className="careers__closing-inner">
          <h2 className="careers__closing-headline">Don't See Your Role?</h2>
          <p className="careers__closing-body">
            We're always looking for exceptional people — in the broadest possible sense of that word. Send your CV, a cover letter, and one item of your choosing to{' '}
            <span className="careers__closing-email">careers@fiendish.com</span>.
            {' '}We will be in touch. We are always in touch.
          </p>
          <button
            className="btn btn-primary btn-lg"
            style={{ cursor: 'not-allowed' }}
            title={INTRO_TOOLTIP}
          >
            Send an Introduction
          </button>
        </div>
      </section>

    </div>
  );
}
