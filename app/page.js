// app/page.js
import Navigation from './components/Navigation';
import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import SocialLinks from './components/SocialLinks';
import EasterEgg from './components/EasterEgg';
import ClientWrapper from './components/ClientWrapper';
import './styles/particles.css'; // Create this for additional particle animations

export default function Home() {
  return (
    <main className="relative">
      {/* Background Gradient Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      
      <ClientWrapper>
        <Navigation />
        <EasterEgg />
      </ClientWrapper>

      <Header />
      
      <div className="container">
        <div className="main-content">
          <Skills />
          <Education />
          <Experience />
          <SocialLinks />
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Le Tezz Khan. All rights reserved. 
            <br />
            Built with Next.js 14 • TypeScript • Tailwind CSS
          </p>
          <p className="mt-2 text-sm opacity-60">
            Designed with accessibility and performance in mind
          </p>
        </div>
      </footer>
    </main>
  );
}