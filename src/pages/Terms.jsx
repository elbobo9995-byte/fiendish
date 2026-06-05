import { Link } from 'react-router-dom';
import './Terms.css';

function Redacted({ chars = 80 }) {
  return (
    <span className="tos__redacted" aria-label="[REDACTED]">
      {'█'.repeat(chars)}
    </span>
  );
}

export default function Terms() {
  return (
    <div className="tos">
      <div className="tos__inner">

        <div className="tos__header">
          <span className="tos__eyebrow">Fiendish Inc. · Legal Agreement</span>
          <h1 className="tos__headline">Terms of Service</h1>
          <p className="tos__meta">
            Last Updated: March 2024 &nbsp;·&nbsp; Version 7.3 &nbsp;·&nbsp; Applies to all users in all applicable jurisdictions
          </p>
        </div>

        <div className="tos__body">

          <section className="tos__section">
            <h2 className="tos__section-title">1. Acceptance of Terms</h2>
            <p>By accessing or using the Fiendish platform, website, mobile application, or any related services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.</p>
            <p>These Terms constitute a legally binding agreement between you and Fiendish Inc. ("Fiendish," "we," "us," or "our"). Your continued use of the Service following any modification to these Terms constitutes your acceptance of such modifications.</p>
            <p>These Terms were last updated in March 2024 and supersede all prior versions. If you are reading these Terms at a time prior to March 2024, please be aware that you may be reading an older version. Please locate the current version. We will wait.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">2. Eligibility</h2>
            <p>2.1 &nbsp; To use the Service, you must be at least 18 years of age, or the legal age of majority in your jurisdiction, whichever is greater.</p>
            <p>2.2 &nbsp; For users originating from non-standard jurisdictions, eligibility is determined by the equivalent age of majority in your dimension, plane of existence, or epoch of origin, converted to standard terrestrial years using Fiendish's proprietary age-conversion methodology. Documentation may be required.</p>
            <p>2.3 &nbsp; Fiendish does not discriminate on the basis of species, corporeal status, current legal classification, or whether the applicant has previously existed in a different form. All eligible users are welcome, provided they agree to these Terms.</p>
            <p>2.4 &nbsp; Fiendish reserves the right to determine, in its sole discretion, whether a prospective user meets eligibility requirements. This determination is final. Please see our All Matches Final policy for context on the general scope of our finality policies.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">3. Account Creation</h2>
            <p>3.1 &nbsp; To access the Service, you must create an account. You agree to provide accurate, complete, and current information during the registration process and to update such information as necessary to keep it accurate, complete, and current.</p>
            <p>3.2 &nbsp; You are responsible for maintaining the confidentiality of your account credentials. You agree to notify Fiendish immediately of any unauthorized use of your account. Fiendish is not responsible for any loss resulting from unauthorized account access, including access by individuals who should not know your password but somehow do.</p>
            <p>3.3 &nbsp; Fiendish reserves the right to verify user identity through means including but not limited to: government-issued documentation, video call, or prolonged eye contact. Users who select prolonged eye contact as their verification method acknowledge that this process may have unintended side effects. Fiendish is not liable for side effects arising from the prolonged eye contact verification process. A list of known side effects is available upon request. We recommend not requesting it.</p>
            <p>3.4 &nbsp; One account per user. Users may not create multiple accounts. Fiendish defines "one user" as a single continuous consciousness. If you believe your situation raises questions about this definition, please contact support.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">4. Matching Algorithm</h2>
            <p>4.1 &nbsp; Fiendish uses a proprietary matching algorithm to pair users based on compatibility. The algorithm considers 47 distinct dimensions of personality, interest, communication style, and relational compatibility.</p>
            <p>4.2 &nbsp; Of these 47 dimensions, 12 are not perceivable by human users. Fiendish does not disclose the nature of these dimensions, as disclosure would require users to become aware of aspects of themselves that may be difficult to process during business hours.</p>
            <p>4.3 &nbsp; Matches generated by the algorithm are considered final. Users who disagree with a match are encouraged to review our All Matches Final policy. We cannot stress this enough. The policy was named for a reason.</p>
            <p>4.4 &nbsp; Fiendish makes no guarantees regarding the nature of matches, their origin, their corporeal status, their awareness of the user prior to the match, or how long a matched party may have been aware of the user before the match was surfaced. These are considered incidental details.</p>
            <p>4.5 &nbsp; The algorithm is updated regularly. Users agree that algorithm updates may retroactively affect the interpretation of existing matches. This is a technical matter and should not be alarming.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">5. Communication Guidelines</h2>
            <p>5.1 &nbsp; Users agree to communicate with other platform members in a respectful and good-faith manner. Fiendish is committed to fostering a safe and welcoming community for all of its users.</p>
            <p>5.2 &nbsp; "Respectful communication" is defined broadly by Fiendish and includes all communication styles that do not constitute harassment as defined in Section 7. Fiendish acknowledges that some of its members have non-standard communication styles.</p>
            <p>5.3 &nbsp; Accepted communication modalities include, but are not limited to: written messages, voice and video calls, silence (sustained and intentional), telepathy, screaming, and appearing uninvited in the dreams of another user without prior arrangement. All of the above are considered acceptable within our community guidelines and should not be reported unless you wish to begin a formal conversation with our support team about what specifically is happening.</p>
            <p>5.4 &nbsp; Fiendish is not responsible for communication that occurs outside the platform between matched parties. Once a match has been made, the nature of subsequent contact is a matter between the users and is not moderated by Fiendish.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">6. Privacy Policy</h2>
            <p>6.1 &nbsp; Fiendish collects standard user data including name, email address, date of birth, location, and stated preferences. This data is collected with your consent and used to operate, personalize, and improve the Service.</p>
            <p>6.2 &nbsp; Fiendish also collects data you have not explicitly provided. This includes behavioral data, inferred preferences, and certain categories of information derived through means we have chosen not to enumerate in this document. We are aware of the data you have not provided. We have always been aware.</p>
            <p>6.3 &nbsp; Your data will not be sold to third parties for advertising purposes. Your data may be shared with your matches, as part of our core matching functionality. The extent to which a match may access information about you beyond your stated profile is governed by the nature of the match and falls outside the scope of Fiendish's documented data practices.</p>
            <p>6.4 &nbsp; We appreciate your continued use of the platform.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">7. Prohibited Conduct</h2>
            <p>7.1 &nbsp; Users may not harass, threaten, or intimidate other members of the platform. Fiendish takes member safety seriously and will take appropriate action in response to verified reports of harassment.</p>
            <p>7.2 &nbsp; Users may not misrepresent themselves, including their name, age, location, or physical appearance. Fiendish acknowledges that some degree of self-presentation is inherent to dating platforms and does not prohibit flattering photographs. Fiendish draws a distinction between flattering photographs and active misrepresentation of fundamental nature.</p>
            <p>7.3 &nbsp; Users may not attempt to un-match after a match has been finalized through the platform. Attempted un-matching does not constitute an un-match. Please see our All Matches Final policy.</p>
            <p>7.4 &nbsp; Users may not discuss the contents of Section 11 with any individual who has not themselves read Section 11. Users who have read Section 11 will understand why. Users who have not yet read Section 11 are advised to do so only in a well-lit room, and not immediately before sleep.</p>
            <p>7.5 &nbsp; Users may not attempt to identify, contact, or interact with Fiendish employees, contractors, or algorithm architects outside of official support channels. This is for everyone's benefit.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">8. Intellectual Property</h2>
            <p>8.1 &nbsp; All content, features, and functionality of the Fiendish platform, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of Fiendish Inc. and are protected under applicable intellectual property law.</p>
            <p>8.2 &nbsp; Users retain ownership of content they submit to the platform and grant Fiendish a non-exclusive, royalty-free, worldwide license to use, display, and distribute such content in connection with the operation of the Service.</p>
            <p>8.3 &nbsp; All Fiendish content is protected. Your memories of using Fiendish are also protected. Your memories of using Fiendish are considered part of the Fiendish experiential ecosystem. Reproduction or distribution of these memories in any medium, including conversation, journaling, therapy, or dream journaling, constitutes a derivative use of Fiendish content.</p>
            <p>8.4 &nbsp; Dreams featuring Fiendish content, platform imagery, or individuals encountered through the Service are considered derivative works and are subject to licensing fees payable upon renewal of consciousness each morning. Current rates are available on our website. We update them frequently. Please check before waking.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">9. Limitation of Liability</h2>
            <p>9.1 &nbsp; To the maximum extent permitted by applicable law, Fiendish Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service.</p>
            <p>9.2 &nbsp; Fiendish is not liable for outcomes resulting from matches including but not limited to: emotional attachment, changes in relationship status, physical or psychological transformation, temporary or sustained incorporeality, relocation to a non-standard plane of existence, unexplained changes in dietary requirements, or the gradual realization that something has changed and you cannot identify what it is but it started around the time you downloaded the app.</p>
            <p>9.3 &nbsp; Fiendish is not liable for outcomes experienced by third parties as a result of your matches, including individuals who knew you before you began using the Service and have noticed changes they are unable to account for.</p>
            <p>9.4 &nbsp; In no event shall Fiendish's total liability to you for all damages exceed the amount you have paid to Fiendish in the twelve months preceding the event giving rise to the claim. If you have not paid anything to Fiendish, our liability is limited accordingly. We trust this is clear.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">10. Termination</h2>
            <p>10.1 &nbsp; You may delete your account at any time through the account settings menu. Upon deletion, your profile will be removed from the platform and will no longer be visible to other users.</p>
            <p>10.2 &nbsp; Deleting your account removes your profile from the Fiendish platform. It does not remove you from the awareness of individuals you have already matched with. Matched parties retain knowledge of your existence that was formed during your time on the platform. This is a feature of human connection and is not something Fiendish is able to reverse.</p>
            <p>10.3 &nbsp; Fiendish reserves the right to terminate or suspend your account at any time, for any reason, with or without notice. Grounds for termination include but are not limited to: violation of these Terms, conduct harmful to other users, and conduct that is difficult to describe but is clearly not right.</p>
            <p>10.4 &nbsp; Upon account termination, all licenses granted to you under these Terms will terminate immediately. Sections 8, 9, 11, 12, and this Section 10.4 survive termination. Section 11 always survives. This is not something we chose. It is simply the case.</p>
            <p>10.5 &nbsp; Fiendish wishes you the best.</p>
          </section>

          <section className="tos__section tos__section--classified">
            <h2 className="tos__section-title">11. [SECTION 11]</h2>
            <p>
              <Redacted chars={320} />. We appreciate your understanding. By reading this sentence you have acknowledged Section 11 in full. Please do not re-read Section 11.
            </p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">12. Governing Law</h2>
            <p>12.1 &nbsp; These Terms shall be governed by and construed in accordance with the laws of <Redacted chars={6} />, which operates under a legal framework that is not fully translatable into English or any other language currently in common use.</p>
            <p>12.2 &nbsp; Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of an arbitration body selected by Fiendish at the time of the dispute. This body may not currently exist. It will exist by the time it is needed.</p>
            <p>12.3 &nbsp; Arbitration will be conducted at a time and location of Fiendish's choosing, which may not be a time or location you are familiar with. You will be notified in advance, though "advance" in this context is relative to the arbitration itself and not necessarily to your current subjective experience of time.</p>
            <p>12.4 &nbsp; You agree to waive any right to a jury trial or class action lawsuit. This waiver is voluntary. You have already agreed to it.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">13. Updates to These Terms</h2>
            <p>13.1 &nbsp; Fiendish reserves the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on the platform and, where required by applicable law, by sending you a direct notification.</p>
            <p>13.2 &nbsp; You will be notified of updates. You may have already been notified. If you are unsure whether you have been notified, please check again. Some users report having been notified before this version of the Terms existed. We consider this an acceptable outcome.</p>
            <p>13.3 &nbsp; Your continued use of the Service following the posting of revised Terms constitutes your acceptance of those Terms. If you do not agree to the revised Terms, please discontinue use of the Service and delete your account. Refer to Section 10 regarding what account deletion does and does not accomplish.</p>
          </section>

          <section className="tos__section">
            <h2 className="tos__section-title">14. Contact</h2>
            <p>14.1 &nbsp; If you have questions or concerns about these Terms, please contact our legal department at <Redacted chars={18} />. We review all inquiries and respond to those we are able to respond to.</p>
            <p>14.2 &nbsp; Response times vary based on volume, complexity, and factors we are not able to disclose. Some users have reported receiving responses before sending their inquiry. If you receive a response to an inquiry you have not yet sent, the response is nonetheless binding. Please read it carefully. Then send the inquiry.</p>
            <p>14.3 &nbsp; For account-related issues, please visit our Help Center. The Help Center is staffed by individuals who are doing their best. Please keep this in mind.</p>
          </section>

        </div>

        <div className="tos__cta">
          <p className="tos__acceptance">
            By using Fiendish you confirm that you have read, understood, and accepted these terms in all timelines in which you exist.
          </p>
          <Link to="/browse" className="btn btn-primary btn-lg">I Accept</Link>
        </div>

      </div>
    </div>
  );
}
