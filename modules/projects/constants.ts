import { Project } from "./project";

export const categories = {
  NFT: "nft",
  GAMING: "gaming",
  DEFI: "defi",
  PONZI: "ponzi",
  MARKETPLACE: "marketplace",
  AUCTION_HOUSE: "auction house",
  LOTTERY: "lottery",
};
export const allProjects: Project[] = [
  {
    title: "Divergence",
    url: "https://www.divergence-protocol.com",
    description: "Divergence is an AMM-based marketplace for binary options and volatility trading. The project allows its users - called \"DIVERs\" to mint specially forged NFTs that has unique utilities in the future. ",
    image: "/divergence.gif",
    categories: [categories.DEFI],
    price: 0,
  },
  {
    title: "CastleDAO",
    url: "https://castledao.com",
    description:
      "A castle is a key to the CastleVerse. 10k Castles, 10k Generals, Fight and Earn.",
    image: "/castledao.png",
    categories: [categories.NFT, categories.GAMING],
    price: 0.05,
  },
  {
    title: "SacredCreatures",
    url: "https://sacredcreatures.xyz",
    description:
      "Discover 7,000 Unique Sacred Creatures Cards. Join the King's servants journey.",
    image: "/sacred_creatures.png",
    categories: [categories.NFT],
    price: 0.05,
  },
  {
    title: "Realm",
    url: "https://www.rlm.land/",
    description: "Battle for the Metaverse begins now. Play-to-Earn Gaming.",
    image: "/realm.jpeg",
    categories: [categories.GAMING, categories.NFT],
    price: 0.02,
  },
  {
    title: "The Bunny Gang",
    url: "https://www.bunnygang.art/",
    description:
      "Limited 1332 unique avatar collection. The full Metaverse experience on Arbitrum.",
    image: "/bunny_gang.png",
    categories: [categories.NFT],
    price: 0.077,
  },
  {
    title: "Arbibots",
    url: "https://arbibots.xyz/",
    description:
      "Generated and rendered entirely on chain!! No centralized server, IPFS or Arweave!",
    image: "/arbibots.jpeg",
    categories: [categories.NFT],
    price: -1,
  },
  {
    title: "Arbidudes",
    url: "https://arbidudes.xyz/",
    description: "The cutest dudes in the Metaverse. 10k limited Arbidudes.",
    image: "/arbidudes.gif",
    categories: [categories.NFT],
    price: 0.05,
  },
  {
    title: "YayBears",
    url: "https://www.yaybears.com/",
    description: "What if Kanye West was a Bear?",
    image: "/yaybear.jpeg",
    categories: [categories.NFT],
    price: 0.05,
  },
  {
    title: "Yabbie Dabbies",
    url: "https://yabbiedabbies.com/",
    description: "Adopt and protect Yabbies and Dabbies from the villain Whale",
    image: "/yabbiedabbies.png",
    categories: [categories.NFT],
    price: 0.05,
  },
  {
    title: "Grand Fantasy",
    url: "https://grandfantasy.io/",
    description: "10K random basketball NFTs",
    image: "/grandfantasy.png",
    categories: [categories.NFT],
    price: 0,
  },
  {
    title: "FarmLand",
    url: "https://farmland-game.github.io/",
    description: "A play to earn DeFI + NFT farm",
    image: "/farmland.gif",
    categories: [categories.NFT, categories.DEFI, categories.GAMING],
    price: 0,
  },
  {
    title: "OutOfOrbit",
    url: "https://outoforbit.art/",
    description:
      "A new NFT marketplace on Arbitrum focused on supporting the Arbitrum NFT community",
    image: "/outoforbit.jpeg",
    categories: [categories.MARKETPLACE],
    price: 0,
  },
  {
    title: "Agora",
    url: "https://agoranft.io/",
    description: "A marketplace for the Arbitrum ecosystem",
    image: "/agora.jpeg",
    categories: [categories.MARKETPLACE],
    price: 0,
  },
  {
    title: "Footy Nouns",
    url: "https://www.footynouns.wtf/",
    description:
      "Footy Nouns are nouns who live entirely on-chain and enjoy football ⚽️🏆",
    image: "/footy.gif",
    categories: [categories.NFT],
    price: 0.03,
  },
  {
    title: "Random Walk NFT",
    url: "https://randomwalknft.com/",
    description: "A social experiment with generative NFTs",
    image: "/randomwalk.jpg",
    categories: [categories.NFT],
    price: "Variable",
  },
  {
    title: "Punk'n Punks",
    url: "https://punknpunks.com/",
    description:
      "Punk inception comes to life with Punk'n Punks.\
                  Also enjoy the chance to win some ETH.",
    image: "/punknpunks.png",
    categories: [categories.NFT, categories.LOTTERY],
    price: 0.01,
  },
  {
    title: "Skull Being Club",
    url: "https://skullbeingclub.com/",
    description:
      "$kull ₿eing Club is a collection of 6,000 generative portraits",
    image: "/skull-content.gif",
    categories: [categories.NFT],
    price: 0.05,
  },
  {
    title: "Minionz",
    url: "https://twitter.com/MinionzNFT",
    image: "/minionz.png",
    categories: [categories.NFT],
    price: 0.0333,
    description:
      "8,888 intelligent hexapeds. On-chain generated traits. Images are dynamically created in the smart contract using a novel layering approach.",
  },
  {
    title: "Arbazaar",
    url: "https://arbazaar.io/",
    description:
      "An Arbitrum-native NFT marketplace with minting, staking, and support for all collections",
    image: "/arbazaar.png",
    categories: [categories.MARKETPLACE],
    price: 0,
  },
  {
    title: "dGenesis",
    url: "https://dgenesis.io",
    image: "/dgenesis.jpg",
    categories: [categories.NFT],
    price: 0.05,
    description:
      "dGenesis is a platform aiming to create the finest collections of generative art while leveraging the Ethereum and Arbitrum eosystems.",
  },
  {
    title: "OpenBlox",
    url: "https://openblox.io",
    image: "/openblox.png",
    categories: [categories.NFT, categories.GAMING],
    price: 0.3,
    description:
      "OpenBlox is a platform of multiple games where you own your character as an NFT and you can use this character to battle, breed, hunt, collect and explore. Earning tokens whilst doing this.",
  },
  {
    title: "Arboreal Apes of Arbitrum",
    url: "https://arboreal-apes-of-arbitrum.herokuapp.com",
    description:
      "Apes that inhabit trees; sometimes they're hidden; a map may be useful; 2000px hi-res images",
    image: "/arboreal.gif",
    categories: [categories.NFT],
    price: 0.05,
  },
  {
    title: "Auclantis",
    url: "https://auclantis.com/",
    description:
      "A decentralized NFT auction house with community curation. Stake to earn.",
    image: "/auclantis.png",
    categories: [categories.AUCTION_HOUSE],
    price: 0,
  },
  {
    title: "tofuNFT",
    url: "https://tofunft.com/",
    description:
      "tofuNFT.com is a full-featured NFT marketplace with support for multi-currency, royalty and launchpad, deployed on multiple chains.",
    image: "/tofunft.png",
    categories: [categories.MARKETPLACE],
    price: 0,
  },
  {
    title: "Fraktal",
    url: "https://fraktal.io/",
    description:
      "Fractional NFT protocol, implemented in a Marketplace, NFT DAO, and NFT AMM",
    image: "/fraktal.png",
    categories: [categories.MARKETPLACE, categories.DEFI],
    price: 0,
  },
  {
    title: "vocus and friends",
    url: "https://vocus.cc/vaf",
    description:
      "VAF is a salon-based collection consisting of 3,333 unique artworks designed by vocus, a platform born for creators and words with solid monetization models.",
    image: "/vaf.png",
    categories: [categories.NFT],
    price: 0.03,
  },
  {
    title: "Stratos",
    url: "https://stratosnft.io/",
    description:
      "Discover, collect, and sell digital items on the leading NFT marketplace on Arbitrum.",
    image: "/stratos.jpeg",
    categories: [categories.MARKETPLACE],
    price: 0,
  },
  {
    title: "Arcane",
    url: "https://www.arcanemagic.net/",
    description:
      "An experimental DeFi-RPG from the depths of the universe. What do you seek, traveller?",
    image: "/ArcaneTitle.gif",
    categories: [categories.NFT],
    price: 0.05,
  },
  {
    title: "GM/GA/GN/WAGMI xNFT set",
    url: "https://docs.xtokenterminal.io/misc/gm-ga-gn-wagmi-nft-set",
    description:
      "say GM/GA/GN/WAGMI with xToken",
    image: "/xToken.png",
    categories: [categories.NFT, categories.DEFI],
    price: 0,
  }
];
