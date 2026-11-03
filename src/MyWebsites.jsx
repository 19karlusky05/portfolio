import React from "react";
import "./style.css";
import Footer from "./Footer.jsx";

function MyWebsites() {
  const projects = [
    {
        title: "Current Project",
        image: "/images/website-1.jpeg",
        description: "A website currently under development.",
        status: "Currently in development",
        link: null,
    },
    {
        title: "Project Two",
        image: "/images/website-2.png",
        description: "I created a website like an invitation for my wedding.",
        link: "https://ourwedding-kl.netlify.app/",
    },
    {
        title: "Project Three",
        image: "/images/website-3.png",
        description: "This was my final project of my HND.",
        link: "https://example.com",
    },
    {
        title: "Project Four",
        image: "/images/website-4.png",
        description: "A college project of my HND.",
        link: "https://example.com",
    },
  ];

  return (
    <main className="gallery-page">
        <header className="gallery-header">
        <a href="/" className="site-logo">
            Karla Carbonel
        </a>

        <nav className="gallery-navigation">
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/videography">Videography</a>
            <a href="/my-websites">My Websites</a>
            <a href="/about-me">About Me</a>
        </nav>
        </header>

      
        <section className="gallery-content">
        <h1 className="gallery-heading">My Websites</h1>

        <div className="websites-grid">
            {projects.map((project) => (
            <article className="website-card" key={project.title}>

                {project.link ? (
                <a
                    className="website-image-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.title}`}
                >
                    <img
                    className="website-image"
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    />
                </a>
                ) : (
                <div className="website-image-link">
                    <img
                    className="website-image"
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    />
                </div>
                )}

                <div className="website-details">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                {project.link ? (
                    <a
                    className="website-visit-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    >
                    Visit website ↗
                    </a>
                ) : (
                    <span className="website-status">
                    {project.status}
                    </span>
                )}
                </div>

            </article>
            ))}
        </div>
        </section>
        
        <Footer />
    </main>
  );
}

export default MyWebsites;
