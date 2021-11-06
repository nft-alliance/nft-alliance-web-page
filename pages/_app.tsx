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
        :root {
          --gap: 16pt;
          --page-background-color: white;
          --alt-background-color: grey;
          --text-main-color: black;
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
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
          font-family: Atari, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        @media only screen and (max-width: 600px) {
          body {
            font-size: 13px;
          }
        }
        a {
          color: blueviolet;
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
