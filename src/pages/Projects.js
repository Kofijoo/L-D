import React from 'react';

function Projects() {
  const featuredPresentations = [
    {
      title: "My Mission & Approach",
      subtitle: "Instructional Design Philosophy",
      description: "To design and deliver effective learning experiences at scale that drive measurable business results through innovative instructional design and technical excellence. I partner with organizations to analyze learning needs, design learner-centered and accessible content, and deliver exceptional learning experiences.",
      thumbnail: `${process.env.PUBLIC_URL}/images/about_me.png`,
      link: "https://drive.google.com/file/d/1nYpSAgVi1EGzBbEkc5NXgHoWfe0m-czX/view?usp=drive_link"
    },
    {
      title: "My Design Process & Thought",
      subtitle: "How I Approach Learning Design",
      description: "A comprehensive look at my instructional design methodology, from needs analysis to implementation. Discover how I combine learner-centered principles, data-driven decisions, and iterative design to create effective learning experiences that achieve measurable outcomes.",
      thumbnail: `${process.env.PUBLIC_URL}/images/design_process.png`,
      link: "https://docs.google.com/document/d/1AzLWzjY8aQqasep5bVywRDtWqOG1aNDC38AEN-9LQSQ/edit?usp=drive_link"
    },
    {
      title: "Eco Explorers Game",
      subtitle: "Interactive Learning Game with LMS Integration",
      description: "Vanilla HTML/CSS/JS learning game with 6 short levels. Runs on the open web (GitHub Pages) and inside an LMS via SCORM 1.2. Optionally emits xAPI statements when an LRS is configured. Features include accessibility compliance, keyboard navigation, and comprehensive tracking of attempts, scores, and course completion.",
      thumbnail: `${process.env.PUBLIC_URL}/images/eco_explorers.png`,
      link: "https://kofijoo.github.io/scorm-testing/"
    },
    {
      title: "Quest of the Sky Coders",
      subtitle: "AI-Adaptive Learning Game for Ages 9-11",
      description: "Professional AI-adaptive learning game featuring interactive floating island adventures across 6 subjects: Fractions, Vocabulary, Geometry, Arithmetic, Logic, and Science. Built with React, includes adaptive difficulty, progressive hints with audio feedback, teacher dashboard with real-time analytics, and full SCORM/xAPI compatibility for LMS deployment.",
      thumbnail: `${process.env.PUBLIC_URL}/images/learning_island.png`,
      link: "https://kofijoo.github.io/kid_game.github.io/"
    }
  ];

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
          Over my 5+ years in instructional design and teaching, I've worked across various roles, from teaching, designing and building adaptive learning systems.
        </p>

        {/* Featured Presentations */}
        {featuredPresentations.map((presentation, index) => (
          <div key={index} className="featured-presentation">
            <div className="presentation-thumbnail">
              <img src={presentation.thumbnail} alt={presentation.title} />
            </div>
            <div className="presentation-content">
              <h2>{presentation.title}</h2>
              <p className="presentation-subtitle">{presentation.subtitle}</p>
              <p className="presentation-description">{presentation.description}</p>
              <a 
                href={presentation.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="presentation-button"
              >
                {index === 0 ? 'View Presentation' : index === 1 ? 'View Article' : index === 2 ? 'Play Game' : 'Play Game'} →
              </a>
            </div>
          </div>
        ))}

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
