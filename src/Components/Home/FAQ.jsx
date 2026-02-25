"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    question: "Who is Yogesh Chavan?",
    answer: "Yogesh Chavan is a Full-Stack Software Engineer and UI/UX Specialist based in India. He specializes in building high-performance web applications using the MERN stack (MongoDB, Express, React, Node.js) and Next.js."
  },
  {
    question: "What are Yogesh Chavan's core technical skills?",
    answer: "Yogesh is expert in modern JavaScript (ES6+), React.js, Next.js, Node.js, and complex system architecture. He is also proficient in UI frameworks like Tailwind CSS and Framer Motion for creating fluid, premium digital experiences."
  },
  {
    question: "How can I contact Yogesh Chavan for projects?",
    answer: "You can reach out to Yogesh Chavan via email at yogeshchavan1209@gmail.com or connect with him on LinkedIn. He is currently open to full-stack development roles and high-impact freelance projects."
  },
  {
    question: "Why should I choose Yogesh Chavan for my development needs?",
    answer: "Despite having 2 years of professional experience, Yogesh demonstrates a depth of knowledge equivalent to senior engineers through his commitment to clean architecture, performance optimization, and staying at the cutting edge of web technology."
  }
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex justify-between items-center group ${
          isOpen ? 'bg-white border-emerald-500 shadow-xl shadow-emerald-500/10' : 'bg-stone-50 border-stone-100 hover:border-emerald-200'
        }`}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-emerald-600' : 'text-stone-900'}`}>
          {question}
        </span>
        <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className={isOpen ? 'text-emerald-500' : 'text-stone-400'}
        >
            <FaChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-8 text-stone-600 leading-relaxed bg-white border-x border-b border-emerald-500 rounded-b-2xl -mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-stone-50/30 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl">
              <FaQuestionCircle size={24} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Common <span className="text-emerald-600">Questions</span></h2>
          <p className="text-lg text-stone-600">
            Answers to common inquiries about my expertise and professional background.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
