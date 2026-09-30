import React from "react";
import Facebook from "../FooterIcons/Facebook";
import Instagram from "../FooterIcons/Instagram";
import GitHub from "../FooterIcons/GitHub";
import LinkedIn from "../FooterIcons/LinkedIn";
import EmailIcon from "../FooterIcons/EmailIcon";

import { Link } from "react-router-dom";

function getCurrentAge() {
  const currentDate = new Date();
  const birthdayYear = 2005;
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  if (currentMonth < 12 && currentDay < 28)
    return currentYear - birthdayYear - 1;
  return currentYear - birthdayYear;
}

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <img className="hero-img" src="/images/hero.png" />
        <div className="hero-content">
          <h2 className="hero-title">Evan Wilson</h2>
          <div className="hero-icons">
            <a
              className="social-link"
              href="mailto:evanpwilson1@gmail.com"
              target="_blank"
            >
              <EmailIcon width="25px" height="25px" />
            </a>
            <a
              className="social-link"
              href="https://www.facebook.com/evan.wilson.14019/"
              target="_blank"
            >
              <Facebook width="25px" height="25px" />
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/lefty_evan9/"
              target="_blank"
            >
              <Instagram width="25px" height="25px" />
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/evanpwilson1/"
              target="_blank"
            >
              <LinkedIn width="25px" height="25px" />
            </a>
            <a
              className="social-link"
              href="https://github.com/EvanWilson9"
              target="_blank"
            >
              <GitHub width="25px" height="25px" />
            </a>
          </div>
          <div className="about-desc">
            <p>
              Hi there! I’m Evan Wilson, a {getCurrentAge()}-year-old aspiring
              software engineer from Indianapolis, Indiana. I am pursuing my
              Bachelors of Computer Science at Ball State University and am
              graduating in May of 2027. I have concentrations in Web & Mobile
              Development and Machine Learning & Data Analytics. My passion lies
              in creating, whether it's developing websites or building
              applications.
            </p>
          </div>
          <div className="button-container">
            <a href="#contact">
              <button className="button" role="button">
                Contact Me
              </button>
            </a>
            <a href="#projects">
              <button className="button2" role="button">
                My Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
