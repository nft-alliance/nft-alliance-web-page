import Link from 'next/link'

export function Footer() {
  return (
    <div className="footer-wr">
      <div className="footer">
        <a
          href="https://twitter.com/arbNFTAlliance"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter account"
        >
          👉 Twitter
        </a>

       

        <a
          title="Join discord"
          href="https://discord.gg/eX9eXDu4tu"
          target="_blank"
          rel="noopener noreferrer"
        >
          👉 Join our Discord
        </a>

        <a
          title="GitHub"
          href="https://github.com/nft-alliance"
          target="_blank"
          rel="noopener noreferrer"
        >
          👉 GitHub
        </a>

      </div>
      <div style={{ padding: '30px', textAlign: 'center'}}>
        2021 - NFT Alliance
      </div>
      <style jsx>
        {`

          .footer-wr{
            border-top: 1px solid rgba(255,255,255,0.1);
            margin-top: 80px;
            padding: 40px 0;
          }
          .footer {
            color: #FFF;
            width: 100%;
            margin: auto;
            padding: 0 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }

          .footer a {
            
            padding: 0 10px;
            text-transform: uppercase;
            text-decoration: none;
            color: #FFF;
          }
        `}
      </style>
    </div>
  );
}
