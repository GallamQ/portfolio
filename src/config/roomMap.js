export const roomMap = {
  landing: {
    up: 'about',
    down: 'projects',
    right: 'contact',
    left: 'blog'
  },
  about: {
    down: 'landing'
  },
  projects: {
    up: 'landing'
  },
  contact: {
    left: 'landing'
  },
  blog: {
    right: 'landing'
  }
}
