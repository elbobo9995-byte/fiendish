import './OurStory.css';

export default function OurStory() {
  return (
    <section className="our-story" id="our-story">
      <div className="container our-story__inner">

        <div className="our-story__header">
          <span className="section-label">Our Mission</span>
          <h2 className="section-title our-story__title">
            Built on the Belief That Everyone Deserves Connection
          </h2>
        </div>

        <div className="our-story__body">
          <div className="our-story__image-wrap">
            <img
              src="/images/team.jpg"
              alt="The Fiendish team"
              className="our-story__image"
            />
          </div>

          <div className="our-story__content">
            <div className="our-story__text">
              <p>
                Fiendish was founded in 2023 with a simple but radical idea: that the barriers separating
                humans from the extraordinary were, at their core, a product of unfamiliarity. We believed
                then — as we believe now — that meaningful connection has no species requirement.
              </p>
              <p>
                Our matching algorithm was built from the ground up to look past surface-level differences
                and identify what actually matters: shared values, complementary communication styles, and
                a mutual willingness to show up. Whether that means being home by midnight or not coming
                home at all, we find the people who are ready to meet you where you are.
              </p>
              <p>
                Today, Fiendish serves over 2.4 million registered members across 38 countries and six
                planes of existence. We are proudly independent, mission-driven, and committed to building
                the most inclusive dating platform ever created. Love is not a human invention.
                We're just making it more accessible.
              </p>
            </div>

            <blockquote className="our-story__quote">
              "Breaking down barriers between humans and the extraordinary — one match at a time."
            </blockquote>
          </div>

        </div>

      </div>
    </section>
  );
}
