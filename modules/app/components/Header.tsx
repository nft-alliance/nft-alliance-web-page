import Link from "next/link";
import { Button } from "./Button";

export function Header() {
  return (
    <div>
      <header>
        <strong className="logo">NFT Alliance</strong>
        <nav>
          <ul>
            <li>
              <Link href="/#home">Home</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
            <li>
              <Link href="/develop">Developers</Link>
            </li>
          </ul>
        </nav>
        <a
          title="Join discord"
          href="https://discord.gg/eX9eXDu4tu"
          target="_blank"
          rel="noopener noreferrer"
        ><Button>Apply now</Button></a>
      </header>
      <style jsx>{`
            
            header{
          align-items: center;
          background: var(--page-background-color);
          background: rgba(0,9,16,0.8);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-main-color);
          display: flex;
          flex-wrap: wrap;
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

        @media all and (max-width: 650px) {
          nav {
            display: none;
          }
        }
            `}</style>
    </div>
  )
}