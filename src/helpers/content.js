import constantsHelper from "./constants"

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
    info: {
      text: [`
        Hi there, I’ve built this for you to get to know me a bit better. It’s tap and click friendly but the funnest way to interact with it is by typing the commands.
        `, `
        If you want to learn more about this project, use the command: terminal
      `],
    },
    actions: navigationActions
  },
  projects: {
    info: {
      text: [`
        Over the last 5 years of being a software developer, I have enjoyed building software that I am proud of and these are my favorites.
      `],
    },
    actions: [
      { type: 'command', label: 'bodhi' },
      { type: 'command', label: 'bahamastravelhealthvisa' },
      { type: 'command', label: 'rapidbahamas' },
      { type: 'command', label: 'bahamastogether' },
      { type: 'command', label: 'floorways' },
      { type: 'command', label: 'terminal' }
    ]
  },
  logs: {
    info: {
      text: [`
        I put my thoughts to keyboard whenever I cross important milestones or overcome tough challenges.
      `]
    },
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
    info: {
      text: [`
        Building games was my first love in software and I’ve put together some for your entertainment.
      `]
    },
    actions: [
      { type: 'command', label: 'arewestrangers' },
      { type: 'command', label: 'hilo' },
      { type: 'command', label: 'twentyone' }
    ]
  },
  email: {
    link: {
      url: constantsHelper.emailURL,
      text: 'Click here to open your mail application with my e-mail address',
      autoOpen: true
    }
  },
  linkedin: {
    link: {
      url: constantsHelper.linkedinURL,
      text: 'Click here to go to my LinkedIn profile',
      autoOpen: true
    }
  },
  resume: {
    link: {
      url: constantsHelper.resumeURL,
      text: 'Click here to view and download resume from Dropbox',
      autoOpen: true
    }
  },
  bahamastravelhealthvisa: {
    info: {
      title: 'Bahamas Travel Health Visa',
      text: [`
        I built the Bahamas Travel Health Visa web platform in 20 days for the Ministry of Health & Tourism to open its borders to over 125,000 monthly travelers while abiding by the country’s health guidelines since November 1st, 2020.
      `, `
        The platform included a traveler website where domestic and international travelers would submit trip applications with proof of their negative PCR test, pay for their trip fees using KanooPays.com, receive notifications to make sure they abided by the country's health guidelines and receive travel insurance if they qualified.
        Additionally, I built an administrator dashboard for the Ministry of Tourism & Health to screen applications, manage traveler accounts, link Rapid Antigen tests performed on the island by medical professionals to traveler's trips and generate analytics and reports.
      `, `
        The system was built on a microservice architecture which I designed using MongoDB, Express, React and NodeJS orchestrated with Docker Compose and deployed on Cloud Carib's Ubuntu virtual machines.
      `],
      dateRange: 'Built and maintained from October 2020 to October 2021',
    },
    link: {
      url: constantsHelper.bthvURL,
      text: 'Click here to view the live application',
      autoOpen: false
    }
  },
  rapidbahamas: {
    info: {
      title: 'RAPID Bahamas',
      text: [`
        With the country's tourism grinding to a hault during the worldwide COVID-19 outbreak of Spring 2020, I implemented a digital rapid response with the Bahamas Feeding Network to help delivery food aid to over 150,000 Bahamians (over 40% of the population of The Bahamas).
      `, `
        I built an online registration website where those in need would submit aid requests and an administrator dashboard to validate and monitor the distributed resources per island for all the non-profit organizations.
      `, `
        The system was built on a microservice architecture which I designed using MongoDB, Express, React and NodeJS orchestrated with Docker Compose and deployed on Cloud Carib's Ubuntu virtual machines.
      `],
      dateRange: 'Built and maintained from May 2020 to October 2021',
    },
    link: {
      url: constantsHelper.rapidURL,
      text: 'The live application is no longer available to the public but click here to view the Instragram page to learn more',
      autoOpen: false
    }
  },
  bahamastogether: {
    info: {
      title: 'Bahamas Together',
      text: [`
        During the peak of the COVID-19 outbreak of March 2020, I built a COVID-19 health screening application in 7 days for the people of Bahamas to identify outbreak hotspots and assist the Ministry of Health identify areas where testing centers would be most effective on the island with over 10,000 weekly submissions.
      `],
      dateRange: 'Built from March 2020 to April 2020',
    },
    link: {
      url: constantsHelper.bahamastogetherURL,
      text: 'The live application is no longer available to the public but click here to view the Instragram page to learn more',
      autoOpen: false
    }
  },
  bodhi: {
    info: {
      title: 'Bodhi | Building intelligence',
      text: [`
        Bodhi is a cloud-based building management platform that centrally monitors, schedules and controls all of the technology on your property from a single interface — from audio, video, lighting, and climate to water and electrical metering.
      `, `
        I joined the team in July 2017 to take major ownership of Bodhi's version 2 design and development that would allow it to scale on the cloud with an event-driven, micro service architecture using MongoDB, Express, React and NodeJS all orchestrated with Docker Compose.
        I also led the development of the real-time messaging system with various equipment including Crestron, Lutron, our own Bodhi Bridge and third-party APIs over REST, Redis, WebSockets, TCP and MQTT channels.
      `, `
        In the last year of my time at Think Simple, I hired and managed the team that grew to 4 developers to deliver new features and improvements for the business team with weekly Agile Sprints meeting quarterly milestones.
      `, `
        Additionally, I maintained sales relationships with the Latin American market by presenting to dealers and their clients on the features of Bodhi.
      `, `
        The system was deployed to over 20 active hotels, residential properties and office buildings in Florida, New York and the Bahamas and continues to grow today.
      `],
      dateRange: 'Built and maintained July 2017 from October 2021',
    },
    link: {
      url: constantsHelper.bodhiURL,
      text: 'Click here to view the marketing website and learn more',
      autoOpen: false
    }
  },
  floorways: {
    info: {
      title: 'Floorways',
      text: [`
        I developed an online floor plan manager for a major technology provider in the Florida school system that integrates with digital signage/displays in high-risk buildings to allow security personnel to message and direct the crowd through a web application.
      `, `
        The system was built on a microservice architecture which I designed using MongoDB, Express, React and NodeJS orchestrated with Docker Compose and able to be deployed to local Windows Server machines on a district's network.
      `],
      dateRange: 'Built from November 2018 and December 2019'
    }
  },
  scorbot: {
    info: {
      title: 'Scorbot 2.0',
      text: [`
        ScorBot handles junior basketball tournaments and leagues from start to finish—building match-ups, schedules and brackets.
      `, `
        I currently consult the software team on migrating their tech stack to a micro-service architecture that will handle continuous integration/delivery, scalability with the cloud and deliver on a new set of features that will improve business and expand to any sport.
      `],
      dateRange: 'April 2021 - Present',
    },
    link: {
      url: constantsHelper.scorbotURL,
      text: 'Click here to view the live application',
      autoOpen: false
    }
  },
  terminal: {
    info: {
      title: 'Terminal',
      text: [`
        Fresh out of my job at Think Simple, I was a bit overwhelmed from working on objective-only projects. So I decided to change things up and build a fun place where you can get to know me more.
      `, `
        I hope to grow this page to include blogs about my challenges I have overcome for the community and even build some mini-games for your entertainment.
      `, `
        This website was built on a newfound frontend library called VueJS and it was a joy learning how other libraries handle state management on the client-side.
      `],
      dateRange: 'Created on November 2021',
    }
  }
}