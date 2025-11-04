import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Education() {
  const education = [
    {
      degree: "M.Ed. Educational Technology",
      institution: "Huzhou University, China",
      period: "2019-2022",
      description: "Focus on EdTech Development, Learning Management Systems, Content Creation & Authoring Tools, Data Analysis & Research Tools, Multimedia & Communication Tools",
      link: "https://www.chsi.com.cn/xlrz/bgcx.jsp?v=12846877-223-F82B0102"
    },
    {
      degree: "MSc International Relations",
      institution: "Norwegian University of Life Sciences (NMBU)",
      period: "2022-2024",
      grade: "Distinction",
      description: "Advanced studies in international relations with focus on global education policy and cross-cultural communication",
      link: "https://app.vitnemalsportalen.no/vp/shared/CB4FE2E65C384FFD9D37D41C780F362A"
    },
    {
      degree: "B.Ed. Educational Technology",
      institution: "University of Education, Ghana",
      period: "2014-2018",
      grade: "First Class Honours",
      description: "Comprehensive training in educational technology, instructional design, and digital pedagogy"
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Education</h1>
        <p className="page-intro">
          Academic foundation in educational technology, instructional design, and international relations.
        </p>
        
        <div className="cards-grid">
          {education.map((edu, index) => (
            <div key={index} className="info-card">
              <h3>{edu.degree}</h3>
              <p className="card-institution">{edu.institution}</p>
              <p className="card-period">{edu.period}</p>
              {edu.grade && <p className="card-grade">{edu.grade}</p>}
              {edu.description && <p className="card-description">{edu.description}</p>}
              {edu.link && (
                <p style={{marginTop: '1rem'}}>
                  <a href={edu.link} target="_blank" rel="noopener noreferrer" className="article-link">
                    Verify Credential →
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
