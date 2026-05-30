'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-earth-700 rounded-lg flex items-center justify-center font-bold">
                FS
              </div>
              <span className="font-montserrat font-bold text-lg">Forest Supplies</span>
            </div>
            <p className="text-earth-400 text-sm leading-relaxed">
              Premium timber products and sustainable forestry solutions for a greener future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-montserrat font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-earth-400 hover:text-earth-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-earth-400 hover:text-earth-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-earth-400 hover:text-earth-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-earth-400 hover:text-earth-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-montserrat font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-earth-400 hover:text-earth-600 transition-colors">
                  Timber Poles
                </a>
              </li>
              <li>
                <a href="#services" className="text-earth-400 hover:text-earth-600 transition-colors">
                  Tree Planting
                </a>
              </li>
              <li>
                <a href="#nursery" className="text-earth-400 hover:text-earth-600 transition-colors">
                  Nursery Seedlings
                </a>
              </li>
              <li>
                <a href="#services" className="text-earth-400 hover:text-earth-600 transition-colors">
                  Forest Management
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-montserrat font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-earth-700 rounded-lg flex items-center justify-center hover:bg-earth-600 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-earth-700 rounded-lg flex items-center justify-center hover:bg-earth-600 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-earth-700 rounded-lg flex items-center justify-center hover:bg-earth-600 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="w-10 h-10 bg-earth-700 rounded-lg flex items-center justify-center hover:bg-earth-600 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-earth-700/30 mb-8 origin-left"
        ></motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-earth-400"
        >
          <p>&copy; {currentYear} Forest Supplies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-earth-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-earth-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-earth-600 transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
