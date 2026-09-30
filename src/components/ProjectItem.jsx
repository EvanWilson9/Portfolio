import { Technology } from "../data/technologyIcons";

export default function ProjectItem({
  key,
  img,
  title,
  desc,
  link,
  technologies,
  isInProgress,
  isLive,
}) {
  function getTechnologyInfo(technologiesArray) {
    let technologyObjects = [];

    for (const tech of technologiesArray) {
      for (const enumObject of Object.values(Technology)) {
        if (tech == enumObject.name) {
          technologyObjects.push(enumObject);
          break;
        }
      }
    }
    return technologyObjects;
  }

  let technologyObjects = getTechnologyInfo([...technologies]);

  return (
    <div className="project">
      <img alt="" className="projectp-img" src={img} />
      <div className="projectp-content">
        <div className="projectp-content-top">
          <h2>{title}</h2>
          <div className="projectp-technologies">
            {technologyObjects.map((technology) => {
              return (
                <p key={key} className="projectp-technology">
                  <img className="technology-icon" src={technology.image} />
                  {technology.name}
                </p>
              );
            })}
          </div>
        </div>
        <p className="desc">{desc}</p>
        <div className="projectp-bottom">
          <a href={link} target="_blank" className="visit-link">
            {isLive ? <div>View Site</div> : <div>View Code</div>}
          </a>
          {isInProgress && <div className="in-progress">In progress</div>}
        </div>
      </div>
    </div>
  );
}
