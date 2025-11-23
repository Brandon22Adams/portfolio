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
  breakOut,
  froge,
  glitchWar,
  toolBelt
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
  },
  {
    id: ProjectID.toolBelt,
    title: 'Stardew ToolBelt Mod',
    icon: 'build',
    imgSrc: 'placeholder.svg',
    imgAlt: 'ToolBelt Mod',
    description: 'Created c# mod for StardewValley with more than 6,770 unique downloads',
  },
    {
    id: ProjectID.froge,
    title: 'Froge',
    icon: 'gamepad',
    imgSrc: 'placeholder.svg',
    imgAlt: 'Froge',
    description: 'Ranked #28th for enjoyment out of 287 entries in a game jam. Built in Unity and C# in 3 days',
  },
    {
    id: ProjectID.glitchWar,
    title: 'Glitch War',
    icon: 'gamepad',
    imgSrc: 'placeholder.svg',
    imgAlt: 'Glitch war',
    description: 'Built in Unity and c# released on Steam. Successfully funded on Kickstarter.',
  },
    {
    id: ProjectID.breakOut,
    title: 'Break Out',
    icon: 'gamepad',
    imgSrc: 'placeholder.svg',
    imgAlt: 'Breakout',
    description: 'C# and Unity learning projects that I build for my dad.',
  },
]
