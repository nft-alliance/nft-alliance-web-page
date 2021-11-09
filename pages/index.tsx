import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { Layout } from "../modules/app/components/Layout";
import { ProjectList } from "../modules/projects/components/ProjectList";
import { allProjects, categories } from "../modules/projects/constants";

const Home: NextPage = () => {
  const [categoriesFiltered, setCategoriesFiltered] = useState([
    categories.NFT,
    categories.DEFI,
    categories.MARKETPLACE,
  ]);

  const toggleCategory = (category: string) => {
    setCategoriesFiltered(
      categoriesFiltered.includes(category)
        ? categoriesFiltered.filter((i) => i !== category)
        : [...categoriesFiltered, category]
    );
  };

  const filteredProjects = allProjects.filter(
    (i) => i.categories.filter((c) => categoriesFiltered.includes(c)).length > 0
  );

  return (
    <div>
      <Layout>
        <main className="main">
          <header>
            <strong className="logo">NFT Alliance</strong>
            <nav>
              <ul>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
              </ul>
            </nav>
            <button>Apply now</button>
          </header>
          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <h1 className="title appear d025">
                  <small>👋 Welcome to the</small>
                  <span>NFT Alliance</span> on <i>Arbitrum</i>.
                </h1>
                <h2 className="subtitle appear d05">
                  We are an independent collective of <strong>NFT</strong>,{" "}
                  <strong>DeFi</strong> and <strong>Marketplaces</strong>{" "}
                  founders who join forces to achieve joint goals that impact
                  the Arbitrum ecosystem.
                </h2>
                <div className="cta appear d075">
                  <button className="">Join the Alliance</button>
                  <a href="#" className="inline">
                    Explore more
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-info appear d1">
              <div className="hero-info-unit">
                <strong>12</strong>
                <p>NFTs Projects</p>
              </div>
              <div className="hero-info-unit">
                <strong>08</strong>
                <p>DeFi Projects</p>
              </div>
              <div className="hero-info-unit">
                <strong>02</strong>
                <p>Marketplaces</p>
              </div>
            </div>
          </section>

          <div className="about">
            <div className="about-section">
              <h3>What is the NFT Alliance?</h3>
              <p>
                The NFT Alliance is a working group formed by different NFT
                projects which aim to join efforts to grow our communities and
                the NFT ecosystem.
              </p>
            </div>
            <div className="about-section">
              <h3>How can I join the NFT Alliance?</h3>
              <p>
                If you are a NFT project founder/builder, you can join our
                Discord and apply. Note: We will not accept applications from
                copies of existing projects.
              </p>
            </div>
            <div className="about-section">
              <h3>What will the NFT Alliance do ?</h3>
              <p>
                We&apos;ll build exclusive products on Arbitrum which leverage
                the NFT technology. Owning one NFT from each collection member
                of the alliance will give you access to exclusive content so
                grab some now.
              </p>
            </div>
          </div>

          <div className="projects-wrapper">
            <h3>All projects in the Alliance</h3>
            <div className="filter-categories">
              <div className="filter-categories-title">Filter by category</div>
              <div className="filter-categories-items">
                <div
                  className={`category ${
                    categoriesFiltered.includes(categories.NFT)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleCategory(categories.NFT)}
                >
                  NFT
                </div>
                <div
                  className={`category ${
                    categoriesFiltered.includes(categories.DEFI)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleCategory(categories.DEFI)}
                >
                  DEFI
                </div>

                <div
                  className={`category ${
                    categoriesFiltered.includes(categories.MARKETPLACE)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleCategory(categories.MARKETPLACE)}
                >
                  MARKETPLACE
                </div>
              </div>
            </div>
            <ProjectList projects={filteredProjects} />
          </div>
        </main>
      </Layout>
      <style jsx>{`
        .appear{
          animation: appear 0.35s ease-out forwards;
          transform: translateY(25%);
          opacity: 0;
        }
        .appear.d025{
          animation-delay: 0.25s;
        }
        .appear.d05{
          animation-delay: 0.5s;
        }
        .appear.d075{
          animation-delay: 0.75s;
        }
        .appear.d1{
          animation-delay: 1s;
        }
        @keyframes appear{
          to{
            opacity: 1;
            transform: translateY(0);
          }
        }
        header{
          align-items: center;
          background: var(--page-background-color);
          background: rgba(0,9,16,0.8);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-main-color);
          display: flex;
          justify-content: space-between;
          padding: 16px 24px;
          top: 8px;
          position: fixed;
          width: 100%;
          max-width: 720px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        header nav ul{
          display: flex;
        }

        header nav ul li{
          list-style: none;
          padding: 0 16px;
        }

        .hero {
          color: var(--text-main-color);
          background: var(--page-background-color);
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          padding: calc(160px + 80px) 0 0;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
        }

        .hero:before, .hero:after{
          animation: circleAf 16s linear infinite forwards;
          border: 3px dashed #7514fc8f;
          border-radius: 50%;
          bottom: 0;
          //content: '';
          height: 30vw;
          position: fixed;
          transform: translate(20%, 50%);
          transform-origin-center;
          right: 0;
          width: 30vw;
        }

        @keyframes circleAf{
          to{
            transform: translate(20%, 50%) rotate(-360deg);
          }
        }

        .hero:before{
          animation: circleBf 16s linear infinite forwards;
          border-color: rgba(255,255,255,0.1);
          right: auto;
          height: 40vw;
          width: 40vw;
          left: 0;
          bottom: auto;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        @keyframes circleBf{
          to{
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        .hero .container {
          align-items: center;
          display: flex;
          justify-content: flex-start;
          margin: 0 auto;
          max-width: 720px;
          height: 100%;
        }

        .hero-content {
          padding-bottom: 80px;
          text-align: left;
          width: 100%;
        }

        .hero-content .title {
          font-size: 80px;
          line-height: 1;
        }

        .hero-content .title small {
          font-size: 14px;
          display: block;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .hero-content .title span {
          display: inline-block;
          font-family: "Space Mono", monospace;
        }

        .hero-content .title i{
          color: #7514fc;
        }

        .hero-content .subtitle {
          color: rgba(255, 255, 255, 0.5);
          font-weight: 300;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          margin: 48px 0;
          width: 80%;
        }

        .hero-content .subtitle strong {
          color: var(--text-main-color);
          opacity: 1;
          text-decoration: underline;
          font-style: italic;
        }

        .hero-info{
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 720px;
          width: 100%;
        }

        .hero-info-unit{
          align-items: center;
          border: 1px solid rgba(255,255,255,0.1);
          border-bottom: 0;
          display: flex;
          padding: 16px 24px;
          margin: 0;
          position: relative;
          flex-flow: column;
          width: 100%;
          z-index: 1;
        }

        .hero-info-unit:first-of-type{
          border-radius: 8px 0 0 0;
        }

        .hero-info-unit:last-of-type{
          border-radius: 0 8px 0 0;
        }

        .hero-info-unit strong{
          font-size: 32px;
          line-height: 1;
        }

        .hero-info-unit p{
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .cta a{
          margin-left: 24px;
        }

        .main{
          background-color: var(--page-background-color);
          color: var(--text-main-color);
        }

        .description {
          margin: 4rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .projects-wrapper,
        .about {
          max-width: 720px;
          margin: 0 auto;
          padding: 120px 0;
          width: 100%;
        }

        .projects-wrapper h3{
          font-size: 24px;
        }

        .filter-categories{
          margin-bottom: 80px;
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

        .about-section{
          margin: 80px 0;
        }

        .category.selected {
          background: #FFF;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Home;
