import React from "react";
import { technologies } from "../data/technologyIcons";

export default function Technologies() {
  return (
    <section className="technologies-section">
      <div className="technology-wrapper">
        <div className="technology-container">
          <h2 className="title projects white">TECHNOLOGIES</h2>
          <div className="technologies">
            {technologies.map((section) => (
              <div className="technology-category" key={section.title}>
                <h3 className="technology-category-title">{section.title}</h3>
                <div className="technology-category-items">
                  {section.items.map((technology) => (
                    <p
                      className="technology"
                      key={`${section.title}-${technology.name}`}
                    >
                      <img
                        className="technology-icon"
                        src={technology.image}
                        alt={technology.name}
                      />
                      {technology.name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
