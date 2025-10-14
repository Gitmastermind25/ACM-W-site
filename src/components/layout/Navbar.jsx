// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Button, IconButton, MobileNav } from "@material-tailwind/react";

export default function Navbar({ brandName, logo, routes, action }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        {logo && <img src={logo} alt="Logo" className="h-12 w-12" />}
        <span className="text-2xl font-bold text-pink-500">{brandName}</span>
      </div>

      {/* Desktop Nav Links + Action */}
      <div className="navbar-links hidden lg:flex items-center gap-6">
        {routes.map(({ name, path, type }) =>
          type === "scroll" ? (
            <Link
              key={name}
              to={path}
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              {name}
            </Link>
          ) : (
            <RouterLink key={name} to={path}>
              {name}
            </RouterLink>
          )
        )}
        {React.cloneElement(action)}
      </div>

      {/* Mobile Hamburger Menu Button */}
      <IconButton
        variant="text"
        color="white"
        className="lg:hidden ml-auto"
        onClick={() => setOpenNav(!openNav)}
      >
        <img src="/img/bars-icon.jpeg" alt="Menu" className="h-6 w-6" />
      </IconButton>

      {/* Mobile Nav */}
      {openNav && (
        <MobileNav className="bg-black/95 text-white rounded-xl p-6 flex flex-col gap-6 mt-2 lg:hidden">
          {routes.map(({ name, path, type }) =>
            type === "scroll" ? (
              <Link
                key={name}
                to={path}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                {name}
              </Link>
            ) : (
              <RouterLink key={name} to={path}>
                {name}
              </RouterLink>
            )
          )}
          {React.cloneElement(action)}
        </MobileNav>
      )}
    </nav>
  );
}

Navbar.defaultProps = {
  brandName: "ACM-W",
  logo: "/img/acm_wlogo-removebg-preview.png",
  action: (
    <RouterLink to="/login">
      <Button className="bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white shadow-lg">
        Login
      </Button>
    </RouterLink>
  ),
  routes: [
    { name: "Home", path: "home", type: "scroll" },
    { name: "About", path: "about", type: "scroll" },
    { name: "Events", path: "events", type: "scroll" },
    { name: "Contact", path: "contact", type: "scroll" },
  ],
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  logo: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["scroll", "link"]).isRequired,
    })
  ).isRequired,
  action: PropTypes.node,
};
