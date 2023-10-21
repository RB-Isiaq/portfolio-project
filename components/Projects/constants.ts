import { IProject } from '@/interfaces';

export const projectTimeline: IProject[] = [
  {
    id: 1,
    title: 'HelpMeOut',
    description:
      'Seamless screen recording for all. Record effortlessly, without the need for technical know-how. Assist your friends and family by producing and sharing videos demonstrating how to accomplish tasks on a website. Click on install to get started.',
    imgPath: '/help-me-out.png',
    github: 'https://github.com/RB-Isiaq/helpMeOut',
    live: 'https://help-me-out-alpha.vercel.app/',
  },
  {
    id: 2,
    title: 'Movie Box',
    description:
      'Immerse into the World of Entertainment with the top rated Movies and TV Shows, Trailers, and More, Unlock the World of Entertainment and Dive into the Ultimate Cinematic Experience',
    imgPath: '/movies.png',
    github: 'https://github.com/RB-Isiaq/movieDiscoveryApp',
    live: 'https://movie-discovery-app-pied.vercel.app/',
  },
  {
    id: 3,
    title: 'Task Tracker',
    description:
      'A MERN stack application that allows users to easily manage tasks, deadlines, and progress all in one place. With our intuitive interface, you can create, edit, and prioritize tasks effortlessly.',
    imgPath: '/task-tracker.png',
    github: 'https://github.com/RB-Isiaq/task-tracker-fe',
    live: 'https://task-tracker-fe-self.vercel.app/',
  },
  {
    id: 4,
    title: 'Gallery',
    description:
      'Experience the Art of Effortless Image Curation: A stunning platform where you can effortlessly curate your image collection through intuitive drag-and-drop interactions.',
    imgPath: '/gallery.png',
    github: 'https://github.com/RB-Isiaq/gallery',
    live: 'https://gallery-rb-isiaq.vercel.app/',
  },
  {
    id: 5,
    title: 'Fashionique',
    description:
      'A unique e-commerce web app showcasing wide varieties of fashions spanning accross different categories, ranging from women to men fashion accesor.',
    imgPath: '/fashioniq.png',
    github: 'https://github.com/RB-Isiaq/fashionique-',
    live: 'https://fashionique.vercel.app/',
  },
  {
    id: 6,
    title: 'Hoobank',
    description:
      'A mobile responsive landing page created with Nextjs, styled with tailwindcss and animated with framer motion.',
    imgPath: '/hoobank.png',
    github: 'https://github.com/RB-Isiaq/Hoobank',
    live: 'https://bank-web-page.vercel.app/',
  },
];

export const TestId = {
  PROJECTS_ID: 'projects_id',
  PROJECTS_CONTAINER_ID: 'project_container_id',
  PROJECT_ID: 'project_id',
};
