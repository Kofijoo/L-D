import React, { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Recommendations() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const recommendations = [
    {
      name: "Dr. Sarah Chen",
      title: "Director of Learning & Development",
      company: "JOMACS Tech Academy",
      text: "Joshua's instructional design work transformed our training programs. His adaptive learning system increased student engagement by 40% and achieved an 85% course completion rate. He has a rare ability to combine pedagogical theory with practical technology implementation."
    },
    {
      name: "Michael Zhang",
      title: "Head of Educational Technology",
      company: "Alo7 Education",
      text: "Working with Joshua on our STEM platform was exceptional. His interactive 3D learning modules boosted engagement by 75% and reached over 3,000 students across 12 schools. He brings creativity, technical skill, and a deep understanding of how learners interact with digital content."
    }
  ];

  const accreditations = [
    { name: "Norwegian Language Proficiency B1", image: "Norwegian Language Proficiency.jpg" },
    { name: "English Language Proficiency", image: "English Language Proficiency.jpg" },
    { name: "Mandarin Language Proficiency", image: "Mandarin Language Proficiency.jpg" },
    { name: "TEFL Certification", image: "TEFL Certification.jpg" },
    { name: "National Teaching Certificate", image: "National Teaching Certificate.jpg" },
    { name: "Bachelor's Degree", image: "Bachelor's Degree.jpg" },
    { name: "Educational Technology Degree", image: "Education Technology Degree.png" },
    { name: "NMBU Master's Degree", image: "NMBU.jpg" }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Recommendations & Accreditations</h1>

        <div className="section-block">
          <h2 className="section-heading">Professional Recommendations</h2>
          <div className="recommendations-grid">
            {recommendations.map((rec, index) => (
              <div key={index} className="recommendation-card">
                <p className="recommendation-text">"{rec.text}"</p>
                <div className="recommendation-author">
                  <h3>{rec.name}</h3>
                  <p>{rec.title}</p>
                  <p className="company">{rec.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-block" style={{marginTop: '4rem'}}>
          <h2 className="section-heading">Official Accreditations</h2>
          <div className="certifications-grid">
            {accreditations.map((doc, index) => (
              <div key={index} className="cert-card">
                <div className="cert-thumbnail" onClick={() => setSelectedDoc(doc)} style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div className="cert-overlay" style={{opacity: 1, position: 'static', background: 'transparent', color: '#ffffff', fontSize: '1rem', fontWeight: '600'}}>Click to view</div>
                </div>
                <div className="cert-content">
                  <h3>{doc.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedDoc && (
          <div className="cert-modal" onClick={() => setSelectedDoc(null)}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close" onClick={() => setSelectedDoc(null)}>×</button>
              <img src={`${process.env.PUBLIC_URL}/images/${selectedDoc.image}`} alt={selectedDoc.name} />
              <h3>{selectedDoc.name}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Recommendations;
