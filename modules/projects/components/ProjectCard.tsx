import React from "react";
import { Project } from "../project";

export function ProjectCard({
  project,
}: {
  project: Project;
}): React.ReactElement {
  return (
    <div>
      <div className="project">
        <div className="project-title">
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </div>
        <div className="project-description">{project.description}</div>
        <div className="project-price">
          Price: {project.price >= 0 ? `${project.price} Ξ` : 'Sold out'}
        </div>
        <div className="project-categories">
            {project.categories
                .map(c => <div className="project-category" key={`${project.title}-${c}`}>{c}</div>)}
        </div>
      </div>
      <style jsx>{`
        .project {
          padding: 15px;
        }

        .project-title {
            font-weight: bold;
            margin-bottom: 15px;
        }

        .project-categories {
            display: flex;
            align-items: center;

        }

        .project-price {
          margin: 15px 0;
          font-weight: bold;
        }

        .project-category {
            border-radius: 10px;
            padding: 0 10px;
            background: grey;
            margin-right: 15px;
            color: white;
        }
      `}</style>
    </div>
  );
}
