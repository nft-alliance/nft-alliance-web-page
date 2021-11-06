import { Project } from "./project";

export const categories = {
    NFT: 'nft',
    DEFI: 'defi',
    PONZI: 'ponzi',
}
export const allProjects: Project[] = [{
    title: 'CastleDAO',
    url: 'https://castledao.com',
    description: 'A castle is a key to the CastleVerse. 10k Castles, 10k Generals, Fight and Earn',
    image: '',
    categories: [categories.NFT],
    price: 0,
}, {
    title: 'SacredCreatures',
    url: 'https://sacredcreatures.xyz',
    description: '10k unique sacred creatures',
    image: '',
    categories: [categories.NFT],
    price: 0,
}, {
    title: 'RealmDAO',
    url: 'https://www.rlm.land/',
    description: 'Collect, build, explore, trade and fight your way to victory',
    image: '',
    categories: [categories.NFT],
    price: 0,
}, {
    title: 'The Bunny Gang',
    url: 'https://www.bunnygang.art/',
    description: 'Limited 1332 unique avatar collection. The full Metaverse experience on Arbitrum. Join one of the 4 gangs and start fighting for your territory.',
    image: '',
    categories: [categories.NFT],
    price: 0.077
}, {
    title: 'Arbibots',
    url: 'https://arbibots.xyz/',
    description: 'Generated and rendered entirely on chain!! No centralized server, IPFS or Arweave!',
    image: '',
    categories: [categories.NFT],
    price: -1
}, {
    title: 'Arbidudes',
    url: 'https://arbidudes.xyz/',
    description: 'Sexy motherfuckers',
    image: '',
    categories: [categories.NFT],
    price: 0,
}, {
    title: 'YayBears',
    url: 'https://www.yaybears.com/',
    description: 'What if Kanye West was a Bear?',
    image: '',
    categories: [categories.NFT],
    price: 0.05
}, {
    title: 'Yabbie Dabbies',
    url: 'https://yabbiedabbies.com/',
    description: 'Adopt and protect Yabbies and Dabbies from the villain Whale',
    image: '',
    categories: [categories.NFT],
    price: 0,
}, {
    title: 'Grand Fantasy',
    url: 'https://grandfantasy.io/',
    description: '10K random basketball NFTs',
    image: '',
    categories: [categories.NFT],
    price: 0
}, {
    title: 'FarmLand',
    url: 'https://farmland-game.github.io/',
    description: 'Farming all the way with your NFTs',
    image: '',
    categories: [categories.NFT, categories.DEFI],
    price: 0
}]