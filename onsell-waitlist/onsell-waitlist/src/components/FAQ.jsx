import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    question: "What is OnSell?",
    answer:
      "OnSell is a modern marketplace that allows people to buy and sell new and fairly used items locally in a secure and easy way.",
  },
  {
    question: "When will OnSell launch?",
    answer:
      "We are preparing for our first public launch in Calabar and Uyo. Join the waitlist to receive updates and early access.",
  },
  {
    question: "Is joining the waitlist free?",
    answer:
      "Yes. Joining the waitlist is completely free and gives you priority access when OnSell launches.",
  },
  {
    question: "Which cities will be available first?",
    answer:
      "Our first launch will cover Calabar and Uyo before expanding to other cities across Nigeria.",
  },
  {
    question: "Can I sell products on OnSell?",
    answer:
      "Absolutely. Individuals and businesses will be able to create listings, upload photos, chat with buyers, and manage sales directly from the app.",
  },
  {
    question: "Will there be secure payments?",
    answer:
      "Yes. Secure payment options and buyer protection features will be available as the platform grows.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <SectionWrapper>
    <section
      id="faq"
      className="bg-white py-24 px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex rounded-full bg-[#0B8F7A]/10 px-5 py-2 text-sm font-semibold text-[#0B8F7A]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#073B3A]">
            Got Questions?
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Everything you need to know about OnSell before launch.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >

              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-7 text-left"
              >

                <span className="text-lg font-semibold text-[#073B3A]">
                  {faq.question}
                </span>

                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180 text-[#0B8F7A]" : ""
                  }`}
                />

              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active === index ? "max-h-60" : "max-h-0"
                }`}
              >

                <p className="px-7 pb-7 leading-8 text-gray-500">
                  {faq.answer}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
    </SectionWrapper>
  );
}