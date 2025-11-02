import React from 'react';

function About() {
  return (
    <section className="about-hero">
      <div className="about-container">
        <div className="about-photo">
          <img src={`${process.env.PUBLIC_URL}/images/profile_photo.png`} alt="Joshua Agyekum" />
        </div>
        <div className="about-content">
          <h1>Joshua Agyekum</h1>
          <p className="subtitle">Instructional Designer | EdTech Developer</p>
          <p className="bio">
            I'm an instructional designer with 5+ years of experience building learning programs that drive real business results. Whether it's helping teams master advanced tools, supporting sales enablement with scalable programs, or simplifying complex systems for end users, I create learner-first solutions that are both strategic and actionable.
          </p>
          <p className="bio">
            I thrive in cross-functional spaces—partnering with Product, Marketing, Engineering, and Sales to make sure training isn't just informative, but impactful. At JOMACS, I built adaptive learning systems that increased student engagement by 40%. At Alo7, I developed interactive STEM modules that boosted engagement by 75% through immersive 3D educational content.
          </p>
          <p className="bio">
            My approach is collaborative, data-informed, and learner-focused. I'm not just here to make content—I'm here to move the needle, build confidence, and make sure people walk away actually knowing how to do the job or task at hand.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/joshua-agyekum/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Kofijoo" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:joshuaagyekum21@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
