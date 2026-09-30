import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="projectsp-section">
      <div className="projectsp-wrapper">
        <div className="projectsp-container">
          <div className="projectsp-top">
            <h2 className="title projects">PROJECTS</h2>
            <p className="projectsp desc">
              Here are some of the applications and websites I’ve built for
              clients and as personal projects. Each project highlights my
              ability to use different technologies to design and develop
              functional, responsive, and user-friendly experiences.
            </p>
          </div>
          <div className="projects-container">
            <div className="solo-projects-wrapper">
              {projects.map((item) => {
                let technologyList = item.tech.split(", ");
                return (
                  <ProjectItem
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    link={item.link}
                    technologies={technologyList}
                    isInProgress={item.isInProgress}
                    isLive={item.isLive}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <section className="projects-section">
//   <div className="projects-wrapper">
//     {/* <img className='projects-img-laptop' src="/images/projects.jpg"/>
//     <div className='services-bottom'>
//       <h2 className='title projects'>PROJECTS</h2>
//       <p className='desc projects'>I’m excited to share some of the work I’ve had the privilege of creating.
//         These projects reflect my skills, creativity, and commitment to delivering
//           results that make a difference. Click the button to explore my portfolio and
//           see how I can bring value to your vision!</p>
//       <Link to="/projects"><div><button className='button' role='button'>See Projects</button></div></Link>
//     </div> */}
//     </div>
//   </div>
// </section>

// {
//     "id": 4,
//     "img": "/projectImages/mindfulconnections.png",
//     "page": "/mindfulconnections",
//     "title": "Mindful Connections",
//     "desc": "This website for Mindful Connections Consulting LLC is fully responsive, meaning it looks great and works smoothly on all devices, from phones to desktops. It provides innovative solutions and support in mental wellness, education, and community development, highlighting the founder’s experience in helping individuals and organizations thrive. The site offers services and resources focused on mental health, education, and data-driven decision-making, all aimed at promoting collaboration and positive change. Its responsive design ensures a user-friendly experience, no matter how visitors access it.",
//     "link": "https://mindfulconnections.netlify.app",
//     "tech": "React.js, HTML, CSS, JavaScript, Netlify"
//   },
// {
//     "id": 3,
//     "img": "/projectImages/standardbarbecue.png",
//     "page": "/standardbarbecue",
//     "title": "Standard Barbecue",
//     "desc": "This website for the company Standard Barbecue is a fully responsive platform connected to a Shopify store, built to promote and drive sales of their signature barbecue sauces. It offers a seamless shopping experience with Shopify integration, allowing users to browse products easily and make secure purchases. Featuring high-quality visuals, detailed product descriptions, and a user-friendly design optimized for all devices, the site serves as both an e-commerce solution and a marketing tool to help Standard Barbecue grow its online presence and connect with customers.",
//     "link": "https://standard-barbecue.com",
//     "tech": "React.js, HTML, CSS, JavaScript, HostGator"
//   },
// {
//     "id": 1,
//     "img": "/projectImages/synergy360.png",
//     "page": "/synergy360",
//     "title": "Synergy 360",
//     "desc": "The Synergy 360, LLC website is fully responsive, meaning it looks great and functions smoothly on any device—whether you're on a phone, tablet, or desktop. Its clean design and clear layout make it easy for users to find information, explore services, and connect with the team. The site effectively showcases the company’s expertise in financial planning, investing, and insurance, helping build trust with potential clients. By offering a user-friendly experience and quick access to resources, the website supports Synergy 360’s mission and strengthens its professional image online.",
//     "link": "https://synergy-360.com/",
//     "tech": "React.js, HTML, CSS, JavaScript, Netlify"
//   },
