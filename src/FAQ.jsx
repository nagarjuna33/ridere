import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './FAQ.css';
import FAQImage from './Images/FAQimage.png'; // Corrected image import

function FAQ(props) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container text-center faqtotalsection">

      <div className="row">
        <h2>FAQ</h2>
        <div className="col-8 faq-left-section d-flex align-items-center"> {/* Use flexbox */}
          <section className="faq-section">
            <div className="faq-container">
              {/* <h2>FAQ</h2> */}
              <div className="faq-accordion">
                {props.faqs.map((faq, index) => (
                  <div className="faq-accordion-item" key={index}>
                    <button
                      aria-expanded={index === expandedIndex}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span
                        className={`faq-icon ${index === expandedIndex ? 'rotated' : ''}`}
                        aria-hidden="true"
                      ></span>

                      <span className="faq-accordion-title">{faq.question}</span>
                    </button>
                    {index === expandedIndex && (
                      <div className="faq-accordion-content">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="col-12 col-md-4 faq-right-section d-flex align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <img className='frequentlyaskedquestion' src={FAQImage} alt="FAQ Image" />
          </div>
        </div>
      </div>
    </div>

  );
}

function FAQApp() {
  const faqs = [
    {
      question: "1. What is RIDERE?",
      answer: "RIDERE is a ride services project, offering convenient and affordable transportation options like bikes, auto rickshaws, and cabs for intra-city travel."
    },
    {
      question: "2. How do I book a ride with RIDERE?",
      answer: "Simply download the RIDERE app, create an account, and select your preferred ride type and destination. Confirm your booking, and a nearby driver will pick you up."
    },
    {
      question: "3. Is RIDERE available in my city?",
      answer: "RIDERE is expanding rapidly. Check the app to see if it's available in your city, or stay tuned for updates on our service areas."
    },
    {
      question: "4. How do I pay for my RIDERE ride?",
      answer: "You can pay for your ride using the app's integrated payment system, which supports various payment methods, including credit/debit cards and digital wallets."
    },
    {
      question: "5. Can I book a ride for someone else?",
      answer: "Absolutely, you can book a ride for a friend or family member by entering their destination and contact details when booking."
    },
    {
      question: "6. How can I contact my driver?",
      answer: "You can message or call your driver directly through the RIDERE app for any ride-related communication."
    }
  ];

  return (
    <div>
      <FAQ faqs={faqs} />
      {/* <hr /> */}
    </div>
  );
}

export default FAQApp;

