import type { NextPage } from "next";
import { Layout } from "../modules/app/components/Layout";

const Develop: NextPage = () => {
  return (
    <div>
      <Layout>
        <main className="main">
          <h1 className="title appear">Developer resources</h1>

          <h2 className="appear d025">Testnet</h2>
          <p className="appear d05">
            Arbitrum has it&apos;s own testnet (chain id: 421611) that you can
            add here:{" "}
            <a href="https://chainlist.org/">https://chainlist.org/</a>.
            transactions can be visualized through{" "}
            <a href="https://testnet.arbiscan.io/">
              https://testnet.arbiscan.io/
            </a>
          </p>

          <h2 className="appear d075">NFT Boilerplate</h2>
          <p className="appear d1">
            The NFT Alliance created a{" "}
            <a href="https://github.com/nft-alliance/nft-boilerplate">
              NFT boilerplate
            </a>{" "}
            that you can use to launch your smartcontract. You will also find a{" "}
            <a href="https://github.com/nft-alliance/nft-landing-boilerplate">
              Website Boilerplate
            </a>{" "}
            to allow to mint NFTs.{" "}
          </p>
        </main>
      </Layout>
      <style jsx>{`
        .main {
          padding: calc(160px + 80px) 0 0;
          max-width: 720px;
          margin: 0 auto;
        }

        .title {
          font-size: 36px;
        }

        h2 {
          font-size: 24px;
          margin: 40px 0 16px;
        }
        @media all and (max-width: 760px) {
          .main {
            padding: 120px 0 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Develop;
