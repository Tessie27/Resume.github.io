// app/components/Experience.js
'use client';
import { useEffect, useRef } from 'react';

export default function Experience() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  
  const experienceData = [
    {
      title: "Junior Automation Engineer - Internship",
      company: "Ricoh Europe",
      duration: "2025 - Present",
      responsibilities: [
        "Design and implement automation solutions to boost efficiency and reduce repetitive tasks.",
        "Develop scripts and integrations across Python, PowerShell, JavaScript, Bash, VBA, and SQL.",
        "Streamline workflows on platforms such as ServiceNow, Azure, and GitHub while building Generative AI pipelines, RAG frameworks, and predictive data models within Agile and continuous improvement processes.",
      ]
    },
    {
      title: "Senior Technical Customer Support – Tier I",
      company: "Ricoh Europe",
      duration: "2025 - Present",
      responsibilities: [
        "Escalation points for Tier I agents; assist with advanced troubleshooting and queue management.",
        "Provide support across Microsoft 365, Azure, SharePoint, Exchange Online, and Citrix VDI.",
        "Manage complex technical issues: VPNs, networking, and access.",
        "Lead KCS practices and create/review internal knowledge articles.",
        "Ensure SLA compliance and quality across tickets, calls, and satisfaction metrics."
      ]
    },
    {
      title: "HR Administrator",
      company: "Ricoh South Africa",
      duration: "2020 - 2021",
      responsibilities: [
        "Handled onboarding/offboarding, HR data management, and employee case resolution.",
        "Coordinated benefits, payroll support, and disability accommodations.",
        "Monitored HR metrics and reported trends to leadership.",
      ]
    },
    {
      title: "Temp HR Administrator",
      company: "Ricoh South Africa",
      duration: "2018 - 2020",
      responsibilities: [
        "Delivered core HR admin functions including SuccessFactors updates and audit compliance.",
      ]
    },
    {
      title: "Business Administration Learnership",
      company: "Altron People Solutions",
      duration: "2018 - 2019",
      responsibilities: [
        "Supported internal teams with document control, scheduling, and communication.",
      ]
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
    <section id="experience" className="section" ref={sectionRef}>
      <h2>Work Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div 
            key={index} 
            className="timeline-item"
            ref={el => itemsRef.current[index] = el}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <span className="duration">{exp.duration}</span>
            <ul className="responsibilities">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}