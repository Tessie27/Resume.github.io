// app/components/SocialLinks.js
'use client';
import { useState } from 'react';

export default function SocialLinks() {
  const [ripple, setRipple] = useState(false);

  const handleResumeDownload = () => {
    // Trigger ripple effect
    setRipple(true);
    setTimeout(() => setRipple(false), 1000);
    
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Track download (for analytics)
    console.log('Resume downloaded');
  };

  return (
    <div className="social-section">
      <div className="resume-section">
        <button 
          className={`btn resume-btn ${ripple ? 'ripple' : ''}`} 
          onClick={handleResumeDownload}
          aria-label="Download Resume"
        >
          <span>Download Resume</span>
          <i className="fas fa-download ml-2"></i>
        </button>
      </div>

      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/letezz-khan-722397159/" 
          className="social-icon" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a 
          href="https://github.com/Tessie27" 
          className="social-icon" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="mailto:letezzkhan@gmail.com" 
          className="social-icon" 
          aria-label="Send Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}