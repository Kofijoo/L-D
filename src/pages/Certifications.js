import React, { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Keep this page focused on credentials that strengthen your L&D story.
  // Education degrees should live on the Education page.
  const sections = [
    {
      title: "L&D, Leadership, Change & Inclusion",
      items: [
        {
          name: "Diversity, Equity, Inclusion, and Belonging for All",
          issuer: "LinkedIn Learning",
          type: "Credential",
          link: "https://www.linkedin.com/learning/certificates/d16a99c949a7d2770dce294eb24f2623610e2dd10e61c696729303173eb1c671"
        },
        {
          name: "Change Management",
          issuer: "LinkedIn Learning",
          type: "Credential",
          link: "https://www.linkedin.com/learning/certificates/009c509bef92f495e464d5411ff076d8415187c56f027459bad3c16782a6b659"
        },
        {
          name: "Operations Management",
          issuer: "LinkedIn Learning",
          type: "Credential",
          link: "https://www.linkedin.com/learning/certificates/1936652e1eb0d5c9dc91573f2df8a76a9e699287de496ed39edeb858973a992a"
        },
        {
          name: "Atlassian Agile Project Management",
          issuer: "LinkedIn Learning",
          type: "Credential",
          link: "https://www.linkedin.com/learning/certificates/aebcc070922b9b3e794e237b4e0c9d60ba05a62e2e7dd225bc9b2f3be6967e20"
        },
        {
          name: "ServiceNow IT Leadership",
          issuer: "LinkedIn Learning",
          type: "Credential",
          link: "https://www.linkedin.com/learning/certificates/0fa820dd1d4be19789cdd8e6d6f8b004805c82c86fafbd18b961e0fc041a32e2"
        }
      ]
    },
    {
      title: "Digital Learning, Analytics & Reporting",
      items: [
        {
          name: "Excel",
          issuer: "W3Schools",
          type: "Certification",
          image: "cert_excel_0023.jpg",
          link: "https://verify.w3schools.com/1PZ9OJ8E7M"
        },
        {
          name: "Data Analytics",
          issuer: "W3Schools",
          type: "Certification",
          image: "cert_data_analyst_0001.jpg",
          link: "https://verify.w3schools.com/1Q0JFTPIG7"
        },
        {
          name: "HTML Developer",
          issuer: "W3Schools",
          type: "Certification",
          image: "cert_html_0013.jpg",
          link: "https://verify.w3schools.com/1Q06JQBTJT"
        },
        {
          name: "JavaScript Developer",
          issuer: "W3Schools",
          type: "Certification",
          image: "cert_javascript.png",
          link: "https://verify.w3schools.com/1QC6EFCY5V"
        }
      ]
    },
    {
      title: "Norway & Professional Credentials",
      items: [
        {
          name: "HK-dir Qualification Recognition",
          issuer: "Norwegian Directorate for Higher Education and Skills (HK-dir)",
          type: "Official Recognition",
          note: "Qualifications approved as Norway-equivalent (bachelor’s & master’s level)."
          // Add a link here if you have a public verification URL or a view-only document link.
        },
        {
          name: "Norwegian Language Proficiency (B1–B2)",
          issuer: "Kompetanse Norge (results / certificate)",
          type: "Language Credential"
          // Add verification link if available
        },
        {
          name: "TEFL Certification (120 hours) – High Distinction",
          issuer: "TEFL",
          type: "Training Credential"
          // Add verification link if available
        },
        {
          name: "Inclusive Practice",
          issuer: "Professional Experience / Practice",
          type: "Specialized Competence",
          note: "Experience supporting diverse learning needs."
        }
      ]
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Certifications & Credentials</h1>
        <p className="page-intro">
          A curated set of certifications and credentials aligned with Learning & Development, leadership enablement,
          inclusion, and learning effectiveness.
        </p>

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="section-block">
            <h2 className="section-divider">{section.title}</h2>

            <div className="certifications-grid">
              {section.items.map((cert, index) => (
                <div key={index} className="cert-card">
                  {cert.image && (
                    <div
                      className="cert-thumbnail"
                      onClick={() => setSelectedCert(cert)}
                      style={{
                        background: 'linear-gradient(135deg, rgba(100,116,139,1) 0%, rgba(148,163,184,1) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <div
                        className="cert-overlay"
                        style={{
                          opacity: 1,
                          position: 'static',
                          background: 'transparent',
                          color: '#ffffff',
                          fontSize: '1rem',
                          fontWeight: '600'
                        }}
                      >
                        Click to view
                      </div>
                    </div>
                  )}

                  <div className="cert-content">
                    <h3>{cert.name}</h3>

                    {(cert.issuer || cert.type) && (
                      <p className="cert-meta">
                        {cert.issuer ? cert.issuer : ""}
                        {cert.issuer && cert.type ? " • " : ""}
                        {cert.type ? cert.type : ""}
                      </p>
                    )}

                    {cert.note && <p className="cert-note">{cert.note}</p>}

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-verify"
                      >
                        Verify →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedCert && selectedCert.image && (
          <div className="cert-modal" onClick={() => setSelectedCert(null)}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>×</button>
              <img
                src={`${process.env.PUBLIC_URL}/images/${selectedCert.image}`}
                alt={selectedCert.name}
              />
              <h3>{selectedCert.name}</h3>

              {(selectedCert.issuer || selectedCert.type) && (
                <p>
                  {selectedCert.issuer ? selectedCert.issuer : ""}
                  {selectedCert.issuer && selectedCert.type ? " • " : ""}
                  {selectedCert.type ? selectedCert.type : ""}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;
