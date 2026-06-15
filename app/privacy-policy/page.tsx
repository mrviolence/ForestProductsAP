import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Forest Supplies',
  description: 'Privacy Policy for Forest Supplies — how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-forest-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-earth-400 hover:text-earth-300 transition-colors mb-8 font-poppins text-sm"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">Privacy Policy</h1>
          <p className="text-earth-400 font-poppins">Last updated: June 15, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-forest-900/10 p-8 md:p-12 space-y-10 font-poppins text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">1. Introduction</h2>
            <p>
              Forest Supplies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us for our products and services.
            </p>
            <p className="mt-3">
              Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and other contact details you voluntarily provide when filling out our contact form or requesting a quote.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on each page.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to improve your browsing experience. You may adjust your browser settings to refuse cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you quotes, invoices, and project updates</li>
              <li>Improve our website, products, and services</li>
              <li>Comply with legal obligations and protect our legal rights</li>
              <li>Send periodic emails regarding our services (you may opt out at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in operating our website or conducting our business (e.g., email hosting, analytics), subject to confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or other legal processes.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with prior notice to you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience. Cookies are small files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some parts of our website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">8. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent to data processing</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:info@forestsupplies.com" className="text-earth-700 hover:underline font-semibold">
                info@forestsupplies.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">10. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="mt-4 bg-cream rounded-2xl p-6 border border-forest-900/10">
              <p className="font-semibold text-forest-900">Forest Supplies</p>
              <p>📧 <a href="mailto:info@forestsupplies.com" className="text-earth-700 hover:underline">info@forestsupplies.com</a></p>
              <p>📞 <a href="tel:+254712345678" className="text-earth-700 hover:underline">+254 712 345 678</a></p>
              <p>📍 Nairobi, Kenya</p>
            </div>
          </section>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-earth-700 hover:bg-forest-900 text-white px-8 py-3 rounded-lg font-poppins font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
