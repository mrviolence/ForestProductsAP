import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Forest Supplies',
  description: 'Terms of Service for Forest Supplies — the rules and conditions governing use of our website and services.',
};

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">Terms of Service</h1>
          <p className="text-earth-400 font-poppins">Last updated: June 15, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-forest-900/10 p-8 md:p-12 space-y-10 font-poppins text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Forest Supplies website (&quot;Site&quot;) or engaging our products and services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Site or services.
            </p>
            <p className="mt-3">
              We reserve the right to modify these Terms at any time. Continued use of the Site after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">2. Use of the Website</h2>
            <p className="mb-3">You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Site in any way that breaches applicable local, national, or international laws or regulations</li>
              <li>Transmit unsolicited or unauthorized advertising or promotional material</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its related systems</li>
              <li>Reproduce, duplicate, or resell any part of our Site without express written permission</li>
              <li>Use automated tools to scrape, crawl, or harvest data from the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">3. Products &amp; Services</h2>
            <p className="mb-3">
              Forest Supplies provides timber products, forest supplies, nursery seedlings, tree planting, and forestry consultation services. All orders and service engagements are subject to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Availability:</strong> Products and services are subject to availability. We reserve the right to limit quantities.</li>
              <li><strong>Pricing:</strong> Prices are quoted in the local currency and are subject to change without notice.</li>
              <li><strong>Payment:</strong> Full or agreed partial payment is required before delivery or service commencement unless otherwise agreed in writing.</li>
              <li><strong>Delivery:</strong> Delivery timelines are estimates only. We are not liable for delays caused by circumstances beyond our control.</li>
              <li><strong>Returns &amp; Refunds:</strong> Claims for damaged or incorrect products must be made within 48 hours of delivery. Refunds are issued at our discretion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">4. Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, images, and software — is the property of Forest Supplies or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">5. Disclaimer of Warranties</h2>
            <p>
              This Site and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied. Forest Supplies does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Forest Supplies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or our services, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the amount you paid for the specific product or service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">7. Third-Party Links</h2>
            <p>
              Our Site may contain links to external websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">8. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of Kenya. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Nairobi, Kenya.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Site at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">10. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
