import React from "react";
import Home from "./Home.jsx";
import Gallery from "./Gallery.jsx";
import Videography from "./Videography.jsx";
import MyWebsites from "./MyWebsites.jsx";

function App() {
  const currentPath = window.location.pathname;

  if (currentPath === "/gallery") {
    return <Gallery />;
  }

  if (currentPath === "/videography") {
  return <Videography />;
  }

  if (currentPath === "/my-websites") {
  return <MyWebsites />;
  }

  return <Home />;
}

export default App;
