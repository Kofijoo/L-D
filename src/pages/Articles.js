import React from 'react';

function Articles() {
  const publications = [
    {
      title: "Natural Science & Real Life Learning",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "2023",
      role: "Lead Author",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1737/#abstract"
    },
    {
      title: "STEAM Education Model",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "2023",
      role: "Sole Author",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1728/#abstract"
    },
    {
      title: "Classroom Management & Student Well-being",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "2023",
      role: "Co-Author",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1680/#abstract"
    }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1 className="page-title">Research</h1>
        <p className="page-intro">
          Published research and insights on instructional design and educational technology.
        </p>

        <div className="section-block">
          <div className="articles-grid">
            {publications.map((pub, index) => (
              <div key={index} className="article-card">
                <h2>{pub.title}</h2>
                <p className="article-date">{pub.journal} | {pub.year}</p>
                <p className="article-excerpt"><strong>Role:</strong> {pub.role}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="article-link">
                  Read Publication →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="linkedin-cta">
          <p>Want to read more of my articles and insights?</p>
          <a href="https://www.linkedin.com/in/joshua-agyekum/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="cta-button">
            View All Articles on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Articles;
