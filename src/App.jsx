// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import { Navbar, Footer, PageTitle } from "./components/layout";
import routes from "./routes.jsx"; 


// Sections
import Homee from "./pages/Homepage/Homee.jsx";
import Club from "./pages/Homepage/Club.jsx";
import Team from "./pages/Homepage/Team.jsx";
import Event from "./pages/Homepage/Event.jsx";

import Blog from "./pages/Homepage/Blog.jsx";
import About from "./pages/Homepage/About.jsx";
import FooterMain from "./pages/Homepage/FooterMain.jsx";

function App() {
  return (
    <Router>
      <Navbar routes={routes} />

      <Routes>
        <Route path="/about" element={<About />} />

        <Route
          path="/"
          element={
            <>
              <Element name="home"><Homee /></Element>
               <Element name="mentors"><Club /></Element>
              <Element name="team"><Team /></Element>
              <Element name="event"><Event /></Element>  
              <Element name="blog"><Blog /></Element>
              

              <FooterMain />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
