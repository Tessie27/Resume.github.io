// app/components/Header.js
'use client';
import { useEffect, useState } from 'react';

const codeSnippets = [
  { text: 'def automate():', lang: 'python' },
  { text: 'const optimize = () => {', lang: 'javascript' },
  { text: 'public void innovate() {', lang: 'java' },
  { text: 'std::future<ai> create();', lang: 'cpp' },
  { text: 'def deploy():', lang: 'ruby' },
  { text: 'func innovate() {', lang: 'go' },
  { text: 'async fn transform()', lang: 'rust' },
  { text: 'function evolve() {', lang: 'typescript' },
  { text: 'interface Future {', lang: 'csharp' },
  { text: 'let create = () => {', lang: 'swift' },
];

export default function Header() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: `${Math.random() * 20}s`,
      animationDuration: `${15 + Math.random() * 15}s`,
      snippet: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
    }));
    setParticles(initialParticles);

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prev => {
        if (prev.length < 20) {
          return [...prev, {
            id: Date.now(),
            left: Math.random() * 100,
            top: 100,
            animationDelay: '0s',
            animationDuration: `${15 + Math.random() * 15}s`,
            snippet: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          }];
        }
        return prev;
      });
    }, 3000);

    // Cleanup
    const cleanupInterval = setInterval(() => {
      setParticles(prev => prev.filter(p => {
        const age = Date.now() - p.id;
        return age < 30000; // Remove particles older than 30 seconds
      }));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <header className="header">
      {/* Animated Code Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="code-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
            animationName: 'floatParticle',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
          data-lang={particle.snippet.lang}
        >
          {particle.snippet.text}
        </div>
      ))}

      <div className="container">
        <div className="header-content">
          <h1 className="name">
            <span style={{ '--i': 0 }}>L</span>
            <span style={{ '--i': 1 }}>e</span>
            <span style={{ '--i': 2 }}> </span>
            <span style={{ '--i': 3 }}>T</span>
            <span style={{ '--i': 4 }}>e</span>
            <span style={{ '--i': 5 }}>z</span>
            <span style={{ '--i': 6 }}>z</span>
            <span style={{ '--i': 7 }}> </span>
            <span style={{ '--i': 8 }}>K</span>
            <span style={{ '--i': 9 }}>h</span>
            <span style={{ '--i': 10 }}>a</span>
            <span style={{ '--i': 11 }}>n</span>
          </h1>
          <p className="bio">
            <strong>IT Support Consultant</strong> with 6+ years of experience in hybrid cloud and enterprise environments. 
            Expert in troubleshooting, automation, and process optimization. Passionate about creating 
            efficient solutions that enhance productivity and user experience.
          </p>
        </div>
      </div>
    </header>
  );
}