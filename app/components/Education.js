// app/components/Education.js
'use client';
import { useEffect, useRef } from 'react';

export default function Education() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  
  const educationData = [
    {
      degree: "National Certificate: Business Analysis Support (NQF 5)",
      institution: "Impactful",
      duration: "2023 - 2024",
      description: "Specialized in business process analysis and optimization techniques"
    },
    {
      degree: "Diploma in IT (NQF 6)",
      institution: "Richfield Graduate Institute of Technology",
      duration: "2019 - 2023",
      description: "Comprehensive IT education covering software development, networking, and systems analysis"
    },
    {
      degree: "National Senior Certificate - Matric",
      institution: "Hpe School",
      duration: "2010 - 2015",
      description: "Foundation in Mathematics, Physical Sciences, and Computer Applications"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="section" ref={sectionRef}>
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="timeline-item"
            ref={el => itemsRef.current[index] = el}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <span className="duration">{edu.duration}</span>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}