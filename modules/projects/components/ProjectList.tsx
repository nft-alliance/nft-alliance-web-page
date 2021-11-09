import React from "react";
import { Project } from "../project";
import { ProjectCard } from "./ProjectCard";

export function ProjectList({
  projects,
}: {
  projects: Project[];
}): React.ReactElement {
  return (
    <div>
      <div className="project-list">
        {projects.map(p => (
            <div className="project-wrapper" key={p.title}>
                <ProjectCard project={p} />
            </div>
        ))}
      </div>
      <style jsx>{`
        .project-list {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
        }

        .project-wrapper {
            margin-bottom: 64px;
            width: calc(50% - 32px);
        }

        @media only screen and (max-width: 600px) {
          .project-wrapper {
            margin: 0 auto 40px;
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
}
