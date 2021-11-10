import { Project } from "./project";

export const categories = {
  NFT: "nft",
  GAMING: "gaming",
  DEFI: "defi",
  PONZI: "ponzi",
  MARKETPLACE: "marketplace",
};
export const allProjects: Project[] = [
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
    image: "/arbidudes.png",
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
    image: "/farmland.png",
    categories: [categories.NFT, categories.DEFI],
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
    description: "Footy Nouns are nouns who like football",
    image: "/footy.gif",
    categories: [categories.NFT],
    price: 0.05,
  },
  {
    title: "Random Walk NFT",
    url: "https://randomwalknft.com/",
    description: "A social experiment with generative NFTs",
    image: "/randomwalk.jpg",
    categories: [categories.NFT],
    price: "Variable",
  },
];
