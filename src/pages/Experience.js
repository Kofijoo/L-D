import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Instructional Designer",
      company: "Tofflon Joy",
      period: "Jul 2025 - Present",
      location: "Greater Accra Region, Ghana · Remote",
      description: "Supporting talent development initiatives for sales and technical teams in industrial manufacturing. Designing learning experiences that enhance product knowledge, consultative selling skills, and operational excellence.",
      skills: ["Instructional Design", "Graphic Design", "Curriculum Development", "Course Creation"]
    },
    {
      title: "EdTech Developer",
      company: "JOMACS",
      period: "Oct 2024 - Jun 2025",
      location: "Alberta, Canada · Remote",
      description: "Automated educational platforms using Docker and Kubernetes for scalability. Developed CI/CD workflows for educational content delivery using GitHub Actions.",
      skills: ["Docker", "Kubernetes", "CI/CD", "Educational Technology"]
    },
    {
      title: "Instructional Designer",
      company: "JOMACS",
      period: "Jun 2024 - Sep 2024",
      location: "Canada · Remote",
      description: "Built adaptive learning systems that increased student engagement by 40%.",
      skills: ["Storyboarding", "Adobe Photoshop", "ADDIE", "Python", "Storytelling", "Articulate Storyline", "Graphic Design"]
    },
    {
      title: "Educational Technology Intern",
      company: "First Talk Education",
      period: "Mar 2021 - Apr 2022",
      location: "Changxing County, Zhejiang, China · Hybrid",
      description: "Implemented digital phonics learning system using Jolly Phonics methodology. Designed interactive educational content and age-appropriate learning interfaces.",
      skills: ["Educational Technology", "Instructional Design", "Interactive Content"]
    },
    {
      title: "STEM Platform Designer",
      company: "Alo7",
      period: "Jan 2020 - Feb 2021",
      location: "Ningbo, Zhejiang, China · Hybrid",
      description: "Developed interactive STEM learning modules using digital tools and virtual classroom platforms. Increased STEM engagement by 75% through interactive 3D educational content.",
      skills: ["Three.js", "WebGL", "STEM Education", "3D Visualization"]
    },
    {
      title: "Visual Arts & Design Tutor",
      company: "Brainhill International School",
      period: "2018 - 2019",
      location: "Ghana",
      description: "Taught creative design principles and visual arts to Basic 3 pupils using hands-on, project-based learning approaches. Developed engaging lesson plans that integrated art fundamentals with digital design concepts.",
      skills: ["Visual Arts", "Design Thinking", "Creative Instruction", "Project-Based Learning"]
    },
    {
      title: "Instructional Support Specialist",
      company: "Kaneshie Awudome JHS",
      period: "2018 - 2019",
      location: "Ghana",
      description: "Supported classroom instruction and learning design activities. Assisted in developing visual learning materials and managing educational resources for enhanced student engagement.",
      skills: ["Classroom Management", "Learning Materials Design", "Student Support"]
    },
    {
      title: "Creative Learning Facilitator",
      company: "Global Access Academy",
      period: "2013 - 2014",
      location: "Ghana",
      description: "Facilitated STEM learning through creative and visual teaching methodologies. Designed engaging educational activities that combined mathematical concepts with artistic expression for primary students.",
      skills: ["STEM Education", "Creative Pedagogy", "Visual Learning", "Primary Education"]
    }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1 className="page-title">Professional Experience</h1>
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
