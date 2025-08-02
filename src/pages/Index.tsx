import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import Results from '@/components/Results';
import Impact from '@/components/Impact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { UserEmailDisplay } from '@/components/UserEmailDisplay';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        <Hero />
        <Features />
        <Comparison />
        <Results />
        <Impact />
        <CTA />
        {/* Componente de demonstração da variável global */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <UserEmailDisplay />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
