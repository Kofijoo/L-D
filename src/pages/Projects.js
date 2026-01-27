import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Projects() {
  const featuredPresentations = [
    {
      title: "My L&D Approach",
      subtitle: "How I support learning and performance",
      description:
        "My approach to Learning & Development is people-centered and business-aligned. I partner with stakeholders to understand what success looks like, design practical learning journeys, and improve them using feedback and simple measurement.",
      thumbnail: `${process.env.PUBLIC_URL}/images/about_me.png`,
      link: "https://drive.google.com/file/d/1nYpSAgVi1EGzBbEkc5NXgHoWfe0m-czX/view?usp=drive_link"
    },
    {
      title: "How I Design Learning",
      subtitle: "From needs to rollout",
      description:
        "A clear look at how I approach L&D work: clarifying needs, defining outcomes, designing the learner experience, building supporting resources, and improving based on feedback and results.",
      thumbnail: `${process.env.PUBLIC_URL}/images/design_process.png`,
      link: "https://docs.google.com/document/d/1AzLWzjY8aQqasep5bVywRDtWqOG1aNDC38AEN-9LQSQ/edit?usp=drive_link"
    },
    {
      title: "Eco Explorers",
      subtitle: "Interactive learning sample",
      description:
        "A short interactive learning experience designed to keep learners engaged while practicing key concepts. Built to be accessible and easy to use, and designed for delivery through an LMS when needed.",
      thumbnail: `${process.env.PUBLIC_URL}/images/eco_explorers.png`,
      link: "https://kofijoo.github.io/scorm-testing/"
    },
    {
      title: "Legal Writing 101",
      subtitle: "Scenario-based training experience",
      description:
        "A scenario-based learning experience that guides learners through realistic situations and practice. Includes clear guidance, interactive activities, and a structured flow from introduction to completion.",
      thumbnail: `${process.env.PUBLIC_URL}/images/jus.png`,
      link: "https://kofijoo.github.io/legal-writing-101-simulation/"
    },
    {
      title: "Quest of the Sky Coders",
      subtitle: "Adaptive practice experience",
      description:
        "A practice-focused learning experience designed to adjust to learner progress and keep motivation high. Includes built-in feedback, progression, and a simple way to review learner activity and progress.",
      thumbnail: `${process.env.PUBLIC_URL}/images/learning_island.png`,
      link: "https://kofijoo.github.io/kid_game.github.io/"
    },
    {
      title: "Selling with Clarity",
      subtitle: "Sales enablement learning journey",
      description:
        "A guided learning journey built to strengthen product confidence, customer conversations, and handling objections. Uses realistic scenarios and practice activities to help learners apply skills on the job.",
      thumbnail: `${process.env.PUBLIC_URL}/images/sales.png`,
      link: "https://kofijoo.github.io/Selling_with_Clarity/"
    },
    {
      title: "SAM (Rapid Iteration) Overview",
      subtitle: "Practical design mindset",
      description:
        "A short presentation showing how I work in quick cycles: build, test, improve. This helps teams move faster while keeping learning clear, useful, and learner-friendly.",
      thumbnail: `${process.env.PUBLIC_URL}/images/sam.png`,
      link: "https://www.linkedin.com/posts/joshua-agyekum_instructionaldesign-sam-learningdesign-activity-7387115178187796480-g3N1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1UrkMByre9dMYUS_VYuSFrlo0ojG-wJhc"
    },
    {
      title: "Learning Insights Dashboard",
      subtitle: "Tracking engagement and progress",
      description:
        "A sample dashboard concept for understanding engagement and learning progress. Built to support decisions like where learners struggle, what’s improving, and where extra support may be needed.",
      thumbnail: `${process.env.PUBLIC_URL}/images/EduAnalytics.png`,
      link: "https://eduanalytics-pro-garcy4kzhdd9nhuy3ffvgr.streamlit.app/"
    }
  ];

  const projects = [
    {
      title: "Personalized Learning Program",
      organization: "JOMACS",
      period: "Jun 2024 - Jun 2025",
      description:
        "Built a learning experience that adjusted practice and support based on learner progress. The goal was to keep learners engaged and help facilitators understand where support was needed most.",
      metrics: [
        "Increased learner engagement by 40%",
        "Reached an 85% completion rate",
        "89% of learners reported improved understanding",
        "Reduced facilitator support requests by 28%"
      ]
    },
    {
      title: "Interactive STEM Learning Experience",
      organization: "Alo7",
      period: "Jan 2020 - Feb 2021",
      description:
        "Worked with subject experts to turn difficult concepts into engaging, visual learning experiences. Designed for clarity, interaction, and stronger learner confidence.",
      metrics: [
        "Boosted learner engagement by 75%",
        "92% learner satisfaction",
        "Reduced time to understand key concepts by 35%",
        "Adopted across 12 schools (3,000+ learners)"
      ]
    },
    {
      title: "Foundational Skills Program (Phonics)",
      organization: "First Talk Education",
      period: "Mar 2021 - Apr 2022",
      description:
        "Supported a digital learning approach that made practice consistent and easier for teachers and learners. Focused on simple learner journeys and clear reinforcement activities.",
      metrics: [
        "Improved phonics recognition by 45%",
        "94% parent satisfaction",
        "Reduced teacher preparation time by 60%",
        "78% of learners reached proficiency early"
      ]
    },
    {
      title: "Sales & Product Enablement Program",
      organization: "Tofflon Joy",
      period: "Jul 2025 - Present",
      description:
        "Designed an enablement program for sales and technical teams to build product confidence, strengthen customer conversations, and improve consistency in how solutions are presented.",
      metrics: [
        "Designed 15+ learning modules and support resources",
        "88% completion rate in the first quarter",
        "82% reported increased confidence",
        "Recognized internally for strong cross-team collaboration"
      ]
    },
    {
      title: "LMS-Ready Learning Activities (Interactive Practice)",
      organization: "Multiple Projects",
      period: "2020 - Present",
      description:
        "Built interactive learning activities that can be delivered through an LMS when needed. Focused on accessibility, ease of use, and clear learner feedback.",
      metrics: [
        "Deployed successfully across multiple LMS environments",
        "High learner engagement (91%) across pilots",
        "Reliable delivery across cohorts",
        "Reduced development effort by 40% through reusable patterns"
      ]
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Programs & Work Samples</h1>
        <p className="page-intro">
          A selection of learning programs, enablement experiences, and digital training samples I’ve built to support performance, engagement, and real-world application.
        </p>

        {/* Featured Learning Samples */}
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
                View Sample →
              </a>
            </div>
          </div>
        ))}

        <h2 className="section-divider">Selected Case Studies</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p className="project-meta">{project.organization} | {project.period}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-metrics">
                <h3>Outcomes:</h3>
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
