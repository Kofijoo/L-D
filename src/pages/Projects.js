import React from 'react';

function Projects() {
  const featuredPresentation = {
    title: "My Mission & Approach",
    subtitle: "Instructional Design Philosophy",
    description: "To design and deliver effective learning experiences at scale that drive measurable business results through innovative instructional design and technical excellence. I partner with organizations to analyze learning needs, design learner-centered and accessible content, and deliver exceptional learning experiences.",
    thumbnail: `${process.env.PUBLIC_URL}/images/about_me.png`,
    pdfLink: `${process.env.PUBLIC_URL}/projects/Joshua Agyekum About Me.pdf`
  };

  const projects = [
    {
      title: "Adaptive Learning System Development",
      organization: "JOMACS",
      period: "Jun 2024 - Jun 2025",
      description: "Designed and developed an adaptive learning platform that personalized content delivery based on learner performance and behavior. The platform integrated seamlessly with existing LMS infrastructure and provided instructors with actionable analytics dashboards.",
      metrics: [
        "Increased student engagement by 40%",
        "Achieved 85% course completion rate",
        "89% of learners reported improved understanding",
        "Reduced instructor support requests by 28%"
      ]
    },
    {
      title: "Interactive STEM Learning Platform",
      organization: "Alo7",
      period: "Jan 2020 - Feb 2021",
      description: "Developed interactive 3D learning modules using Three.js and WebGL technologies. Collaborated with subject matter experts to transform abstract scientific concepts into immersive virtual laboratory experiences.",
      metrics: [
        "Boosted STEM engagement by 75%",
        "92% student satisfaction scores",
        "Reduced concept comprehension time by 35%",
        "Platform adopted across 12 schools, reaching 3,000+ students"
      ]
    },
    {
      title: "Digital Phonics Learning System",
      organization: "First Talk Education",
      period: "Mar 2021 - Apr 2022",
      description: "Implemented a comprehensive digital phonics learning system based on the Jolly Phonics methodology. Designed age-appropriate interactive interfaces with audio pronunciation guides and adaptive practice exercises.",
      metrics: [
        "Improved phonics recognition scores by 45%",
        "94% parent satisfaction",
        "Reduced teacher preparation time by 60%",
        "78% of students reached proficiency 3 months ahead"
      ]
    },
    {
      title: "Enterprise Sales Enablement Training",
      organization: "Tofflon Joy",
      period: "Jul 2025 - Present",
      description: "Designed comprehensive talent development program for sales and technical teams in industrial manufacturing. Includes scenario-based learning modules, product knowledge assessments, and role-play simulations.",
      metrics: [
        "Designed 15+ learning modules",
        "88% completion rate in first quarter",
        "82% reported increased confidence",
        "Recognized as best practice for collaboration"
      ]
    },
    {
      title: "SCORM-Compliant Educational Games",
      organization: "Multiple Projects",
      period: "2020 - Present",
      description: "Developed HTML5-based educational games with SCORM 1.2 and xAPI tracking. Created 6-level progression systems covering mathematics, vocabulary, geometry, and science concepts with full accessibility compliance.",
      metrics: [
        "99.9% uptime across LMS deployments",
        "91% student engagement rate",
        "Successfully deployed across multiple LMS platforms",
        "Reduced development costs by 40%"
      ]
    }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1 className="page-title">Work Samples & Projects</h1>
        <p className="page-intro">
          Over my 5+ years in instructional design and educational technology, I've worked across various roles—from building adaptive learning systems to designing interactive STEM platforms and developing enterprise-grade compliance training.
        </p>

        {/* Featured Presentation */}
        <div className="featured-presentation">
          <div className="presentation-thumbnail">
            <img src={featuredPresentation.thumbnail} alt={featuredPresentation.title} />
          </div>
          <div className="presentation-content">
            <h2>{featuredPresentation.title}</h2>
            <p className="presentation-subtitle">{featuredPresentation.subtitle}</p>
            <p className="presentation-description">{featuredPresentation.description}</p>
            <a 
              href={featuredPresentation.pdfLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="presentation-button"
            >
              View Presentation →
            </a>
          </div>
        </div>

        <h2 className="section-divider">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p className="project-meta">{project.organization} | {project.period}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-metrics">
                <h3>Key Results:</h3>
                <ul>
                  {project.metrics.map((metric, i) => (
                    <li key={i}>{metric}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
