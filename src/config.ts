import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Vishal Thangakumar",
  logo: "/demo-1.jpg",
  email: "vishalthangakumar@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/vishal-thangakumar-84b041220",
    icon: "mdi:linkedin",
  },
  {
    title: "GitHub",
    url: "https://github.com/AI-vish",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "vishalthangakumar@gmail.com",
    icon: "mdi:gmail",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Vishal Thangakumar",
    description:
      "Full time student from India, who's figuring things out. I'm on the job market this quarter!",
    image: identity.logo,
  },
  role: "Computer and Communications Engineer- Welcome to my space of the internet...Btw, this site is still being built. Do come back later",
  description:
    "I'm Vishal Thangakumar, a full time student from India, who's figuring things out. I'm on the job market this quarter!",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects", 
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Vishal Thangakumar",
    description:
      "Full time student from India, constantly learning new stuff both in tech and outside it.",
    image: identity.logo,
  },
  subtitle: "Here's me",
  about: {
    description: `
I'm Vishal Thangakumar, I am a passionate Computer and Communications undergraduate student eager to learn new technologies. Currently enhancing my tech stack. Applying my skills to solve real world problems that come with evolving tech. Here's my fav quote: Until death, all defeat is psychological`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `Have a look at my work, which I believe are some cool things.`, // Markdown is supported
    items: [
      {
        title: "ML- ransomeware",
        company: {
          name: "Binaryvish",
          image: "/logo.webp",
          url: "https://github.com/AI-vish",
        },
        date: "2024-25",
      },
      {
        title: "Image Steganography",
        company: {
          name: "Binaryvish",
          image: "/logo.webp",
          url: "https://github.com/AI-vish",
        },
        date: "2024-25",
      },
    ],
  },
  connect: {
    description: `Take a look at my socials below and feel free to get in touch to chat or collaborate. I'll be happy to chat :)`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Vishal Thangakumar",
    description: "It is ordinary to like the beautiful but it's beautiful to like the ordinary",
    image: identity.logo,
  },
  subtitle: "Check this out. (Kindly give Vishal some time to finish constructing this website)",
  projects: [
    {
      title: "Project- Under construction",
      description: "Kindly give Vishal some time to finish constructing this website",
      image: "/demo-2.jpg",
      year: "2025",
      url: "https://github.com/AI-vish",
    },
    {
      title: "Project-2",
      description: "Something I heard Chris Williamson say in one of his podcasts: You've already acheived goals you said...would make you happy, how can you presume that your happiness sits on the next side of the nextx set of goals, given that right now you're on the other side of your last set of goals",
      image: "/demo-2.jpg",
      year: "2025",
      url: "https://github.com/AI-vish",
    },
    {
      title: "Project 1",
      description: "Project- Under construction",
      image: "/demo-2.jpg",
      year: "2025",
      url: "https://github.com/AI-vish",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Vishal Thangakumar",
    description: "In -progress",
    image: identity.logo,
  },
  subtitle: "Magic in small moments",
};
