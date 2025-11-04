import React, { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    { name: "JavaScript Developer", image: "cert_javascript.png", link: "https://verify.w3schools.com/1QC6EFCY5V" },
    { name: "HTML Developer", image: "cert_html_0013.jpg", link: "https://verify.w3schools.com/1Q06JQBTJT" },
    { name: "Excel", image: "cert_excel_0023.jpg", link: "https://verify.w3schools.com/1PZ9OJ8E7M" },
    { name: "Git", image: "cert_git_0025.jpg", link: "https://verify.w3schools.com/1PSKDJZU4L" },
    { name: "Data Analytics", image: "cert_data_analyst_0001.jpg", link: "https://verify.w3schools.com/1Q0JFTPIG7" },
    { name: "GitHub Foundations", link: "https://www.linkedin.com/learning/certificates/bf427afbb448b8a7d42e8db92ed9972425c28c74bac2ccd195fb8a86d587d8a8" },
    { name: "Atlassian Agile Project Management", link: "https://www.linkedin.com/learning/certificates/aebcc070922b9b3e794e237b4e0c9d60ba05a62e2e7dd225bc9b2f3be6967e20" },
    { name: "Operations Management", link: "https://www.linkedin.com/learning/certificates/1936652e1eb0d5c9dc91573f2df8a76a9e699287de496ed39edeb858973a992a" },
    { name: "Diversity, Equity, Inclusion, and Belonging for All", link: "https://www.linkedin.com/learning/certificates/d16a99c949a7d2770dce294eb24f2623610e2dd10e61c696729303173eb1c671" },
    { name: "Change Management", link: "https://www.linkedin.com/learning/certificates/009c509bef92f495e464d5411ff076d8415187c56f027459bad3c16782a6b659" },
    { name: "Aha! Product Management Professional", link: "https://www.linkedin.com/learning/certificates/52613bf03b3ba66df6c5e7c24d29613d6306b8f461939f17f4ef1c72ea473723" },
    { name: "ServiceNow IT Leadership", link: "https://www.linkedin.com/learning/certificates/0fa820dd1d4be19789cdd8e6d6f8b004805c82c86fafbd18b961e0fc041a32e2" },
    { name: "Python Developer", image: "cert_python_0012.jpg" },
    { name: "AWS Cloud Essentials", image: "cert_aws_0002.jpg" },
    { name: "Prompt Engineering", image: "cert_prompt_engineering_id_0018.jpg" },
    { name: "Linux Essentials", image: "cert_linux_0016.jpg" }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Professional Certifications</h1>
        <p className="page-intro">
          Continuous learning and professional development through industry-recognized certifications.
        </p>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              {cert.image && (
                <div className="cert-thumbnail" onClick={() => setSelectedCert(cert)} style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div className="cert-overlay" style={{opacity: 1, position: 'static', background: 'transparent', color: '#ffffff', fontSize: '1rem', fontWeight: '600'}}>Click to view</div>
                </div>
              )}
              <div className="cert-content">
                <h3>{cert.name}</h3>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-verify">
                    Verify →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div className="cert-modal" onClick={() => setSelectedCert(null)}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>×</button>
              <img src={`${process.env.PUBLIC_URL}/images/${selectedCert.image}`} alt={selectedCert.name} />
              <h3>{selectedCert.name}</h3>
              <p>{selectedCert.issuer} | {selectedCert.date}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;
