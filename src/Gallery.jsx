
import React, { useState } from "react";
import "./style.css";
import Footer from "./Footer.jsx";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/gallery-1.jpg", alt: "Portfolio photograph 1" },
    { src: "/images/gallery-2.jpg", alt: "Portfolio photograph 2" },
    { src: "/images/gallery-3.jpg", alt: "Portfolio photograph 3" },
    { src: "/images/gallery-4.jpg", alt: "Portfolio photograph 4" },
    { src: "/images/gallery-5.jpg", alt: "Portfolio photograph 5" },
    { src: "/images/gallery-6.jpg", alt: "Portfolio photograph 6" },
    { src: "/images/gallery-7.jpg", alt: "Portfolio photograph 7" },
    { src: "/images/gallery-8.jpg", alt: "Portfolio photograph 8" },
    { src: "/images/gallery-9.jpg", alt: "Portfolio photograph 9" },
    { src: "/images/gallery-10.jpg", alt: "Portfolio photograph 10" },
    { src: "/images/gallery-11.jpg", alt: "Portfolio photograph 11" },
    { src: "/images/gallery-12.jpg", alt: "Portfolio photograph 12" },
    { src: "/images/gallery-13.jpg", alt: "Portfolio photograph 13" },
    { src: "/images/gallery-14.jpg", alt: "Portfolio photograph 14" },
    { src: "/images/gallery-15.jpg", alt: "Portfolio photograph 15" },
    { src: "/images/gallery-16.jpg", alt: "Portfolio photograph 16" },
    { src: "/images/gallery-17.jpg", alt: "Portfolio photograph 17" },
    { src: "/images/gallery-18.jpg", alt: "Portfolio photograph 18" },
    { src: "/images/gallery-19.jpg", alt: "Portfolio photograph 19" },
    { src: "/images/gallery-20.jpg", alt: "Portfolio photograph 20" },
    { src: "/images/gallery-21.png", alt: "Portfolio photograph 21" },
    { src: "/images/gallery-22.jpg", alt: "Portfolio photograph 22" },
    { src: "/images/gallery-23.png", alt: "Portfolio photograph 23" },
    { src: "/images/gallery-24.png", alt: "Portfolio photograph 24" },
    { src: "/images/gallery-25.png", alt: "Portfolio photograph 25" },
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
        <h1 className="gallery-heading">Gallery</h1>

        <div className="gallery-grid">
          {images.map((image) => (
            <button
              className="gallery-item"
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Enlarge ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close enlarged image"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </main>
  );
}

export default Gallery;
