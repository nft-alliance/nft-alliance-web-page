import type { NextPage } from "next";
import { Layout } from "../modules/app/components/Layout";

const Develop: NextPage = () => {
 

  return (
    <div>
      <Layout>
        <main className="main">
          <h1>Developer resources</h1>

          <h2>Testnet</h2>
          <p>Arbitrum has it&apos;s own testnet (chain id: 421611) that you can add here: <a href="https://chainlist.org/">https://chainlist.org/</a>. transactions can be visualized through <a href="https://testnet.arbiscan.io/">https://testnet.arbiscan.io/</a></p>

          <h2>NFT Boilerplate</h2>
          <p>The NFT Alliance created a <a href="https://github.com/nft-alliance/nft-boilerplate">NFT boilerplate</a> that you an use to launch your smartcontract. You will also find a <a href="https://github.com/nft-alliance/nft-landing-boilerplate">Website Boilerplate</a> to allow to mint NFTs. </p>
        </main>
      </Layout>
      <style jsx>{`
        .main {
          padding: 15px;
          max-width: 1000px;
          margin: 0 auto;
          padding-top: 150px;
        }
        @media all and (max-width: 760px){
          .main{
            padding: 24px;
          }
        }
        
      `}</style>
    </div>
  );
};

export default Develop;
