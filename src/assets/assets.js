import {  FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import brightMatterImg from '../assets/Brigthmatter.png'
import brightImg from '../assets/bright.png'
import profileImg from '../assets/profile.avif';
import project2Img from '../assets/project2.avif';
import project1Img from '../assets/project1.avif';
import project3Img from '../assets/project3.avif';
import project4Img from '../assets/project4.avif';
import project5Img from '../assets/project5.avif';
import project6Img from '../assets/project6.avif';
import project7Img from '../assets/project7.avif';
import { FiCpu, FiLayers, FiMonitor, FiSettings, FiSmartphone } from 'react-icons/fi';





export const assets = {
    brightMatterImg,
    brightImg,
    profileImg,
    project1Img,
    project2Img,
    project3Img,
    project4Img,
    project5Img,
    project6Img,
    project7Img,
}

export const navItems = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export const socialPlatforms = [
    { icon: FaTwitter, href: '#' },
    { icon: FaGithub, href: 'https://github.com/Prateek-9258' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/prateek-saini-bb2b49400/' },
    {icon: FaInstagram, href: '#'}
];

export const projects = [ 
   
    {
        id: 1,
        title: "Weather App",
        description: "A digital tool designed to provide real-time atmospheric data, daily forecasts, and localized climate conditions ",
        category: "Frontend Dev",
        color: "secondary",
        image:project4Img,
        link: 'https://weather-api-010.netlify.app/',
        youtube: '#'
    },
     {
        id: 2,
        title: "Travling Website",
        description: "Our recent trip was nothing short of magical! From the moment we booked, everything was perfectly organized — smooth transportation, comfortable stays, and breathtaking destinations.   ",
        category: "Destinations",
        color: "secondary",
        image:project5Img,
        link: 'https://travling-website-0316.netlify.app/',
        youtube: '#'
    },
       
    {
        id: 3,
        title: "TO-DO List",
        description: "A curated list of tasks, errands or projects that need to be completed. ",
        category: "Schedule",
        color: "secondary",
        image:project2Img,
        link: 'https://to-do-list-4472.netlify.app/',
        youtube: '#'
    },
    
    {
        id: 5,
        title: "E-commerce Redesign",
        description: "The buying and selling of goods and services through the internet. ",
        category: "WEB APP",
        color: "primary",
        image: project1Img,
        link: 'https://brightmatter.vercel.app/',
        youtube: '#'
    },
   
    {
        id: 6,
        title: "CloudFlow Platform",
        description: "Generated 1,200+ qualified leads through content marketing.",
        category: "Digitial-Agency",
        color: "primary",
        image: project6Img,
        link: '#',
        youtube: '#'
    },
     {
        id: 7,
        title: "Web Development",
        description: "Web Development, frontend and backend",
        category: "WEB APP",
        color: "primary",
        image: project7Img,
        link: '#',
        youtube: '#'
    },
];

export const skills = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "User research, wireframing, prototyping, interaction design",
      icon: FiMonitor,
    },
    {
      id: 2,
      title: "Frontend Dev",
      description: "React, Vue, Next.js, Tailwind, GSAP, Three.js",
      icon: FiCpu,
    },
    {
      id: 3,
      title: "Backend Dev",
      description: "Node.js, Express, MongoDB, GraphQL, Firebase",
      icon: FiLayers ,
    },
    {
      id: 4,
      title: "Mobile Dev",
      description: "React Native, Flutter, SwiftUI, Kotlin",
      icon: FiSmartphone ,
    },
    {
      id: 5,
      title: "DevOps",
      description: "Docker, AWS, CI/CD, Serverless, Microservices",
      icon: FiSettings,
    },
  ];