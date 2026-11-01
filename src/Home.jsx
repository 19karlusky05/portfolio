
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Footer from "./Footer.jsx";

function Home() {
    /* This is for burger menu toggle functionality */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /* This is for closing the menu when clicking outside of it */
    useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
        if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
        ) {
        setIsMenuOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    }, [isMenuOpen]);


  return (
    <main>
    {/* Hero 1: Home/Main landing section */}
        <section
        className="hero hero-home"
        style={{ backgroundImage: "url('/images/home.jpg')" }} /*cambiar home.jpg en images*/
        >
        <header className="site-header" ref={headerRef}>
        <a href="/" className="site-logo">
            Karla Carbonel
        </a>

        <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav className={`main-navigation ${isMenuOpen ? "is-open" : ""}`}>
            <a href="/">Home</a>
            <a
            href="/gallery"
            onClick={() => setIsMenuOpen(false)}
            >
            Gallery
            </a>
            <a
            href="/videography"
            onClick={() => setIsMenuOpen(false)}
            >
            Videography
            </a>
            <a
            href="/my-websites"
            onClick={() => setIsMenuOpen(false)}
            >
            My Websites
            </a>
            <a
            href="/about-me"
            onClick={() => setIsMenuOpen(false)}
            >
            About Me
            </a>
        </nav>
        </header>
        </section>

        {/* Hero 2: Gallery */}
        <section
        className="hero hero-gallery"
        style={{ backgroundImage: "url('/images/gallery.jpg')" }} /*cambiar home.jpg en images*/
        >
        <a href="/gallery" className="hero-title">
            Gallery
        </a>
        </section>

      {/* Hero 3: Videography */}
        <section className="hero hero-videography">
        <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
        >
            <source src="/videos/videography.mp4" type="video/mp4" />
        </video>

        <a href="/videography" className="hero-title">
            Videography
        </a>
        </section>

      {/* Hero 4: My Websites */}
        <section
        className="hero hero-websites"
        style={{ backgroundImage: "url('/images/websites.jpg')" }} /*cambiar home.jpg en images*/
        >
        <a href="/my-websites" className="hero-title">
            My Websites
        </a>
        </section>

      {/* Hero 5: About Me */}
        <section
        className="hero hero-about"
        style={{ backgroundImage: "url('/images/about-me.jpg')" }} /*cambiar home.jpg en images*/
        >
        <a href="/about-me" className="hero-title">
            About Me
        </a>
        </section>

        <Footer />
    </main>
  );
}

export default Home;
