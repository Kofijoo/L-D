import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Toolkit() {
  const tools = {
    instructionalDesign: [
      "ADDIE Model",
      "SAM (Successive Approximation Model)",
      "Bloom's Taxonomy",
      "Mayer's Multimedia Principles",
      "Learner-Centered Design",
      "Universal Design for Learning (UDL)"
    ],
    authoringTools: [
      "Articulate Storyline 360",
      "Adobe Captivate",
      "H5P",
      "SCORM 1.2 / xAPI",
      "Rise 360",
      "Camtasia"
    ],
    designTools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Figma",
      "PowerPoint",
      "Video Editing Software"
    ],
    lmsPlatforms: [
      "Moodle",
      "Canvas",
      "Google Classroom",
      "Microsoft Teams for Education",
      "Blackboard"
    ],
    developmentTools: [
      "HTML5 / CSS3 / JavaScript",
      "React.js",
      "Python",
      "Three.js / WebGL",
      "Git / GitHub",
      "VS Code"
    ],
    dataAnalytics: [
      "Power BI",
      "Tableau",
      "Excel (Advanced)",
      "Python (Pandas, NumPy)",
      "SQL",
      "Learning Analytics"
    ],
    cloudDevOps: [
      "AWS (EC2, S3, CloudWatch)",
      "Docker",
      "Kubernetes",
      "GitHub Actions (CI/CD)",
      "Terraform"
    ],
    collaboration: [
      "Slack",
      "Microsoft Teams",
      "Zoom",
      "Asana",
      "Trello",
      "Notion"
    ]
  };

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Professional Toolkit</h1>
        <p className="page-intro">
          Technologies, tools, and methodologies I use to create impactful learning experiences.
        </p>

        <div className="toolkit-grid">
          <div className="toolkit-category">
            <h2>Instructional Design Models</h2>
            <div className="tools-list">
              {tools.instructionalDesign.map((tool, index) => (
                <span key={index} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="toolkit-category">
            <h2>eLearning Authoring Tools</h2>
            <div className="tools-list">
              {tools.authoringTools.map((tool, index) => (
                <span key={index} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="toolkit-category">
            <h2>Design & Multimedia</h2>
            <div className="tools-list">
              {tools.designTools.map((tool, index) => (
                <span key={index} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="toolkit-category">
            <h2>LMS Platforms</h2>
            <div className="tools-list">
              {tools.lmsPlatforms.map((tool, index) => (
                <span key={index} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="toolkit-category">
            <h2>Development Tools</h2>
            <div className="tools-list">
              {tools.developmentTools.map((tool, index) => (
                <span key={index} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="toolkit-category">
            <h2>Data & Analytics</h2>
            <div className="tools-list">
              {tools.dataAnalytics.map((tool, index) => (
                <span key={index} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="toolkit-category">
            <h2>Cloud & DevOps</h2>
            <div className="tools-list">
              {tools.cloudDevOps.map((tool, index) => (
                <span key={index} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="toolkit-category">
            <h2>Collaboration Tools</h2>
            <div className="tools-list">
              {tools.collaboration.map((tool, index) => (
                <span key={index} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Toolkit;
