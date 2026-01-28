import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Experience() {
  const alignmentHighlights = [
    {
      title: "Leadership development support",
      description:
        "I support leadership learning through structured activities, practical tools, and facilitation-friendly resources that help leaders apply skills on the job."
    },
    {
      title: "Inclusion-first learning",
      description:
        "I design learning with belonging in mind—clear language, accessible experiences, and an approach that respects different backgrounds, roles, and learning needs."
    },
    {
      title: "Change enablement",
      description:
        "I create learning interventions that help teams adopt new tools, processes, and ways of working—reducing confusion and improving confidence during change."
    },
    {
      title: "Digital learning + learner experience",
      description:
        "I build and improve digital learning experiences with a focus on usability, engagement, and practical measurement (completion, feedback, and performance signals)."
    },
    {
      title: "Stakeholder partnership",
      description:
        "I work closely with leaders and cross-functional teams to clarify needs, align on outcomes, and deliver learning that supports business priorities."
    }
  ];

  const experiences = [
    {
      title: "Learning & Development Specialist (Enablement)",
      company: "Tofflon Joy",
      period: "Jul 2025 – Present",
      location: "Greater Accra Region, Ghana · Remote",
      description:
        "Support learning and enablement for sales and technical teams in industrial manufacturing. Partner with stakeholders to build practical learning journeys that strengthen product knowledge, customer conversations, and operational excellence.",
      skills: [
        "Learning program design",
        "Stakeholder partnership",
        "Enablement (sales/technical)",
        "Facilitation support",
        "Performance-focused learning",
        "Continuous improvement"
      ]
    },
    {
      title: "Learning Systems & Operations Support",
      company: "JOMACS",
      period: "Oct 2024 – Jun 2025",
      location: "Alberta, Canada · Remote",
      description:
        "Supported the delivery and reliability of digital learning programs by improving the learning platform setup and release process. Focused on creating a smoother learner experience and reducing friction for facilitators and admins.",
      skills: [
        "Digital learning operations",
        "LMS support mindset",
        "Process improvement",
        "Learner experience",
        "Cross-team collaboration",
        "Problem solving"
      ]
    },
    {
      title: "Learning Experience Designer",
      company: "JOMACS",
      period: "Jun 2024 – Sep 2024",
      location: "Canada · Remote",
      description:
        "Designed learning experiences that increased learner engagement by 40%. Built structured practice and feedback into the learning journey and collaborated with internal partners to improve clarity, flow, and learner confidence.",
      skills: [
        "Learning design",
        "Needs analysis",
        "Assessment & practice design",
        "Storyboarding",
        "Learning evaluation mindset",
        "Visual communication"
      ]
    },
    {
      title: "Learning Support & Content Development (Intern)",
      company: "First Talk Education",
      period: "Mar 2021 – Apr 2022",
      location: "Changxing County, Zhejiang, China · Hybrid",
      description:
        "Supported the rollout of a foundational skills program by creating learner-friendly content and practice activities. Helped make learning consistent, engaging, and accessible for diverse learner needs.",
      skills: [
        "Content development",
        "Facilitation support",
        "Learner engagement",
        "Inclusive learning mindset",
        "Learning materials design",
        "Collaboration"
      ]
    },
    {
      title: "STEM Learning Experience Designer",
      company: "Alo7",
      period: "Jan 2020 – Feb 2021",
      location: "Ningbo, Zhejiang, China · Hybrid",
      description:
        "Worked with subject experts to create interactive STEM learning experiences that improved learner engagement by 75%. Focused on simplifying difficult concepts and building confidence through practice and interaction.",
      skills: [
        "Learning experience design",
        "SME collaboration",
        "Engagement-focused learning",
        "Learning by doing",
        "Digital learning",
        "Clear communication"
      ]
    },
    {
      title: "Creative Learning Facilitator",
      company: "Brainhill International School",
      period: "2018 – 2019",
      location: "Ghana",
      description:
        "Facilitated creative, project-based learning for primary learners. Designed sessions that encouraged participation, built confidence, and supported skill development through hands-on activities.",
      skills: [
        "Facilitation",
        "Learner-centered delivery",
        "Session planning",
        "Feedback & coaching",
        "Engagement strategies",
        "Learning support"
      ]
    },
    {
      title: "Instructional Support",
      company: "Kaneshie Awudome JHS",
      period: "2018 – 2019",
      location: "Ghana",
      description:
        "Supported classroom learning and learner progress through resource development and day-to-day learning support. Assisted with materials that made lessons easier to follow and more engaging.",
      skills: [
        "Learning support",
        "Resource development",
        "Learner engagement",
        "Communication",
        "Collaboration",
        "Organization"
      ]
    },
    {
      title: "Learning Facilitator (STEM / Primary)",
      company: "Global Access Academy",
      period: "2013 – 2014",
      location: "Ghana",
      description:
        "Facilitated STEM learning activities using creative approaches that made concepts easier to understand. Focused on participation, confidence-building, and practical application for young learners.",
      skills: [
        "Facilitation",
        "Learning activities",
        "Creative instruction",
        "Learner motivation",
        "Inclusive approach",
        "Communication"
      ]
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Experience</h1>
        <p className="page-intro">
          Roles focused on Learning & Development, enablement, facilitation support, and improving learner experience across
          both digital and in-person environments.
        </p>

        {/* TOMRA Alignment Block */}
        <div className="section-block">
          <h2 className="section-divider">How I align with global L&D roles</h2>
          <p className="page-intro" style={{ marginTop: 0 }}>
            The themes below reflect the kind of work I enjoy most—leadership development support, inclusive learning,
            change enablement, digital learning journeys, and strong stakeholder partnership.
          </p>

          <div className="projects-grid">
            {alignmentHighlights.map((item, idx) => (
              <div key={idx} className="project-card">
                <h2>{item.title}</h2>
                <p className="project-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-location">{exp.location}</p>
                <p className="timeline-description">{exp.description}</p>

                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
