import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");
        :root {
          --gap: 16pt;
          --page-background-color: #000910;
          --alt-background-color: grey;
          --text-main-color: #fff;
          --text-secondary-color: grey;

          --z-index-modal: 1000;
          --z-index-header: 100;
          --accents-1: #f9fafc;
          --accents-2: #eaeaea;
          --accents-3: #999;
          --accents-4: #888;
          --accents-5: #666;
          --accents-6: #444;
          --accents-7: #333;
          --accents-8: #111;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          display: none;
        }

        ::selection {
          color: #000;
          background: #FFF;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        p a {
          text-decoration: underline;
        }

        

        * {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          margin: 0;
          padding: 0;
        }

        body {
          padding: 0;
          margin: 0;
          margin: 0;
          padding: 0;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.8;
          color: var(--text-main-color);
          background: var(--page-background-color);
          font-family: "Space Mono", monospace;
        }


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

        @media only screen and (max-width: 600px) {
          body {
            font-size: 13px;
          }
        }
        h1 {
          font-weight: 700;
        }

        p {
          margin-bottom: 10px;
        }

        * {
          box-sizing: border-box;
        }

        input {
          padding: 15px;
          border: none;
        }

        img {
          max-width: 100%;
        }
      `}</style>
    </div>
  );
}
export default function AppWrapper(props: any) {
  return <App {...props} />;
}
