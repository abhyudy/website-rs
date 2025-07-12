import React from 'react'

const PrivacyPolicy = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-background-color min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 text-gray-900">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg font-semibold mb-8">
          Last updated:{' '}
          <span className="text-gray-900 font-semibold">July 10, 2025</span>
        </p>

        <section className="space-y-8 text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p>
              This Privacy Notice for Retail Types ("we," "us," or "our")
              describes how and why we might access, collect, store, use, and/or
              share ("process") your personal information when you use our
              services ("Services"), including when you:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Visit our website at retailtypes.com or any website of ours
                  that links to this Privacy Notice
                </li>
                <li>
                  Engage with us in other related ways, including any sales,
                  marketing, or events
                </li>
              </ul>
              Questions or concerns? Reading this Privacy Notice will help you
              understand your privacy rights and choices. We are responsible for
              making decisions about how your personal information is processed.
              If you do not agree with our policies and practices, please do not
              use our Services. If you still have any questions or concerns,
              please contact us at{' '}
              <a
                href="mailto:info@retailtypes.com"
                className="text-blue-600 hover:underline"
              >
                info@retailtypes.com
              </a>
              .
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              SUMMARY OF KEY POINTS
            </h2>
            <p>
              This summary provides key points from our Privacy Notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our{' '}
              <a href="" className="text-blue-600 hover:underline">
                table of contents
              </a>{' '}
              below to find the section you are looking for. <br /> <br />
              What personal information do we process? When you visit, use, or
              navigate our Services, we may process personal information
              depending on how you interact with us and the Services, the
              choices you make, and the products and features you use. <br />{' '}
              <br /> Do we process any sensitive personal information? Some of
              the information may be considered "special" or "sensitive" in
              certain jurisdictions, for example your racial or ethnic origins,
              sexual orientation, and religious beliefs. We do not process
              sensitive personal information. <br /> <br />
              Do we collect any information from third parties? We do not
              collect any information from third parties. <br />
              <br /> How do we process your information? We process your
              information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to
              comply with law. We may also process your information for other
              purposes with your consent. We process your information only when
              we have a valid legal reason to do so. <br /> <br /> In what
              situations and with which parties do we share personal
              information? We may share information in specific situations and
              with specific third parties. <br /> <br />
              How do we keep your information safe? We have adequate
              organizational and technical processes and procedures in place to
              protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.{' '}
              <br /> <br /> What are your rights? Depending on where you are
              located geographically, the applicable privacy law may mean you
              have certain rights regarding your personal information. <br />{' '}
              <br />
              How do you exercise your rights? The easiest way to exercise your
              rights is by submitting a data subject access request, or by
              contacting us. We will consider and act upon any request in
              accordance with applicable data protection laws.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="list-decimal list-inside space-y-2 text-base">
              <li>
                <button
                  onClick={() => scrollToSection('information-collected')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  What Information Do We Collect?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process-information')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  How Do We Process Your Information?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('share-information')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  When and With Whom Do We Share Your Personal Information?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('retention-period')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  How Long Do We Keep Your Information?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('data-security')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  How Do We Keep Your Information Safe?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('minors')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  Do We Collect Information from Minors?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('privacy-rights')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  What Are Your Privacy Rights?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('do-not-track')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  Controls for Do-Not-Track Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('updates')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  Do We Make Updates to This Notice?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact-us')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  How Can You Contact Us About This Notice?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('manage-data')}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  How Can You Review, Update, or Delete the Data We Collect from
                  You?
                </button>
              </li>
            </ul>
          </div>

          <div id="information-collected">
            <h2 className="text-2xl font-semibold mb-4">
              1. What Information Do We Collect?
            </h2>
            <p>
              <strong>Personal information you disclose to us</strong>
              <br />
              <em>In Short:</em> We collect personal information that you
              provide to us.
              <br />
              <br />
              We collect personal information that you voluntarily provide to us
              when you express an interest in obtaining information about us or
              our products and Services, when you participate in activities on
              the Services, or otherwise when you contact us.
              <br />
              <br />
              <strong>Personal Information Provided by You.</strong> The
              personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
              <ul className="list-disc list-inside ml-4">
                <li>Names</li>
                <li>Email addresses</li>
              </ul>
              <strong>Sensitive Information.</strong> We do not process
              sensitive information.
              <br />
              <br />
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
          </div>

          <div id="process-information">
            <h2 className="text-2xl font-semibold mb-4">
              2. How Do We Process Your Information?
            </h2>
            <p>
              <em>In Short:</em> We process your information to provide,
              improve, and administer our Services, communicate with you, for
              security and fraud prevention, and to comply with law. We may also
              process your information for other purposes with your consent.
              <br />
              <br />
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
              <ul className="list-disc list-inside ml-4">
                <li>To provide, improve, and administer our Services.</li>
                <li>
                  To communicate with you regarding your inquiries or updates
                  about our Services.
                </li>
                <li>
                  For security and fraud prevention to protect our Services and
                  users.
                </li>
                <li>
                  To comply with applicable legal and regulatory obligations.
                </li>
              </ul>
            </p>
          </div>

          <div id="share-information">
            <h2 className="text-2xl font-semibold mb-4">
              3. When and With Whom Do We Share Your Personal Information?
            </h2>
            <p>
              <em>In Short:</em> We may share information in specific situations
              described in this section and/or with the following third parties.
              <br />
              <br />
              We may need to share your personal information in the following
              situations:
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong>Business Transfers.</strong> We may share or transfer
                  your information in connection with, or during negotiations
                  of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business to another
                  company.
                </li>
              </ul>
            </p>
          </div>

          <div id="retention-period">
            <h2 className="text-2xl font-semibold mb-4">
              4. How Long Do We Keep Your Information?
            </h2>
            <p>
              <em>In Short:</em> We keep your information for as long as
              necessary to fulfill the purposes outlined in this Privacy Notice
              unless otherwise required by law.
              <br />
              <br />
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements).
              <br />
              <br />
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </div>

          <div id="data-security">
            <h2 className="text-2xl font-semibold mb-4">
              5. How Do We Keep Your Information Safe?
            </h2>
            <p>
              <em>In Short:</em> We aim to protect your personal information
              through a system of organizational and technical security
              measures.
              <br />
              <br />
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the Services within a
              secure environment.
            </p>
          </div>

          <div id="minors">
            <h2 className="text-2xl font-semibold mb-4">
              6. Do We Collect Information from Minors?
            </h2>
            <p>
              <em>In Short:</em> We do not knowingly collect data from or market
              to children under 18 years of age.
              <br />
              <br />
              We do not knowingly collect, solicit data from, or market to
              children under 18 years of age, nor do we knowingly sell such
              personal information. By using the Services, you represent that
              you are at least 18 or that you are the parent or guardian of such
              a minor and consent to such minor dependent’s use of the Services.
              If we learn that personal information from users less than 18
              years of age has been collected, we will deactivate the account
              and take reasonable measures to promptly delete such data from our
              records.
            </p>
          </div>

          <div id="privacy-rights">
            <h2 className="text-2xl font-semibold mb-4">
              7. What Are Your Privacy Rights?
            </h2>
            <p>
              <em>In Short:</em> You may review, change, or terminate your
              account at any time, depending on your country, province, or state
              of residence.
              <br />
              <br />
              <strong>Withdrawing your consent:</strong> If we are relying on
              your consent to process your personal information, which may be
              express and/or implied consent depending on the applicable law,
              you have the right to withdraw your consent at any time. You can
              withdraw your consent at any time by contacting us by using the
              contact details provided in the section "How Can You Contact Us
              About This Notice?" below.
              <br />
              <br />
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
              <br />
              <br />
              If you have questions or comments about your privacy rights, you
              may email us at{' '}
              <a
                href="mailto:info@retailtypes.com"
                className="text-blue-600 hover:underline"
              >
                info@retailtypes.com
              </a>
              .
            </p>
          </div>

          <div id="do-not-track">
            <h2 className="text-2xl font-semibold mb-4">
              8. Controls for Do-Not-Track Features
            </h2>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this Privacy Notice.
            </p>
          </div>

          <div id="updates">
            <h2 className="text-2xl font-semibold mb-4">
              9. Do We Make Updates to This Notice?
            </h2>
            <p>
              <em>In Short:</em> Yes, we will update this notice as necessary to
              stay compliant with relevant laws.
              <br />
              <br />
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by an updated "Last updated" date at the
              top of this Privacy Notice. If we make material changes to this
              Privacy Notice, we may notify you either by prominently posting a
              notice of such changes or by directly sending you a notification.
              We encourage you to review this Privacy Notice frequently to be
              informed of how we are protecting your information.
            </p>
          </div>

          <div id="contact-us">
            <h2 className="text-2xl font-semibold mb-4">
              10. How Can You Contact Us About This Notice?
            </h2>
            <p>
              If you have questions or comments about this notice, you may
              contact us by post at:
              <br />
              <br />
              Retail Types
              <br />
              B-148, Kankarbagh Main Road
              <br />
              Patna, Bihar 800020
              <br />
              India
              <br />
              Phone: +91 94306 22181
              <br />
              <a
                href="mailto:info@retailtypes.com"
                className="text-blue-600 hover:underline"
              >
                info@retailtypes.com
              </a>
            </p>
          </div>

          <div id="manage-data">
            <h2 className="text-2xl font-semibold mb-4">
              11. How Can You Review, Update, or Delete the Data We Collect from
              You?
            </h2>
            <p>
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, details about how we have processed it, correct
              inaccuracies, or delete your personal information. You may also
              have the right to withdraw your consent to our processing of your
              personal information. These rights may be limited in some
              circumstances by applicable law. The easiest way to exercise your
              rights is by submitting a data subject access request, or by
              contacting us at{' '}
              <a
                href="mailto:info@retailtypes.com"
                className="text-blue-600 hover:underline"
              >
                info@retailtypes.com
              </a>
              . We will consider and act upon any request in accordance with
              applicable data protection laws.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
