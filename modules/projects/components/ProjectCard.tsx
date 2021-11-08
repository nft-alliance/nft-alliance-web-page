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
          <div className="project-image">
            <Image
              src={project.image}
              width="100"
              height="100"
              layout="responsive"
              alt={`${project.title}-image`}
            />
          </div>
        )}

        <div className="project-description">{project.description}</div>
        {project.categories.includes(categories.NFT) && (
          <div className="project-price">
            Price: {project.price >= 0 ? `${project.price} Ξ` : "Sold out"}
          </div>
        )}
        <div className="project-categories">
          {project.categories.map((c) => (
            <div className="project-category" key={`${project.title}-${c}`}>
              {c}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .project {
          padding: 15px;
          border: 1px solid;
        }

        .project-title {
          font-weight: bold;
          margin-bottom: 15px;
        }

        .project-image {
          margin-bottom: 15px;
          padding: 0 16px 0 16px;
        }

        .project-categories {
          display: flex;
          align-items: center;
          margin-top: 15px;
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
