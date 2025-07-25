import React from 'react'
import { Link } from 'react-router-dom'

const TermsConditions = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-background-color min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 text-gray-900">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Terms & Conditions
        </h1>
        <p className="text-lg font-semibold mb-8">
          Last updated:{' '}
          <span className="text-gray-900 font-semibold">July 10, 2025</span>
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              AGREEMENT TO OUR LEGAL TERMS
            </h2>
            <p className="text-base leading-relaxed mb-4">
              We are Retail Types ("Website," "we," "us," "our"), a website
              published in India at B-148, Kankarbagh Main Road, Patna, Bihar
              800020.
            </p>
            <p className="text-base leading-relaxed mb-4">
              We operate the website retailtypes.com (the "Site"), as well as
              any other related products and services that refer or link to
              these legal terms (the "Legal Terms") (collectively, the
              "Services").
            </p>
            <p className="text-base leading-relaxed mb-4">
              You can contact us by phone at <br />{' '}
              <strong>+91 94306 22181</strong>, email at{' '}
              <strong>info@retailtypes.com</strong>, or by mail to B-148,
              Kankarbagh Main Road, Patna, Bihar 800020, India.
            </p>
            <p className="text-base leading-relaxed mb-4">
              These Legal Terms constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity ("you"),
              and Retail Types, concerning your access to and use of the
              Services. You agree that by accessing the Services, you have read,
              understood, and agreed to be bound by all of these Legal Terms. IF
              YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
              EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
              DISCONTINUE USE IMMEDIATELY.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Supplemental terms and conditions or documents that may be posted
              on the Services from time to time are hereby expressly
              incorporated herein by reference. We reserve the right, in our
              sole discretion, to make changes or modifications to these Legal
              Terms at any time and for any reason. We will alert you about any
              changes by updating the "Last updated" date of these Legal Terms,
              and you waive any right to receive specific notice of each such
              change. It is your responsibility to periodically review these
              Legal Terms to stay informed of updates. You can find more details
              in our{' '}
              <button
                onClick={() => scrollToSection('table-of-contents')}
                className="text-blue-600 hover:underline focus:ring-2 focus:ring-blue-500"
              >
                table of contents
              </button>{' '}
              below. You will be subject to, and will be deemed to have been
              made aware of and to have accepted, the changes in any revised
              Legal Terms by your continued use of the Services after the date
              such revised Legal Terms are posted.
            </p>
            <p className="text-base leading-relaxed mb-4">
              The Services are intended for users who are at least 18 years old.
              Persons under the age of 18 are not permitted to use or register
              for the Services.
            </p>
            <p className="text-base leading-relaxed mb-4">
              We recommend that you print a copy of these Legal Terms for your
              records.
            </p>
          </div>

          <div id="table-of-contents" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-base">
              {[
                { id: 'our-services', text: 'Our Services' },
                {
                  id: 'intellectual-property',
                  text: 'Intellectual Property Rights',
                },
                { id: 'user-representations', text: 'User Representations' },
                { id: 'prohibited-activities', text: 'Prohibited Activities' },
                {
                  id: 'user-contributions',
                  text: 'User Generated Contributions',
                },
                { id: 'contribution-license', text: 'Contribution License' },
                { id: 'services-management', text: 'Services Management' },
                { id: 'privacy-policy', text: 'Privacy Policy' },
                { id: 'term-termination', text: 'Term and Termination' },
                {
                  id: 'modifications-interruptions',
                  text: 'Modifications and Interruptions',
                },
                { id: 'governing-law', text: 'Governing Law' },
                { id: 'dispute-resolution', text: 'Dispute Resolution' },
                { id: 'corrections', text: 'Corrections' },
                { id: 'disclaimer', text: 'Disclaimer' },
                {
                  id: 'limitations-liability',
                  text: 'Limitations of Liability',
                },
                { id: 'indemnification', text: 'Indemnification' },
                { id: 'user-data', text: 'User Data' },
                {
                  id: 'electronic-communications',
                  text: 'Electronic Communications, Transactions, and Signatures',
                },
                { id: 'miscellaneous', text: 'Miscellaneous' },
                { id: 'contact-us', text: 'Contact Us' },
              ].map((item, index) => (
                <li key={item.id} className="flex gap-2 items-start">
                  <span className="min-w-[1.5rem] text-gray-700 font-medium">
                    {index + 1}.
                  </span>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-blue-600 text-left hover:underline focus:ring-2 focus:ring-blue-500"
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div id="our-services">
            <h2 className="text-2xl font-semibold mb-4">1. OUR SERVICES</h2>
            <p className="text-base leading-relaxed mb-4">
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
          </div>

          <div id="intellectual-property">
            <h2 className="text-2xl font-semibold mb-4">
              2. INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <p className="text-base leading-relaxed mb-4">
              <strong>Our intellectual property</strong>
            </p>
            <p className="text-base leading-relaxed mb-4">
              We are the owner or the licensee of all intellectual property
              rights in our Services, including all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics in the Services (collectively, the
              "Content"), as well as the trademarks, service marks, and logos
              contained therein (the "Marks").
            </p>
            <p className="text-base leading-relaxed mb-4">
              Our Content and Marks are protected by copyright and trademark
              laws (and various other intellectual property rights and unfair
              competition laws) and treaties around the world.
            </p>
            <p className="text-base leading-relaxed mb-4">
              The Content and Marks are provided in or through the Services "AS
              IS" for your personal, non-commercial use or internal business
              purpose only.
            </p>
            <p className="text-base leading-relaxed mb-4">
              <strong>Your use of our Services</strong>
            </p>
            <p className="text-base leading-relaxed mb-4">
              Subject to your compliance with these Legal Terms, including the
              "PROHIBITED ACTIVITIES" section below, we grant you a
              non-exclusive, non-transferable, revocable license to:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>access the Services; and</li>
              <li>
                download or print a copy of any portion of the Content to which
                you have properly gained access,
              </li>
            </ul>
            <p className="text-base leading-relaxed mb-4">
              solely for your personal, non-commercial use or internal business
              purpose.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Except as set out in this section or elsewhere in our Legal Terms,
              no part of the Services and no Content or Marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </p>
            <p className="text-base leading-relaxed mb-4">
              If you wish to make any use of the Services, Content, or Marks
              other than as set out in this section or elsewhere in our Legal
              Terms, please address your request to: info@retailtypes.com. If we
              ever grant you the permission to post, reproduce, or publicly
              display any part of our Services or Content, you must identify us
              as the owners or licensors of the Services, Content, or Marks and
              ensure that any copyright or proprietary notice appears or is
              visible on posting, reproducing, or displaying our Content.
            </p>
            <p className="text-base leading-relaxed mb-4">
              We reserve all rights not expressly granted to you in and to the
              Services, Content, and Marks.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Any breach of these Intellectual Property Rights will constitute a
              material breach of our Legal Terms and your right to use our
              Services will terminate immediately.
            </p>
            <p className="text-base leading-relaxed mb-4">
              <strong>Your submissions</strong>
            </p>
            <p className="text-base leading-relaxed mb-4">
              Please review this section and the "PROHIBITED ACTIVITIES" section
              carefully prior to using our Services to understand the (a) rights
              you give us and (b) obligations you have when you post or upload
              any content through the Services.
            </p>
            <p className="text-base leading-relaxed mb-4">
              <strong>Submissions:</strong> By directly sending us any question,
              comment, suggestion, idea, feedback, or other information about
              the Services ("Submissions"), you agree to assign to us all
              intellectual property rights in such Submission. You agree that we
              shall own this Submission and be entitled to its unrestricted use
              and dissemination for any lawful purpose, commercial or otherwise,
              without acknowledgment or compensation to you.
            </p>
            <p className="text-base leading-relaxed mb-4">
              <strong>You are responsible for what you post or upload:</strong>{' '}
              By sending us Submissions through any part of the Services you:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>
                confirm that you have read and agree with our "PROHIBITED
                ACTIVITIES" and will not post, send, publish, upload, or
                transmit through the Services any Submission that is illegal,
                harassing, hateful, harmful, defamatory, obscene, bullying,
                abusive, discriminatory, threatening to any person or group,
                sexually explicit, false, inaccurate, deceitful, or misleading;
              </li>
              <li>
                to the extent permissible by applicable law, waive any and all
                moral rights to any such Submission;
              </li>
              <li>
                warrant that any such Submission are original to you or that you
                have the necessary rights and licenses to submit such
                Submissions and that you have full authority to grant us the
                above-mentioned rights in relation to your Submissions; and
              </li>
              <li>
                warrant and represent that your Submissions do not constitute
                confidential information.
              </li>
            </ul>
            <p className="text-base leading-relaxed mb-4">
              You are solely responsible for your Submissions and you expressly
              agree to reimburse us for any and all losses that we may suffer
              because of your breach of (a) this section, (b) any third party’s
              intellectual property rights, or (c) applicable law.
            </p>
          </div>

          <div id="user-representations">
            <h2 className="text-2xl font-semibold mb-4">
              3. USER REPRESENTATIONS
            </h2>
            <p className="text-base leading-relaxed mb-4">
              By using the Services, you represent and warrant that: (1) you
              have the legal capacity and you agree to comply with these Legal
              Terms; (2) you are not a minor in the jurisdiction in which you
              reside; (3) you will not access the Services through automated or
              non-human means, whether through a bot, script or otherwise; (4)
              you will not use the Services for any illegal or unauthorized
              purpose; and (5) your use of the Services will not violate any
              applicable law or regulation.
            </p>
            <p className="text-base leading-relaxed mb-4">
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Services (or any portion thereof).
            </p>
          </div>

          <div id="prohibited-activities">
            <h2 className="text-2xl font-semibold mb-4">
              4. PROHIBITED ACTIVITIES
            </h2>
            <p className="text-base leading-relaxed mb-4">
              You may not access or use the Services for any purpose other than
              that for which we make the Services available. The Services may
              not be used in connection with any commercial endeavors except
              those that are specifically endorsed or approved by us.
            </p>
            <p className="text-base leading-relaxed mb-4">
              As a user of the Services, you agree not to:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>
                Systematically retrieve data or other content from the Services
                to create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Services, including features
                that prevent or restrict the use or copying of any Content or
                enforce limitations on the use of the Services and/or the
                Content contained therein.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Services.
              </li>
              <li>
                Use any information obtained from the Services in order to
                harass, abuse, or harm another person.
              </li>
              <li>
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>
              <li>
                Use the Services in a manner inconsistent with any applicable
                laws or regulations.
              </li>
              <li>
                Engage in unauthorized framing of or linking to the Services.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party’s uninterrupted
                use and enjoyment of the Services or modifies, impairs,
                disrupts, alters, or interferes with the use, features,
                functions, operation, or maintenance of the Services.
              </li>
              <li>
                Engage in any automated use of the system, such as using scripts
                to send comments or messages, or using any data mining, robots,
                or similar data gathering and extraction tools.
              </li>
              <li>
                Delete the copyright or other proprietary rights notice from any
                Content.
              </li>
              <li>
                Attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) any
                material that acts as a passive or active information collection
                or transmission mechanism, including without limitation, clear
                graphics interchange formats ("gifs"), 1×1 pixels, web bugs,
                cookies, or other similar devices (sometimes referred to as
                "spyware" or "passive collection mechanisms" or "pcms").
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the
                Services or the networks or services connected to the Services.
              </li>
              <li>
                Harass, annoy, intimidate, or threaten any of our employees or
                agents engaged in providing any portion of the Services to you.
              </li>
              <li>
                Attempt to bypass any measures of the Services designed to
                prevent or restrict access to the Services, or any portion of
                the Services.
              </li>
              <li>
                Copy or adapt the Services' software, including but not limited
                to Flash, PHP, HTML, JavaScript, or other code.
              </li>
              <li>
                Except as permitted by applicable law, decipher, decompile,
                disassemble, or reverse engineer any of the software comprising
                or in any way making up a part of the Services.
              </li>
              <li>
                Except as may be the result of standard search engine or
                Internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Services, or use or launch any unauthorized script or other
                software.
              </li>
              <li>
                Use a buying agent or purchasing agent to make purchases on the
                Services.
              </li>
              <li>
                Make any unauthorized use of the Services, including collecting
                usernames and/or email addresses of users by electronic or other
                means for the purpose of sending unsolicited email, or creating
                user accounts by automated means or under false pretenses.
              </li>
              <li>
                Use the Services as part of any effort to compete with us or
                otherwise use the Services and/or the Content for any
                revenue-generating endeavor or commercial enterprise.
              </li>
            </ul>
          </div>

          <div id="user-contributions">
            <h2 className="text-2xl font-semibold mb-4">
              5. USER GENERATED CONTRIBUTIONS
            </h2>
            <p className="text-base leading-relaxed mb-4">
              The Services do not offer users to submit or post content. We may
              provide you with the opportunity to create, submit, post, display,
              transmit, perform, publish, distribute, or broadcast content and
              materials to us or on the Services, including but not limited to
              text, writings, video, audio, photographs, graphics, comments,
              suggestions, or personal information or other material
              (collectively, "Contributions"). Contributions may be viewable by
              other users of the Services and through third-party websites. As
              such, any Contributions you transmit may be treated in accordance
              with the Services' Privacy Policy. When you create or make
              available any Contributions, you thereby represent and warrant
              that:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>
                The creation, distribution, transmission, public display, or
                performance, and the accessing, downloading, or copying of your
                Contributions do not and will not infringe the proprietary
                rights, including but not limited to the copyright, patent,
                trademark, trade secret, or moral rights of any third party.
              </li>
              <li>
                You are the creator and owner of or have the necessary licenses,
                rights, consents, releases, and permissions to use and to
                authorize us, the Services, and other users of the Services to
                use your Contributions in any manner contemplated by the
                Services and these Legal Terms.
              </li>
              <li>
                You have the written consent, release, and/or permission of each
                and every identifiable individual person in your Contributions
                to use the name or likeness of each and every such identifiable
                individual person to enable inclusion and use of your
                Contributions in any manner contemplated by the Services and
                these Legal Terms.
              </li>
              <li>
                Your Contributions are not false, inaccurate, or misleading.
              </li>
              <li>
                Your Contributions are not unsolicited or unauthorized
                advertising, promotional materials, pyramid schemes, chain
                letters, spam, mass mailings, or other forms of solicitation.
              </li>
              <li>
                Your Contributions are not obscene, lewd, lascivious, filthy,
                violent, harassing, libelous, slanderous, or otherwise
                objectionable (as determined by us).
              </li>
              <li>
                Your Contributions do not ridicule, mock, disparage, intimidate,
                or abuse anyone.
              </li>
              <li>
                Your Contributions are not used to harass or threaten (in the
                legal sense of those terms) any other person and to promote
                violence against a specific person or class of people.
              </li>
              <li>
                Your Contributions do not violate any applicable law,
                regulation, or rule.
              </li>
              <li>
                Your Contributions do not violate the privacy or publicity
                rights of any third party.
              </li>
              <li>
                Your Contributions do not violate any applicable law concerning
                child pornography, or otherwise intended to protect the health
                or well-being of minors.
              </li>
              <li>
                Your Contributions do not include any offensive comments that
                are connected to race, national origin, gender, sexual
                preference, or physical handicap.
              </li>
              <li>
                Your Contributions do not otherwise violate, or link to material
                that violates, any provision of these Legal Terms, or any
                applicable law or regulation.
              </li>
            </ul>
            <p className="text-base leading-relaxed mb-4">
              Any use of the Services in violation of the foregoing violates
              these Legal Terms and may result in, among other things,
              termination or suspension of your rights to use the Services.
            </p>
          </div>

          <div id="contribution-license">
            <h2 className="text-2xl font-semibold mb-4">
              6. CONTRIBUTION LICENSE
            </h2>
            <p className="text-base leading-relaxed mb-4">
              You and the Services agree that we may access, store, process, and
              use any information and personal data that you provide following
              the terms of the Privacy Policy and your choices (including
              settings).
            </p>
            <p className="text-base leading-relaxed mb-4">
              By submitting suggestions or other feedback regarding the
              Services, you agree that we can use and share such feedback for
              any purpose without compensation to you.
            </p>
            <p className="text-base leading-relaxed mb-4">
              We do not assert any ownership over your Contributions. You retain
              full ownership of all of your Contributions and any intellectual
              property rights or other proprietary rights associated with your
              Contributions. We are not liable for any statements or
              representations in your Contributions provided by you in any area
              on the Services. You are solely responsible for your Contributions
              to the Services and you expressly agree to exonerate us from any
              and all responsibility and to refrain from any legal action
              against us regarding your Contributions.
            </p>
          </div>

          <div id="services-management">
            <h2 className="text-2xl font-semibold mb-4">
              7. SERVICES MANAGEMENT
            </h2>
            <p className="text-base leading-relaxed mb-4">
              We reserve the right, but not the obligation, to: (1) monitor the
              Services for violations of these Legal Terms; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Legal Terms, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Services or otherwise
              disable all files and content that are excessive in size or are in
              any way burdensome to our systems; and (5) otherwise manage the
              Services in a manner designed to protect our rights and property
              and to facilitate the proper functioning of the Services.
            </p>
          </div>

          <div id="privacy-policy">
            <h2 className="text-2xl font-semibold mb-4">8. PRIVACY POLICY</h2>
            <p className="text-base leading-relaxed mb-4">
              We care about data privacy and security. Please review our Privacy
              Policy:{' '}
              <Link
                to="https://retailtypes.com/privacy-policy"
                className="text-blue-600 hover:underline focus:ring-2 focus:ring-blue-500"
              >
                retailtypes.com/privacy-policy
              </Link>
              . By using the Services, you agree to be bound by our Privacy
              Policy, which is incorporated into these Legal Terms. Please be
              advised the Services are hosted in India. If you access the
              Services from any other region of the world with laws or other
              requirements governing personal data collection, use, or
              disclosure that differ from applicable laws in India, then through
              your continued use of the Services, you are transferring your data
              to India, and you expressly consent to have your data transferred
              to and processed in India.
            </p>
          </div>

          <div id="term-termination">
            <h2 className="text-2xl font-semibold mb-4">
              9. TERM AND TERMINATION
            </h2>
            <p className="text-base leading-relaxed mb-4">
              These Legal Terms shall remain in full force and effect while you
              use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
              LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
              SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON
              FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR
              BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN
              THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
              TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY
              CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
              WARNING, IN OUR SOLE DISCRETION.
            </p>
            <p className="text-base leading-relaxed mb-4">
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </div>

          <div id="modifications-interruptions">
            <h2 className="text-2xl font-semibold mb-4">
              10. MODIFICATIONS AND INTERRUPTIONS
            </h2>
            <p className="text-base leading-relaxed mb-4">
              We reserve the right to change, modify, or remove the contents of
              the Services at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Services. We will not be liable to you or any
              third party for any modification, price change, suspension, or
              discontinuance of the Services.
            </p>
            <p className="text-base leading-relaxed mb-4">
              We cannot guarantee the Services will be available at all times.
              We may experience hardware, software, or other problems or need to
              perform maintenance related to the Services, resulting in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the
              Services at any time or for any reason without notice to you. You
              agree that we have no liability whatsoever for any loss, damage,
              or inconvenience caused by your inability to access or use the
              Services during any downtime or discontinuance of the Services.
              Nothing in these Legal Terms will be construed to obligate us to
              maintain and support the Services or to supply any corrections,
              updates, or releases in connection therewith.
            </p>
          </div>

          <div id="governing-law">
            <h2 className="text-2xl font-semibold mb-4">11. GOVERNING LAW</h2>
            <p className="text-base leading-relaxed mb-4">
              These Legal Terms shall be governed by and defined following the
              laws of India. Retail Types and yourself irrevocably consent that
              the courts of India shall have exclusive jurisdiction to resolve
              any dispute which may arise in connection with these Legal Terms.
            </p>
          </div>

          <div id="dispute-resolution">
            <h2 className="text-2xl font-semibold mb-4">
              12. DISPUTE RESOLUTION
            </h2>
            <p className="text-base leading-relaxed mb-4">
              <strong>Informal Negotiations</strong>
            </p>
            <p className="text-base leading-relaxed mb-4">
              To expedite resolution and control the cost of any dispute,
              controversy, or claim related to these Legal Terms (each a
              "Dispute" and collectively, the "Disputes") brought by either you
              or us (individually, a "Party" and collectively, the "Parties"),
              the Parties agree to first attempt to negotiate any Dispute
              (except those Disputes expressly provided below) informally for at
              least 30 days before initiating arbitration. Such informal
              negotiations commence upon written notice from one Party to the
              other Party.
            </p>
            <p className="text-base leading-relaxed mb-4">
              <strong>Restrictions</strong>
            </p>
            <p className="text-base leading-relaxed mb-4">
              The Parties agree that any arbitration shall be limited to the
              Dispute between the Parties individually. To the full extent
              permitted by law, (a) no arbitration shall be joined with any
              other proceeding; (b) there is no right or authority for any
              Dispute to be arbitrated on a class-action basis or to utilize
              class action procedures; and (c) there is no right or authority
              for any Dispute to be brought in a purported representative
              capacity on behalf of the general public or any other persons.
            </p>
            <p className="text-base leading-relaxed mb-4">
              <strong>
                Exceptions to Informal Negotiations and Arbitration
              </strong>
            </p>
            <p className="text-base leading-relaxed mb-4">
              The Parties agree that the following Disputes are not subject to
              the above provisions concerning informal negotiations and binding
              arbitration: (a) any Disputes seeking to enforce or protect, or
              concerning the validity of, any of the intellectual property
              rights of a Party; (b) any Dispute related to, or arising from,
              allegations of theft, piracy, invasion of privacy, or unauthorized
              use; and (c) any claim for injunctive relief. If this provision is
              found to be illegal or unenforceable, then neither Party will
              elect to arbitrate any Dispute falling within that portion of this
              provision found to be illegal or unenforceable and such Dispute
              shall be decided by a court of competent jurisdiction within the
              courts listed for jurisdiction above, and the Parties agree to
              submit to the personal jurisdiction of that court.
            </p>
          </div>

          <div id="corrections">
            <h2 className="text-2xl font-semibold mb-4">13. CORRECTIONS</h2>
            <p className="text-base leading-relaxed mb-4">
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, availability, and various other
              information. We reserve the right to correct any errors,
              inaccuracies, or omissions and to change or update the information
              on the Services at any time, without prior notice.
            </p>
          </div>

          <div id="disclaimer">
            <h2 className="text-2xl font-semibold mb-4">14. DISCLAIMER</h2>
            <p className="text-base leading-relaxed mb-4">
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
              AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
              THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE
              CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
              SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
              (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
              (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
              RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
              UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
              ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
              THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
              FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
              LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
              THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND
              MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
              RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE
              MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE,
              GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
              ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
              HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED
              IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO
              OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
              BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
              AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR
              IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
              CAUTION WHERE APPROPRIATE.
            </p>
          </div>

          <div id="limitations-liability">
            <h2 className="text-2xl font-semibold mb-4">
              15. LIMITATIONS OF LIABILITY
            </h2>
            <p className="text-base leading-relaxed mb-4">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </div>

          <div id="indemnification">
            <h2 className="text-2xl font-semibold mb-4">16. INDEMNIFICATION</h2>
            <p className="text-base leading-relaxed mb-4">
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys’ fees and expenses, made by any third party due to or
              arising out of: (1) use of the Services; (2) breach of these Legal
              Terms; (3) any breach of your representations and warranties set
              forth in these Legal Terms; (4) your violation of the rights of a
              third party, including but not limited to intellectual property
              rights; or (5) any overt harmful act toward any other user of the
              Services with whom you connected via the Services. Notwithstanding
              the foregoing, we reserve the right, at your expense, to assume
              the exclusive defense and control of any matter for which you are
              required to indemnify us, and you agree to cooperate, at your
              expense, with our defense of such claims. We will use reasonable
              efforts to notify you of any such claim, action, or proceeding
              which is subject to this indemnification upon becoming aware of
              it.
            </p>
          </div>

          <div id="user-data">
            <h2 className="text-2xl font-semibold mb-4">17. USER DATA</h2>
            <p className="text-base leading-relaxed mb-4">
              We will maintain certain data that you transmit to the Services
              for the purpose of managing the performance of the Services, as
              well as data relating to your use of the Services. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the Services. You agree that we
              shall have no liability to you for any loss or corruption of any
              such data, and you hereby waive any right of action against us
              arising from any such loss or corruption of such data.
            </p>
          </div>

          <div id="electronic-communications">
            <h2 className="text-2xl font-semibold mb-4">
              18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </h2>
            <p className="text-base leading-relaxed mb-4">
              Visiting the Services, sending us emails, and completing online
              forms constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Services, satisfy any legal
              requirement that such communication be in writing. YOU HEREBY
              AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
              OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
              AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA
              THE SERVICES. You hereby waive any rights or requirements under
              any statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or
              retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.
            </p>
          </div>

          <div id="miscellaneous">
            <h2 className="text-2xl font-semibold mb-4">19. MISCELLANEOUS</h2>
            <p className="text-base leading-relaxed mb-4">
              These Legal Terms and any policies or operating rules posted by us
              on the Services or in respect to the Services constitute the
              entire agreement and understanding between you and us. Our failure
              to exercise or enforce any right or provision of these Legal Terms
              shall not operate as a waiver of such right or provision. These
              Legal Terms operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at
              any time. We shall not be responsible or liable for any loss,
              damage, delay, or failure to act caused by any cause beyond our
              reasonable control. If any provision or part of a provision of
              these Legal Terms is determined to be unlawful, void, or
              unenforceable, that provision or part of the provision is deemed
              severable from these Legal Terms and does not affect the validity
              and enforceability of any remaining provisions. There is no joint
              venture, partnership, employment or agency relationship created
              between you and us as a result of these Legal Terms or use of the
              Services. You agree that these Legal Terms will not be construed
              against us by virtue of having drafted them. You hereby waive any
              and all defenses you may have based on the electronic form of
              these Legal Terms and the lack of signing by the parties hereto to
              execute these Legal Terms.
            </p>
          </div>

          <div id="contact-us">
            <h2 className="text-2xl font-semibold mb-4">20. CONTACT US</h2>
            <p className="text-base leading-relaxed mb-4">
              In order to resolve a complaint regarding the Services or to
              receive further information regarding use of the Services, please
              contact us at:
            </p>
            <p className="text-base leading-relaxed mb-4">Retail Types</p>
            <p className="text-base leading-relaxed mb-4">
              B-148, Kankarbagh Main Road
            </p>
            <p className="text-base leading-relaxed mb-4">
              Patna, Bihar 800020
            </p>
            <p className="text-base leading-relaxed mb-4">India</p>
            <p className="text-base leading-relaxed mb-4">
              Phone: +91 94306 22181
            </p>
            <p className="text-base leading-relaxed mb-4">
              <Link
                to="mailto:info@retailtypes.com"
                className="text-blue-600 hover:underline focus:ring-2 focus:ring-blue-500"
              >
                info@retailtypes.com
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TermsConditions
