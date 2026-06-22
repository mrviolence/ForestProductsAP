'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-forest-900 mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your forestry needs? Contact us today for a consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cream to-white rounded-2xl p-8 border border-forest-900/10 text-center"
          >
            <div className="w-12 h-12 bg-earth-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-forest-900 mb-2">Phone</h3>
            <a href="tel:+254712345678" className="text-gray-600 hover:text-earth-700 transition-colors">+254 712 345 678</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cream to-white rounded-2xl p-8 border border-forest-900/10 text-center"
          >
            <div className="w-12 h-12 bg-earth-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-forest-900 mb-2">Email</h3>
            <a href="mailto:info@forestsupplies.com" className="text-gray-600 hover:text-earth-700 transition-colors">info@forestsupplies.com</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cream to-white rounded-2xl p-8 border border-forest-900/10 text-center"
          >
            <div className="w-12 h-12 bg-earth-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-forest-900 mb-2">Location</h3>
            <p className="text-gray-600">Nairobi, Kenya</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cream to-white rounded-3xl p-6 md:p-12 border border-forest-900/10 max-w-2xl mx-auto"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-forest-700 text-white rounded-xl px-6 py-4 flex items-center gap-3 font-poppins"
            >
              <span className="text-2xl">✓</span>
              <span>Message sent successfully! We&apos;ll get back to you shortly.</span>
            </motion.div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-forest-900 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-forest-900/20 focus:outline-none focus:border-earth-700"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-forest-900 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-forest-900/20 focus:outline-none focus:border-earth-700"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-forest-900 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-forest-900/20 focus:outline-none focus:border-earth-700"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-forest-900 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-forest-900/20 focus:outline-none focus:border-earth-700"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label className="block text-forest-900 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-forest-900/20 focus:outline-none focus:border-earth-700"
                placeholder="Your message"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-earth-700 hover:bg-earth-900 text-white px-8 py-3 rounded-lg font-poppins font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
