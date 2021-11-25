import { constantsHelper } from "./"

const navigationActions = [
  { type: 'command', label: 'readme' },
  { type: 'command', label: 'projects' },
  // { type: 'command', label: 'logs' },
  // { type: 'command', label: 'games' },
  { type: 'command', label: 'resume' },
  { type: 'command', label: 'linkedin' },
  { type: 'command', label: 'email' }
]
export default {
  readme: {
    content: `
      Hi there, I’ve built this for you to get to know me a bit better. It’s tap and click friendly but the best way to enter my world is by typing the commands.
    `,
    actions: navigationActions
  },
  projects: {
    content: `
      I’ve had the privilege to build software that I am proud of. Here are my favorites.
    `,
    actions: [
      { type: 'command', label: 'bthv (Bahamas Travel Health Visa)' },
      { type: 'command', label: 'rapidbahamas' },
      { type: 'command', label: 'bodhi' },
      { type: 'command', label: 'gitrerere' },
      { type: 'command', label: 'trade' },
      { type: 'command', label: 'floorways' },
      { type: 'command', label: 'scorbot' },
      { type: 'command', label: 'roundtheclock' },
      { type: 'command', label: 'epilife' }
    ]
  },
  logs: {
    content: `
      I put my thoughts to keyboard whenever I cross important milestones or overcome tough challenges.
    `,
    actions: [
      { type: 'command', label: 'intocode' },
      { type: 'command', label: 'materscratchcamp' },
      { type: 'command', label: 'mdcshpe' },
      { type: 'command', label: 'codeforcovid' },
      { type: 'command', label: 'goingremote' },
      { type: 'command', label: 'deramping' }
    ]
  },
  games: {
    content: `
      Building games was my first love in software and I’ve put together some for your entertainment.
    `,
    actions: [
      { type: 'command', label: 'arewestrangers' },
      { type: 'command', label: 'hilo' },
      { type: 'command', label: 'twentyone' }
    ]
  },
  // contact: {
  //   content: `
  //     I’m always open to talk about software or find new ways to make an impact with code. Here are a few ways we can get in touch.
  //   `,
  //   actions: [
  //     { type: 'link', label: 'email', url: constantsHelper.emailURL },
  //     { type: 'link', label: 'linkedin', url: constantsHelper.linkedinURL }
  //   ]
  // },
  email: {
    content: `
      Open mail app
    `,
    link: constantsHelper.emailURL
  },
  linkedin: {
    content: `
      Go to LinkedIn profile
    `,
    link: constantsHelper.linkedinURL
  },
  resume: {
    content: `
      Download resume
    `,
    link: constantsHelper.resumeURL
  },
}