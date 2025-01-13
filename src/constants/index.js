import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs2,
  git,
  python,
  energy1,
  ai1,
  webdev1,
  security1,
  brain,
  threejswp,
  reactandthreewp,
  threejs2,
  vuejs,
  firebase,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Open Source Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI / Machine Learning Developer",
    icon: brain,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "nodejs2",
    icon: nodejs2,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "threejs2",
    icon: threejs2,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },
];

const experiences = [
  {
    title: "Web Developer",
    icon: webdev1,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Node.js,  Vue.js, and Javascript.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed an interactive product configurator using Three.js to allow users to customize and visualize products in real-time.",
    ],
  },
  {
    title: "Created a 2D Game",
    icon: ai1,
    iconBg: "#383E56",
    date: " Dec 2022",
    points: [
      "Worked on a university project of creating a 2D game like mario where a player goes through obsticals to reach the finish line.",
      "created single player game as a solo project.",
      "Developed the Game using Brackets and moved to visual studions with js language.",
    ],
  },

  {
    title: "Certificate",
    company_name: "Stanmore College",
    icon: security1,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Sept 2021",
    points: [
      "Achieved D*D*D* highest grades possible.",
      "Was part of multiple solo and group projects.",
      "My first venture into web development and coding.",
    ],
  },
];

const testimonials = [
  {
  },
];

const projects = [
  {
    name: "Fully Responsive Movie recommendation website",
    description:
      "I recently coded a fully responsive website for a university project for movie recommendation where users can search any moive they would like to watch and people could also leave a review on the movies they search for and see others reviews as well. ",
    tags: [
      {
        name: "javascript",
        color: "",
      },
      {
        name: "CSS",
        color: "purple-text-gradient",
      },
      {
        name: "HTML",
        color: "purple-text-gradient",
      },
    ],
    image: threejswp,
    source_code_link: "#",
  },
  {
    name: "Plan it",
    description:
      "I was part of a group project where we were created a shared calendar application which was available on multiple platforms. A unique feature from the calendar application was that it could be shared with friends and family ",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      
    ],
    image: "src/assets/planit.png",
    source_code_link: "#",
  },
  {
    name: "Berties books",
    description:
      "Berties books is a book website that i created as yet another university project and where bookes were added to a database by people who read them and gave a short review ",
    tags: [
      {
        name: "javascript",
        color: "",
      },
      {
        name: "CSS",
        color: "purple-text-gradient",
      },
      {
        name: "HTML",
        color: "purple-text-gradient",
      },
    ],
    image: "src/assets/books.png",
    source_code_link: "#",
  },
  {
    name: "Programming Game",
    description:
      "Created a game using brackets at first and then eventually moved to visual studios for a university project. The game was inspired from mario the game where users had to clear obsticals and reach the finish line. The game was purely created using shapes with js.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: "src/assets/game project.png",
    source_code_link: "#",
  },
  {
    name: "Website Development",
    description:
      "developed a website on skydiving showing my skills on html and css the aim was to create a website on my hobbies and so i decided to create a website on some that I really love to do",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: "src/assets/skydive website.png",
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
