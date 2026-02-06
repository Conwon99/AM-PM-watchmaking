import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "How can I get my watch to you?",
    answer:
      "Our workshop operates by appointment only. Please get in touch to book a time that suits you. If you're local, we also offer a collection service. Alternatively, we provide a fully insured postal service.",
  },
  {
    question: "What can you repair?",
    answer:
      "We repair almost all watch brands, from simple battery replacements to complete mechanical servicing. We also replace watch glasses in all shapes and sizes.",
  },
  {
    question: "Do you use genuine manufacturer parts?",
    answer:
      "Yes. We use only genuine manufacturer parts. If replacement parts are required during a service, this will always be discussed with you beforehand, along with a clear explanation of why they are needed. Any replaced parts will be returned to you with your watch.",
  },
  {
    question: "Why does my watch need a service?",
    answer:
      "Mechanical watches typically contain between 180 and 500 individual components. These parts work together using specific oils and greases to ensure smooth operation. Over time, lubricants can degrade, dry out, or attract dirt, which affects performance. This often results in irregular timekeeping, reduced power reserve, or the watch stopping prematurely. Regular servicing helps prevent wear to movement components and keeps your watch running within specification.",
  },
  {
    question: "How often does my watch need a service?",
    answer: "We recommend servicing your watch every 3–5 years.",
  },
  {
    question: "My watch is vintage (from the 1970s). Can you repair it?",
    answer:
      "Yes—very likely. We have serviced and repaired thousands of vintage watches. You can see examples of our work on our Instagram page. While vintage watches are generally less water-resistant than modern models, with proper care they can keep time just as accurately.",
  },
  {
    question: "Do you offer dial restoration?",
    answer:
      "We don't carry out dial restoration in-house, but we work closely with an industry-leading restoration specialist. Dial restoration is commonly undertaken as part of full vintage restorations or when a dial has been damaged by water ingress.",
  },
  {
    question: "How long will a repair take?",
    answer:
      "Minor repairs can usually be completed and returned within two weeks. Full servicing typically takes 3–5 weeks, depending on parts availability.",
  },
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="box-border caret-transparent flex flex-col gap-y-3">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="box-border caret-transparent border border-neutral-200 rounded-2xl overflow-hidden bg-white border-solid"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left box-border caret-transparent px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-slate-900 leading-6 md:text-lg">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-slate-700 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="box-border caret-transparent px-5 pb-4 md:px-6 md:pb-5 pt-0">
                <p className="text-[15px] text-slate-600 leading-6 md:text-base md:leading-7">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
