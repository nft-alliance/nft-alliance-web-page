import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Layout } from "../modules/app/components/Layout";
import { ProjectList } from "../modules/projects/components/ProjectList";
import { allProjects, categories } from "../modules/projects/constants";

const Home: NextPage = () => {
  const [categoriesFiltered, setCategoriesFiltered] = useState([categories.NFT, categories.DEFI, categories.MARKETPLACE])
  
  const toggleCategory = (category: string) => {
    setCategoriesFiltered(categoriesFiltered.includes(category) ? categoriesFiltered.filter(i => i !== category) : [...categoriesFiltered, category])
  }

  const filteredProjects = allProjects.filter(i => i.categories.filter(c => categoriesFiltered.includes(c)).length > 0)

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
            <h3>What will the NFT Alliance do ?</h3>
            <p>We&apos;ll build exclusive products on Arbitrum which leverage the NFT technology. Owning one NFT from each collection member of the alliance will give you access to exclusive content so grab some now.</p>
          </div>

          <div className="projects-wrapper">
            <h3>All projects in the Alliance</h3>
            <div className="filter-categories">
              <div className="filter-categories-title">Filter by category</div>
              <div className="filter-categories-items">
                <div className={`category ${categoriesFiltered.includes(categories.NFT) ? 'selected' : ''}`} onClick={() => toggleCategory(categories.NFT)}>NFT</div>
                <div className={`category ${categoriesFiltered.includes(categories.DEFI) ? 'selected' : ''}`} onClick={() => toggleCategory(categories.DEFI)}>DEFI</div>

                <div className={`category ${categoriesFiltered.includes(categories.MARKETPLACE) ? 'selected' : ''}`} onClick={() => toggleCategory(categories.MARKETPLACE)}>MARKETPLACE</div>

              </div>
            </div>
            <ProjectList projects={filteredProjects} />
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
          width: 100%;
        }

        .filter-categories-items {
          display: flex;
        }

        .category {
          background: grey;
          padding: 0 10px;
          border-radius: 10px;
          margin-right: 10px;
          color: white;
          cursor: pointer;
        }

        .category.selected {
          background: black;
        }
      `}</style>
    </div>
  );
};

export default Home;
