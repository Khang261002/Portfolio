import {
  // Services
  web,
  software,
  datasci,
  ml,
  // Technologies
  python,
  cpp,
  java,
  html,
  css,
  javascript,
  reactjs,
  threejs,
  tailwind,
  django,
  flask,
  sklearn,
  sql,
  mongodb,
  mysql,
  git,
  docker,
  // Works
  netapp,
  d_academy,
  vgf,
  // Projects
  carrent,
  jobit,
  tripguide,
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
    id: "tech",
    title: "Technologies",
  },
  {
    id: "project",
    title: "Project",
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
    title: "Software Developer",
    icon: software,
  },
  {
    title: "Data Scientist",
    icon: datasci,
  },
  {
    title: "Machine Learning Engineer",
    icon: ml,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Scikit Learn",
    icon: sklearn,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer in Test - Performance Benchmarking",
    company_name: "NetApp, Inc.",
    icon: netapp,
    iconBg: "#383E65",
    date: "Oct 2022 - Now",
    points: [
      "Designed and conducted testbeds with YML for controller firmware (CFW) testing on configurations",
      "Analyzed and interpreted data from hardware components",
      "Developed and optimized automation processes with a Database Web Interface using Django to read, verify, analyze data, and automatically run tests on many different configurations using pre-setup testbeds",
      "Managed performance benchmarking for various configurations with different Storage Controllers and different Protocols using tools like IO Meter, VDbench on a Database Web Interface",
      "Utilized tools such as Confluence, Jira, and Bitbucket for task tracking and management",
      "The engineering content of these responsibilities includes practical application of systems engineering principles, data analysis, and process optimization",
    ],
  },
  {
    title: "Science Private Tutor",
    company_name: "D-Academy, Vietnam",
    icon: d_academy,
    iconBg: "#383E56",
    date: "Sep 2020 - Jun 2021",
    points: [
      "Mathematics, Physics, and Chemistry to students preparing for graduation",
      "Deepened my own understanding of fundamentals of my personal education",
      "Used a combination of in-person, and remote learning",
      "Collaborated with educators, and students' parents to develop a tailored tutoring plan",
    ],
  },
  {
    title: "Aerobic Gymnastics Professional Athlete",
    company_name: "Vietnam Gymnastics Federation, Vietnam",
    icon: vgf,
    iconBg: "#383E56",
    date: "Jan 2006 - Feb 2017",
    points: [
      "Competed at national and international levels in Aerobic Gymnastics",
      "Achieved the first prize (gold medal) in a men's individual performance at the Asian Championship 2015",
      "Demonstrated exceptional discipline, dedication, and perseverance in training and competition",
      "Developed strong teamwork, time management, and goal-setting skills",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
