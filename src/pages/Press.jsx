import './Press.css';

export default function Press() {
  return (
    <div className="press">
      <div className="press__inner">
        <span className="section-label">Press &amp; Media</span>
        <h1 className="press__headline">We Don't Do Press.</h1>
        <div className="press__body">
          <p>Fiendish does not issue press releases, grant interviews, provide comment, or respond to media inquiries of any kind.</p>
          <p>We have never done this. We do not intend to start.</p>
          <p>If you have seen a quote attributed to Fiendish in a publication, we did not say it. If the quote sounds like something we would say, that is a coincidence. If you found this page because something happened that you believe warrants a statement from us, we want you to know that we are aware of the situation, we are not surprised by it, and we have nothing to add.</p>
          <p>Several journalists have attempted to contact us. We wish them well in their other endeavors.</p>
          <p>If you are a member of the press and you feel this policy is unreasonable, please reflect on the fact that you are attempting to get a comment from a dating platform for horror movie monsters, and consider whether your time might be better spent elsewhere.</p>
          <p>Thank you for your understanding. We did not ask for it but we appreciate it.</p>
        </div>
        <p className="press__footer-note">For press inquiries: please don't.</p>
      </div>
    </div>
  );
}
