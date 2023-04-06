import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
    solidity,
    canva,
    wordpress,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "BlockChain Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "UI/UX Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "WordPress",
      icon: wordpress,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Canva",
      icon: canva,
    },
  ];
    
  const projects = [
    {
      name: "Art Engine",
      description:
        "It is a A.I. Art Generative Engine which creates art by using multiple layer to generate N'th number of unique art pieces using canvas API & Node Js. ",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Node Js",
          color: "green-text-gradient",
        },
        {
          name: "Canvas API",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Smr777/CVSS-NFT-ART-ENGINE",
    },
    {
      name: "Solidity Smart Contract",
      description:
        "It is the Solidity code for devloping a simple ERC-721 NFT Smart Contract on Ethereum Mainnet through remix Compiler.",
      tags: [
        {
          name: "Solidity",
        },
        {
          name: "ERC-721 NFT SC",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Smr777/CVSS-Smart-Contract",
    },
    {
      name: "NFT Minting Dapp",
      description:
        "A 'Web 3' Web Application Which lets you Mint NFT from your MetaMask Wallets by connecting the Dapp to the Developed ERC-721 Smart Contract on Ethereum.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript/Node Js",
          color: "green-text-gradient",
        },
        {
          name: "CSS3",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Smr777/CVSS-MINTING-DAPP",
    },
  ];
  
  export { services, technologies, projects };