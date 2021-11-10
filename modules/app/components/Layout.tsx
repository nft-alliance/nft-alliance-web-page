import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: NextPage = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="nft-alliance">
      <Head>
        <title>NFT Alliance</title>
        <meta name="description" content="NFT Alliance" />
        <link rel="icon" href="/nft.png" />
      </Head>
      <Header />
      <div className="content">{children}</div>
      <Footer />
      <style jsx>{`
        .nft-alliance {
          min-height: 100vh;
        }
        .container {
          padding: 0 2rem;
        }
      `}</style>
    </div>
  );
};
