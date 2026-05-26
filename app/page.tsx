import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Nursery from '@/components/Nursery';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Sustainability from '@/components/Sustainability';
import Gallery from '@/components/Gallery';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Nursery />
      <Projects />
      <Testimonials />
      <FAQ />
      <Sustainability />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
