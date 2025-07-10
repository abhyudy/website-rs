import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-background-color">
      <div className="max-w-5xl mx-auto px-4 py-12 text-background-black">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg font-semibold mb-6">
          Effective from Year:{' '}
          <span className="text-black font-semibold"> 2025</span>
        </p>

        <section className="space-y-6 text-base sm:text-lg">
          <div>
            <h2 className="text-lg font-semibold">Introduction</h2>
            <p>
              At [YourWebsiteName], we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, share, and protect your data when you use our
              website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email
              address, phone number, shipping address, and payment details. We
              also gather technical data, such as browser information, IP
              address, and device type.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              How We Use Your Information
            </h2>
            <p>
              Your data is used to process orders, respond to inquiries, improve
              the website, send updates, and for analytics or marketing
              communication (only with your consent).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              Cookies and Tracking Technologies
            </h2>
            <p>
              Our site uses cookies and other tracking technologies to enhance
              browsing experience, remember user preferences, and analyze site
              traffic. You can manage cookie settings in your browser.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Sharing Your Information</h2>
            <p>
              We do not share your personal information except where it is
              needed to enable third-party partners who help us run the website
              (e.g. payment processors, delivery services), and always under
              strict privacy agreements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your data,
              including the use of encrypted access, firewalls, and intrusion
              detection. However, no system is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not
              responsible for the privacy practices or content of those
              websites. We encourage you to read the privacy policies of every
              external site you visit.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Your Rights</h2>
            <p>
              You have rights to access, correct, delete, or restrict your
              personal information. If you'd like to do so, please contact us
              using the information provided below. We may ask for verification
              of your identity before processing such requests.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy occasionally to reflect changes
              in our practices or for legal reasons. We will post the updates on
              this page and notify users as required by applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              your personal data, please feel free to contact us at:{' '}
              <a
                href="mailto:YourEmail@example.com"
                className="text-blue-600 underline"
              >
                YourEmail@example.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
