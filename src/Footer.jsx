import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Karla Carbonel. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;