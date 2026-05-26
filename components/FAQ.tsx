'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What types of timber poles do you offer?',
      answer: 'We offer high-quality hardwood and softwood timber poles in various sizes and grades suitable for construction, fencing, utility applications, and structural support.',
    },
    {
      question: 'Do you provide delivery services?',
      answer: 'Yes, we provide reliable transportation and delivery services throughout the region. We ensure safe and timely delivery of all forest products.',
    },
    {
      question: 'How do I order seedlings for reforestation?',
      answer: 'You can contact us directly with your seedling requirements. We offer bulk orders with competitive pricing and can assist with planting services.',
    },
    {
      question: 'Are your products sustainably sourced?',
      answer: 'Absolutely! We are committed to sustainable forestry practices. All our products come from responsibly managed forests with active reforestation programs.',
    },
    {
      question: 'What is the quality of your firewood?',
      answer: 'Our firewood is premium quality, properly dried and processed. It is ideal for heating, commercial use, and meets all quality standards.',
    },
    {
      question: 'Do you offer forestry consultation services?',
      answer: 'Yes, our experienced foresters provide professional consultation on forest management, tree planting strategies, and sustainable forestry practices.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-forest-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-forest-900/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-cream transition-colors"
              >
                <h3 className="text-lg font-montserrat font-bold text-forest-900 text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown size={24} className="text-earth-700" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-forest-900/10 bg-cream px-6 py-4"
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
