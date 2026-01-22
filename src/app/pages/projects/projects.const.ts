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
  toolPouch,
  hytale
}

export const PROJECTS_CONST: Array<IProject> = [
  {
    id: ProjectID.hytale,
    title: 'Hytale Mods',
    icon: 'build',
    imgSrc: 'hytale/biome.png',
    imgAlt: 'Hytale mods',
    description: 'Assortment of mods made for Hytale, ranging from new models, new biomes, and much more to come!',
  },
  {
    id: ProjectID.ghostie,
    title: 'Ghostie',
    icon: 'gamepad',
    imgSrc: 'ghostie/ghostie.png',
    imgAlt: 'Ghostie game',
    description: 'Ranked 15th out of 87 in a game jam. Fully designed and built in Unity and C#.',
  },
  {
    id: ProjectID.toolPouch,
    title: 'Stardew ToolPouch Mod',
    icon: 'build',
    imgSrc: 'toolPouch/toolpouch.png',
    imgAlt: 'ToolPouch Mod',
    description: 'C# mod for Stardew Valley with 6,700+ downloads and inspired community expansions.',
  },
  {
    id: ProjectID.sintas,
    title: 'Sinta\'s Clayworks',
    icon: 'web',
    imgSrc: 'sintas/sintas.png',
    imgAlt: 'Sintas Clayworks',
    description: 'Production e-commerce site built with Angular, Express.js, MongoDB, and Stripe payments.',
  },
    {
    id: ProjectID.froge,
    title: 'Froge',
    icon: 'gamepad',
    imgSrc: 'froge/coverArt.png',
    imgAlt: 'Froge',
    description: 'Ranked 28th out of 287 for enjoyment in a 3-day game jam. Built in Unity and C#.',
  },
    {
    id: ProjectID.glitchWar,
    title: 'Glitch War',
    icon: 'gamepad',
    imgSrc: 'glitchWar/title.png',
    imgAlt: 'Glitch war',
    description: 'Commercial Unity/C# game on Steam. Successfully funded Kickstarter and live for purchase.',
  },
    {
    id: ProjectID.breakOut,
    title: 'Break Out',
    icon: 'gamepad',
    imgSrc: 'breakOut/level.png',
    imgAlt: 'Breakout',
    description: 'C# and Unity learning project, iterated multiple versions to master gameplay systems.',
  },
]
