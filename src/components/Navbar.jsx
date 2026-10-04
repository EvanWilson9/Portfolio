import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="laptop-wrapper">
        <header className="laptop">
          <Link to="/">
            <img className="logo" src="/images/portfolio-logo.jpg" />
          </Link>
          <nav>
            <a style={{ textDecoration: "none" }} href="/" className="link">
              HOME
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="#projects"
              className="link"
            >
              PROJECTS
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="#contact"
              className="link"
            >
              CONTACT
            </a>
          </nav>
        </header>
      </div>
      <header className="mobile">
        <Link
          onClick={() => {
            if (isOpen) {
              toggleNavbar();
            }
          }}
          to="/"
        >
          <img className="logo" src="/images/portfolio-logo.jpg" />
        </Link>
        <nav className={`navbar ${isOpen ? "opened" : "closed"}`}>
          <a
            style={{ textDecoration: "none" }}
            onClick={toggleNavbar}
            href="/"
            className="link"
          >
            HOME
          </a>
          <a
            style={{ textDecoration: "none" }}
            onClick={toggleNavbar}
            href="#projects"
            className="link"
          >
            PROJECTS
          </a>
          <a
            style={{ textDecoration: "none" }}
            onClick={toggleNavbar}
            href="/contact"
            className="link"
          >
            CONTACT
          </a>
        </nav>
        {!isOpen ? (
          <div onClick={toggleNavbar} class="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
          </div>
        ) : (
          <div onClick={toggleNavbar} class="menu-btn close">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
          </div>
        )}
      </header>
    </>
  );
}
