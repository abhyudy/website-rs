import React, { useState } from 'react'

const FaqSection = () => {
  // State to track which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null)

  // Function to toggle accordion
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  // FAQ data
  const faqs = [
    {
      id: 'faq-1',
      question: 'Q1. How do I update my billing information?',
      answer:
        'To update your billing information, log in to your account, navigate to the settings or billing section, and update your payment details.',
    },
    {
      id: 'faq-2',
      question: 'Q2. How can I contact customer support?',
      answer:
        "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
    },
    {
      id: 'faq-3',
      question: 'Q3. How do I update my profile information?',
      answer:
        'To update your profile information, go to your account settings or profile page and edit the relevant fields such as name, email, or other details.',
    },
    {
      id: 'faq-4',
      question: 'Q4. How do I find my purchase history?',
      answer:
        'To find your purchase history, log in to your account and navigate to the order history or purchases section, where your past transactions will be listed.',
    },
  ]

  return (
    <div>
      <section className="py-6">
        <div className="mx-auto max-w-6xl px-2 ">
          <div className="pb-2">
            <h6 className="text-3xl  font-inter font-bold text-left">FAQs</h6>
          </div>

          <div className="accordion-group">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`accordion py-4 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:[background-color:white] ${
                  openAccordion === faq.id ? '[background-color:white]' : ''
                }`}
                id={faq.id}
              >
                <button
                  className={`accordion-toggle group inline-flex items-center justify-between leading-8 w-full transition duration-500 text-left hover:[color:#E37561] ${
                    openAccordion === faq.id
                      ? 'font-medium [color:#E37561]'
                      : ''
                  }`}
                  style={{ color: '#E37561' }}
                  aria-controls={`${faq.id}-content`}
                  aria-expanded={openAccordion === faq.id}
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <h5 className="text-base sm:text-lg font-inter">{faq.question}</h5>
                  <svg
                    className={`transition duration-500 group-hover:[color:#E37561] ${
                      openAccordion === faq.id
                        ? '[color:#E37561] rotate-180'
                        : ''
                    }`}
                    style={{ color: '#E37561' }}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="10"
                      fill="white"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <path
                      d="M6 9L11 14L16 9Z"
                      fill="#E37561"
                      stroke="#E37561"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  id={`${faq.id}-content`}
                  className="accordion-content w-full px-0 overflow-hidden transition-all duration-500"
                  aria-labelledby={faq.id}
                  style={{
                    maxHeight: openAccordion === faq.id ? '250px' : '0',
                    opacity: openAccordion === faq.id ? 1 : 0,
                  }}
                >
                  <p
                    className="text-base leading-6 pt-4"
                    style={{ color: '#E37561' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FaqSection
