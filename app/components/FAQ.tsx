'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'About the Course',
      questions: [
        {
          question: 'What types of corporate training programs does Accredian offer?',
          answer: 'Accredian offers comprehensive corporate training programs including Product & Innovation, Gen-AI Mastery, Leadership Development, Tech & Data Analytics, Operations Excellence, Digital Transformation, and Fintech Innovation.',
        },
        {
          question: 'What domain specializations are available?',
          answer: 'We provide specialized training across multiple domains including Technology, Data Science, Product Management, Leadership, Operations, Digital Enterprise, and Fintech Innovation.',
        },
      ],
    },
    {
      category: 'About the Delivery',
      questions: [
        {
          question: 'How are the training programs delivered?',
          answer: 'Our programs are delivered through a flexible approach combining online sessions, hands-on projects, and expert mentorship tailored to your organizational needs.',
        },
        {
          question: 'Can the programs be customized for our organization?',
          answer: 'Yes, all our programs can be fully customized based on your skill gap analysis and organizational goals.',
        },
      ],
    },
    {
      category: 'Miscellaneous',
      questions: [
        {
          question: 'What is the typical duration of a training program?',
          answer: 'Program duration varies based on customization, typically ranging from 4 weeks to 6 months depending on the depth and scope.',
        },
        {
          question: 'Do you provide certification upon completion?',
          answer: 'Yes, participants receive industry-recognized certificates upon successful completion of the training programs.',
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                      >
                        <span className="font-semibold text-gray-900">
                          {faq.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            openIndex === globalIndex ? 'rotate-180' : ''
                          }`}
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
                      </button>
                      {openIndex === globalIndex && (
                        <div className="px-6 pb-4 text-gray-600">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
