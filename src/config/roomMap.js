export const roomMap = {
  landing: {
    up: 'about',
    down: 'contact',
    right: 'blog',
    left: 'projects',
  },
  about: {
    down: 'landing',
  },
  projects: {
    right: 'landing',
  },
  contact: {
    up: 'landing',
  },
  blog: {
    left: 'landing',
  },
}
