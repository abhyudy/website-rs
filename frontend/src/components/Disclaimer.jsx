import React from 'react'

const Disclaimer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-background-color min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 text-gray-900">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Disclaimer</h1>
        <p className="text-lg font-semibold mb-8">
          Last updated:{' '}
          <span className="text-gray-900 font-semibold">July 10, 2025</span>
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-4"> Website Disclaimer</h2>
          <p>
            All the information on this website -{' '}
            <a
              href="mailto:info@retailtypes.com"
              className="text-blue-600 hover:underline"
            >
              info@retailtypes.com
            </a>
            - is published in good faith and for general information purposes
            only. Retail Types does not make any warranties about the
            completeness, reliability, and accuracy of this information. Any
            action you take upon the information you find on this website
            (Retail Types) is strictly at your own risk. Retail Types will not
            be liable for any losses and/or damages in connection with the use
            of our website.
            <br />
            <br />
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link which may
            have gone 'bad'.
            <br />
            <br />
            Please be aware that when you leave our website, other sites may
            have different privacy policies and terms which are beyond our
            control. Please be sure to check the Privacy Policies of these sites
            as well as their "Terms of Service" before engaging in any business
            or uploading any information.
          </p>
        </div>

        <section className="space-y-8 text-base leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-4 mt-8">
              Affiliates Disclaimer
            </h2>
            <p>
              The Site may contain links to affiliate websites, and we receive
              an affiliate commission for any purchases made by you on the
              affiliate website using such links. Our affiliates include the
              following:
              <ul className="list-disc list-inside ml-4">
                <li>AvantLink</li>
                <li>Awin (Affiliate Window)</li>
                <li>CJ Affiliate by Conversant</li>
                <li>Clickbank</li>
                <li>eBay Partner Network</li>
                <li>FlexOffers</li>
                <li>iDevAffiliate</li>
                <li>MaxBounty</li>
                <li>Rakuten Affiliate Network</li>
                <li>RevenueWire</li>
                <li>ShareASale</li>
                <li>Others</li>
              </ul>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4"> Consent</h2>
            <p>
              By using our website, you hereby consent to our disclaimer and
              agree to its terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Updates</h2>
            <p>
              Should we update, amend, or make any changes to this document,
              those changes will be prominently posted here.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Disclaimer
