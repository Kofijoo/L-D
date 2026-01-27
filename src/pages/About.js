import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function About() {
  return (
    <section className="about-hero">
      <AnimatedBackground />
      <div className="about-container">
        <div className="about-photo">
          <img
            src={`${process.env.PUBLIC_URL}/images/profile_photo.png`}
            alt="Joshua Agyekum - Learning & Development"
          />
        </div>
        <div className="about-content">
          <h1>Joshua Agyekum</h1>
          <p className="subtitle">Learning & Development Specialist</p>

          <p className="bio">
            I’m a Learning & Development professional with 5+ years of experience designing programs that improve performance and drive measurable business results. From onboarding and enablement to tool adoption and systems training, I build learner-first solutions that are practical, scalable, and aligned to real workplace needs.
          </p>

          <p className="bio">
            I thrive in cross-functional environments, partnering with Product, Marketing, Engineering, and Sales to ensure learning is not just informative, but impactful. In my current role at Tofflon Joy, I develop enablement experiences that strengthen product knowledge, consultative selling skills, and operational excellence across our machinery and turnkey solutions portfolio.
          </p>

          <p className="bio">
            Previously, at JOMACS I built adaptive learning systems that increased learner engagement by 40%. At Alo7, I developed interactive STEM learning experiences that boosted engagement by 75% using immersive 3D content and strong instructional structure.
          </p>

          <p className="bio">
            My approach is collaborative, data-informed, and performance-focused. I don’t just create content — I identify what people need to do, design learning that helps them do it, and measure whether it worked.
          </p>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/joshua-agyekum/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Kofijoo" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.credly.com/users/joshua-agyekum.7b55a7d0/badges#credly" target="_blank" rel="noopener noreferrer">Credly</a>
            <a href="https://www.w3profile.com/kofijoo/" target="_blank" rel="noopener noreferrer">W3Profile</a>
            <a href="mailto:joshuaagyekum21@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
