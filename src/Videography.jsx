import React from "react";
import "./style.css";
import Footer from "./Footer.jsx";

function Videography() {
  const videos = [
    { id: "g0kOO3TJqkk", title: "Video 1" },
    { id: "AKJHdb_6tBs", title: "Video 2" },
    { id: "jIWofCIJZUA", title: "Video 3" },
    { id: "So6zUx_SXMM", title: "Video 4" },
    { id: "2lJ8uNQOhtI", title: "Video 5" },
    { id: "ELEed_HFsA8", title: "Video 6" },
    { id: "ofwgdQilzSg", title: "Video 7" },
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
        <h1 className="gallery-heading">Videography</h1>

        <div className="videography-grid">
          {videos.map((video) => (
            <div className="videography-item" key={video.id}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Videography;
