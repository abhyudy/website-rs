import React from 'react'

const Disclaimer = () => {
  return (
    <div className="bg-background-color">
      <div className=" max-w-5xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-5xl  text-background-black font-bold mb-4">
          Disclaimer
        </h1>
        <p className="text-3xl text-background-black font-semibold mb-6">
          Effective from Year:
          <span className="text-background-black font-semibold"> 2025</span>
        </p>

        <p className="mb-4">
          The information provided on [YourWebsiteName] is intended for general
          informational purposes only. While we strive to ensure that all
          content on this website is accurate, complete, and up to date, we make
          no warranties or representations of any kind, express or implied,
          about the accuracy, reliability, suitability, or availability of the
          information, products, services, or related graphics contained on the
          site for any purpose. Any reliance you place on such information is
          strictly at your own risk.
        </p>

        <p className="mb-4">
          [YourWebsiteName] does not accept any responsibility or liability for
          any loss or damage, including indirect or consequential loss or
          damage, arising from loss of data or profits resulting from, or in
          connection with, the use of this website. Users are advised to verify
          any information before relying on it. We expressly disclaim liability
          for errors or omissions in the contents of this site.
        </p>

        <p className="mb-4">
          This website may contain links to other websites or resources that are
          not owned or controlled by us. Such links are provided for convenience
          and informational purposes only. We have no control over the nature,
          content, and availability of those sites and do not endorse or assume
          responsibility for any information, products, or services offered by
          third parties.
        </p>

        <p className="mb-4">
          We make every effort to keep the website running smoothly. However,
          [YourWebsiteName] takes no responsibility for, and will not be liable
          for, the website being temporarily unavailable due to technical issues
          beyond our control.
        </p>

        <p className="mb-4">
          All opinions expressed on this site are those of the authors and do
          not necessarily reflect the views of [YourWebsiteName] as a whole.
          Content such as reviews, recommendations, or advice is subjective and
          intended for informational use only. Users should consult
          professionals or conduct further research when making significant
          decisions.
        </p>

        <p className="mb-4">
          We reserve the right to change, modify, or remove content on this
          website at any time without prior notice. Your continued use of the
          website after such changes indicates your acceptance of the updated
          disclaimer.
        </p>

        <p className="mb-4">
          If you have any questions or concerns about this disclaimer, please
          feel free to contact us at:{' '}
          <a href="info@retailtypes.com" className="text-blue-500 underline">
            info@retailtypes.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Disclaimer
