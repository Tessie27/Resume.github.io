// app/components/Skills.js
'use client';
import { useEffect, useRef } from 'react';

export default function Skills() {
  const sectionRef = useRef(null);
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vue.js"]
    },
    {
      title: "Backend & Automation",
      skills: ["Node.js", "Python", "MongoDB", "PowerShell", "REST APIs", "Express.js"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "CI/CD", "Figma", "Linux", "Azure", "Kubernetes"]
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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={category.title} className="skills-category" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map(skill => (
                <div key={skill} className="skill-item">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}