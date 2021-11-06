import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../modules/app/components/Layout";
import { ProjectList } from "../modules/projects/components/ProjectList";
import { allProjects } from "../modules/projects/constants";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <main className="main">
          <h1 className="title">Welcome to the NFT Alliance</h1>

          <p className="description">🐰🏰🏀🔥🤖🐻🐣🌽<br/>Arbitrum</p>
          

          <div className="about">
            <h3>What is the NFT Alliance?</h3>
            <p>
              The NFT Alliance is a working group formed by different NFT
              projects which aim to join efforts to grow our communities and the
              NFT ecosystem.
            </p>
            <h3>How can I join the NFT Alliance?</h3>
            <p>
              If you are a NFT project founder/builder, you can join our Discord and apply. Note: We will not accept applications from copies of existing projects.
            </p>
          </div>

          <div className="projects-wrapper">
            <h3>All projects in the Alliance</h3>
            <ProjectList projects={allProjects} />
          </div>
        </main>
      </Layout>
      <style jsx>{`
        .main {
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          margin: 4rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .projects-wrapper, .about {
          max-width: 880px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Home;
