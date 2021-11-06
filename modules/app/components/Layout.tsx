import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";

export const Layout: NextPage = ({ children} : { children? : React.ReactNode}) => {
  return (
    <div>
      <div className="container">
        <Head>
          <title>NFT Alliance</title>
          <meta name="description" content="NFT Alliance" />
          <link rel="icon" href="/nft.png" />
        </Head>

        <div className="content">
            {children}
        </div>
        <Footer />
      </div>
      <style jsx>{`
       .container {
          padding: 0 2rem;
        }

      `}</style>
    </div>
  );
};
