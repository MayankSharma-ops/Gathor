import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollRevealText from '@/components/ScrollRevealText';
import BentoGrid from '@/components/BentoGrid';
import DNA from '@/components/DNA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ScrollRevealText />
      <BentoGrid />
      <DNA />
      <Footer />
    </main>
  );
}
