export interface IProject {
  id: ProjectID
  title: string,
  icon: 'web' | 'gamepad' | 'build',
  imgSrc: string,
  imgAlt: string,
  description: string,
}

export enum ProjectID {
  sintas,
  ghostie,
}

export const PROJECTS_CONST: Array<IProject> = [
  {
    id: ProjectID.sintas,
    title: 'Sinta\'s Clayworks',
    icon: 'web',
    imgSrc: 'sintas.png',
    imgAlt: 'Sintas Clayworks',
    description: 'Production E-commerce website. Used Angular, Express.js, and Stripe integration for card payments.',
  },
  {
    id: ProjectID.ghostie,
    title: 'Ghostie',
    icon: 'gamepad',
    imgSrc: 'ghostie.png',
    imgAlt: 'Ghostie game',
    description: 'Ranked 15th out of 87 entries in a game jam. Designed and built entirely in Unity and C#.',
  }
]
