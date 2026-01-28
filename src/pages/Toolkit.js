import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Toolkit() {
  const toolkit = {
    ldCore: [
      "Performance & needs analysis",
      "Learning journey design (blended, digital, in-person)",
      "Program design & facilitation support",
      "Stakeholder alignment & consulting",
      "Evaluation mindset (feedback, completion, impact signals)",
      "Continuous improvement"
    ],
    leadershipAndCulture: [
      "Leadership development support (workshops, activities, toolkits)",
      "Coaching-style facilitation and practice-based learning",
      "Psychological safety & belonging in learning spaces",
      "Inclusive learning design (accessibility & clarity)",
      "Embedding DEI principles into learning"
    ],
    changeEnablement: [
      "Change learning interventions (adoption + confidence building)",
      "Tool/process rollout enablement",
      "Manager enablement resources",
      "Communication + reinforcement assets",
      "Training plans aligned with change priorities"
    ],
    learningDesignFrameworks: [
      "ADDIE (practical use)",
      "SAM / rapid iteration (build-test-improve)",
      "Bloom’s Taxonomy (learning objectives)",
      "Mayer’s Multimedia Principles",
      "Learner-centered design",
      "Universal Design for Learning (UDL)"
    ],
    facilitationAndDelivery: [
      "Workshop design (virtual & in-person)",
      "Facilitation guides and run-of-show planning",
      "Activities, role plays, and scenarios",
      "Participant and manager toolkits",
      "Train-the-trainer support"
    ],
    digitalLearningTools: [
      "Articulate Storyline 360",
      "Rise 360",
      "Adobe Captivate",
      "H5P",
      "Camtasia",
      "SCORM 1.2 / xAPI (deployment-ready packages)"
    ],
    lmsAndPlatforms: [
      "LMS learner experience support (structure, navigation, clarity)",
      "Moodle",
      "Canvas",
      "Blackboard",
      "Microsoft Teams (learning delivery support)",
      "Google Classroom"
    ],
    measurementAndInsights: [
      "Excel (analysis and reporting)",
      "Learning analytics (completion, engagement, assessment patterns)",
      "Dashboards and stakeholder-friendly reporting",
      "Survey design and feedback loops",
      "Simple evaluation planning (before/after, pulse checks)"
    ],
    contentAndCommunication: [
      "PowerPoint (workshops + facilitation decks)",
      "Canva",
      "Figma (layout and prototyping)",
      "Adobe Photoshop / Illustrator (visual assets)",
      "Clear writing for workplace learning (job aids, guides, FAQs)"
    ],
    collaborationAndProjectTools: [
      "Microsoft Teams",
      "Slack",
      "Zoom",
      "Asana",
      "Trello",
      "Notion"
    ],
    digitalBuildBonus: [
      // Keep this small so the page doesn’t read like a developer portfolio.
      "Basic web build skills for learning prototypes (HTML/CSS/JavaScript)",
      "React (for interactive learning prototypes)",
      "Git/GitHub (versioning for learning assets)"
    ]
  };

  const Section = ({ title, items }) => (
    <div className="toolkit-category">
      <h2>{title}</h2>
      <div className="tools-list">
        {items.map((item, index) => (
          <span key={index} className="tool-tag">{item}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">L&D Toolkit</h1>
        <p className="page-intro">
          The methods, tools, and ways of working I use to design and deliver learning that strengthens capability,
          supports change, and improves performance.
        </p>

        <div className="toolkit-grid">
          <Section title="L&D Core Strengths" items={toolkit.ldCore} />
          <Section title="Leadership, Culture & Inclusion" items={toolkit.leadershipAndCulture} />
          <Section title="Change Enablement" items={toolkit.changeEnablement} />
          <Section title="Learning Design Frameworks" items={toolkit.learningDesignFrameworks} />
          <Section title="Facilitation & Delivery" items={toolkit.facilitationAndDelivery} />
          <Section title="Digital Learning Tools" items={toolkit.digitalLearningTools} />
          <Section title="LMS & Learning Platforms" items={toolkit.lmsAndPlatforms} />
          <Section title="Measurement & Insights" items={toolkit.measurementAndInsights} />
          <Section title="Content & Communication" items={toolkit.contentAndCommunication} />
          <Section title="Collaboration & Project Tools" items={toolkit.collaborationAndProjectTools} />
          <Section title="Digital Build (Bonus)" items={toolkit.digitalBuildBonus} />
        </div>
      </div>
    </section>
  );
}

export default Toolkit;
