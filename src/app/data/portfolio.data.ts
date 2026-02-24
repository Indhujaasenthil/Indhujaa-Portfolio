// Interface definitions
export interface Skill {
  name: string;
  icon: string;
  color?: string;
}

export interface Experience {
  company: string;
  logo: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  color: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Skills data
export const skills: Skill[] = [
  { name: 'Github', icon: '🐙' },
  { name: 'Gitlab', icon: '🦊' },
  { name: 'NPM', icon: '📦' },
  { name: 'Node JS', icon: '📗' },
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'Bootstrap', icon: 'B' },
  { name: 'Jquery', icon: '$' },
  { name: 'Javascript', icon: 'JS' },
  { name: 'Typescript', icon: 'TS' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'AngularJS', icon: '🅰️' },
  { name: 'Jest', icon: '🃏' },

  // { name: 'React Native', icon: '⚛️' },
  // { name: 'React.js', icon: '⚛️' },
  // { name: 'Next.JS', icon: 'N' },
  // { name: 'Redux', icon: '🔄' },
  // { name: 'Ionic', icon: '⚡' },
  // { name: 'GraphQL', icon: '◈' },
  // { name: 'Axios', icon: '📡' },
  // { name: 'Realm', icon: '🗄️' },
  // { name: 'iOS', icon: '🍎' },
  // { name: 'Android', icon: '🤖' },
  // { name: 'Objective C', icon: '📱' },
  // { name: 'XCode', icon: '⚒️' },
  // { name: 'Android Studio', icon: '🔧' },
  // { name: 'Firebase', icon: '🔥' },
  // { name: 'AWS', icon: '☁️' },
  // { name: 'Filezilla', icon: '📁' },
  // { name: 'Bash', icon: '💻' },
  // { name: 'Gulp', icon: '🥤' },
  // { name: 'Babel', icon: '🗼' },
  // { name: 'Bitbucket', icon: '🪣' },
  // { name: 'Sourcetree', icon: '🌳' },
  // { name: 'Trello', icon: '📋' },
  // { name: 'JIRA', icon: '📊' },
  // { name: 'Heroku', icon: '🟣' },
  // { name: 'Vercel', icon: '▲' },

];

// Experience data
export const experiences: Experience[] = [
  {
    company: 'GoodBooks Technologies',
    logo: 'GB',
    position: 'Programmer',
    duration: 'Present',
    description: [
      'Developed and optimized Angular applications, improving scalability and performance.',
      'Created reusable Web Components in Angular for cross-framework compatibility.',
      'Utilized Angular Material and D3.js to create responsive, user-friendly interfaces.',
      'Implemented Angular unit testing using Jest to ensure high code quality.',
      'Implemented AG Grid and SlickGrid for dynamic, grid-based data management.'
    ],
    technologies: [ 'Angular', 'REST API', 'D3.js', 'AG Grid', 'Jest'],
    color: '#ff4757'
  },
  {
    company: 'GoodBooks Technologies',
    logo: 'TP',
    position: 'Trainee Programmer',
    duration: 'Aug 2023  - Jan 2024',
    description: [
      'Developed intuitive and responsive UI components for the HRMS module.',
      'Collaborated with backend developers to integrate REST APIs.',
      'Conducted user testing and incorporated feedback to optimize usability.'
    ],
    technologies: ['HTML', 'SCSS', 'TypeScript', 'JavaScript', 'Reactive Forms', 'Angular', 'REST API'],
    color: '#26de81'
  },
  {
    company: 'Barathidasan University',
    logo: 'MCA',
    position: 'Master of Computer Applications',
    duration: '2021 - 2023',
    description: [
      'Graduated with CGPA: 9.1 from Government Arts College.',
      'Successfully upgraded Angular app from version 11 to 19.',
      'Built dynamic dashboards using AG Grid and D3.js.',
      'Integrated Google Maps API for location-based features.'
    ],
    technologies: [ 'HTML', 'CSS', 'JavaScript','Angular', 'SQL'],
    color: '#4a9eff'
  }
];

// Projects data
export const projects: Project[] = [
  {
    title: 'CAI Module',
    description: 'Developed CAI module for Tech Mahindra client with features including OTF entry, Finance entry, and Insurance entry. Built responsive Angular components with real-time data management.',
    technologies: ['Angular', 'TypeScript', 'AG Grid', 'REST API'],
    icon: '💼',
    link: ''
  },
  {
    title: 'Security Module',
    description: 'Developed Security module for Messer client with Contact management and Address management features. Implemented secure data handling and user access controls.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
    icon: '🔐',
    link: ''
  },
  {
    title: 'ESS & HRMS Module',
    description: 'Built Employee Self Service and HRMS module for Roots client. Features include Leave management, Permission, On-duty, Adjustment entry, and Punch management.',
    technologies: ['Angular', 'TypeScript', 'AG Grid', 'D3.js', 'REST API'],
    icon: '👥',
    link: ''
  },
  {
    title: 'Recruitment Module',
    description: 'Developed Recruitment module for CKB, ISMAT, and Lakshmigraha clients. Features include Job Opening, Man Power Request, and Selection Process management.',
    technologies: ['Angular', 'TypeScript', 'Reactive Forms', 'REST API'],
    icon: '🎯',
    link: ''
  },
  {
    title: 'Training Module',
    description: 'Currently developing Training module with features including Training Program management, Training Need analysis, Course Authoring, and Training Session scheduling.',
    technologies: ['Angular', 'TypeScript', 'AG Grid', 'HTML', 'SCSS'],
    icon: '📚',
    link: ''
  }
];

// Social links data
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/anujraghuvanshi',
    icon: 'github'
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/anujraghuvanshi',
    icon: 'stackoverflow'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/anujraghuvanshi/',
    icon: 'linkedin'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/anujraghuvanshi/',
    icon: 'instagram'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/anujraghuvanshi',
    icon: 'twitter'
  }
];

// About me data
export const aboutMe = {
  name: 'Indhujaa',
  emoji: '😊',
  title: 'Software Developer',
  location: 'COIMBATORE, India',
  education: {
    degree: 'MCA',
    university: 'Barathidasan University'
  },
  description: [
    "Hey! I'm a software engineer with a focus on Web Development along with having knowledge of full-stack development. I am passionate about learning new things from new people.",
    "I have done MCA from Barathidasan University.",
    "I work with  HTML,Scss, javascript,TypeScript, Angular",
    "I love solving problems.",
    "Since 2023 - I've spent my time seeking and learning new technologies in Web App Development. This has led to me working on some amazing world-class projects, worked at some amazing places, and worked with some great people."
  ]
};