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
      title: "Primary School Teacher",
      company: "Brainhill International School",
      period: "Apr 2017 – Mar 2019",
      location: "Accra, Ghana · On-site",
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
