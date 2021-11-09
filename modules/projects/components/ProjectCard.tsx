import React from "react";
import Image from "next/image";

import { categories } from "../constants";
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

        {project.image && (
          <a href={project.url} target="_blank" rel="noreferrer">
            <div className="project-image">
              <img
                src={project.image}
                width={'100%'}
                alt={`${project.title}-image`}
              />
            </div>
          </a>
        )}

        <div className="project-description">{project.description}</div>

        <div className="project-categories">
          <div className="tags">
            {project.categories.map((c) => (
              <div className="project-category" key={`${project.title}-${c}`}>
                {c}
              </div>
            ))}
          </div>
          {project.categories.includes(categories.NFT) && (
            <div className="project-price">
              Price: {(project.price >= 0 || typeof project.price === 'string')? `${project.price} Ξ` : "Sold out"}
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .project {
          box-shadow: 8px 8px 0px rgba(255, 255, 255, 0.15);
          display: flex;
          flex-flow: column;
          padding: 16px;
          min-height: 560px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: box-shadow 0.25s ease-out, transform 0.25s ease-out;
        }

        .project:hover {
          box-shadow: 0px 0px 0px rgba(255, 255, 255, 0.15);
          transform: translate(8px, 8px);
        }

        .project-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 15px;
          text-align: left;
        }

        .tags{
          align-items: center;
          display: flex;
        }

        .project-image {
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 24px;
        }

        .project-categories {
          align-items: center;
          display: flex;
          margin-top: auto;
          justify-content: space-between;
        }

        .project-price {
          font-weight: bold;
        }

        .project-category {
          border-radius: 10px;
          padding: 2px 8px;
          font-size: 14px;
          font-weight: 600;
          background: grey;
          margin-right: 16px;
          text-transform: uppercase;
          color: white;
        }
      `}</style>
    </div>
  );
}
