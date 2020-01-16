export default {
  name: 'ben mcgarvey',
  title: 'software engineer',
  contacts: [
    {
      name: 'website',
      href: 'https://benmcgarvey.com',
      display: 'benmcgarvey.com'
    },
    {
      name: 'github',
      href: 'https://github.com/benmcgarvey',
      display: 'github.com/benmcgarvey'
    },
    {
      name: 'email',
      href: 'mailto:hello@benmcgarvey.com',
      display: 'hello@benmcgarvey.com'
    },
    {
      name: 'linkedin',
      href: 'https://linkedin.com/in/bmcgarvey',
      display: 'linkedin.com/in/bmcgarvey'
    },
    {
      name: 'phone',
      href: 'tel:+19177253106',
      display: '+1 917 725 3106'
    }
  ],
  experiences: [
    {
      src: 'sidekicker.png',
      href: 'https://sidekicker.com',
      title: 'Software Engineer',
      place: 'Sidekicker',
      location: 'Melbourne, Australia',
      from: '06/19',
      to: 'present',
      details: [
        'Full-stack engineer on a large, modern web application',
        'Agile development environment working closely with UX team and product manager',
        'Primarily working on the frontend where Sidekicker uses React 16, Redux, and Apollo GraphQL to build a responsive marketplace application'
      ]
    },
    {
      src: 'sidekicker.png',
      href: 'https://sidekicker.com',
      title: 'QA Engineer',
      place: 'Sidekicker',
      location: 'Melbourne, Australia',
      from: '06/18',
      to: '06/19',
      details: [
        'Designed and implemented a maintainable testing project from scratch utilising the Page Object Model',
        'Took existing regression test scripts written in plain english by QA Tester and produced reusable test scripts using the Cypress testing framework',
        "Integrated the tests into Sidekicker's CI/CD pipeline tool, Buildkite, using bash and docker-compose"
      ]
    },
    {
      src: 'sidekicker.png',
      href: 'https://sidekicker.com',
      title: 'Marketplace Coordinator',
      place: 'Sidekicker',
      location: 'Melbourne, Australia',
      from: '03/17',
      to: '06/18',
      details: [
        'Built a chrome extension to streamline BAU activities, increase efficiency and reduce user error',
        'Wrote and maintained MySQL/Python dashboards for key marketplace metrics'
      ]
    },
    {
      src: 'uom.png',
      href: 'https://www.unimelb.edu.au/',
      title: 'Emergency Management Data Administrator',
      place: 'University of Melbourne',
      location: 'Melbourne, Australia',
      from: '11/16',
      to: '03/17'
    },
    {
      src: 'bcdtravel.png',
      href: 'https://www.bcdtravel.com/',
      title: 'Corporate Travel Consultant',
      place: 'BCD Travel',
      location: 'Melbourne, Australia',
      from: '05/15',
      to: '11/16'
    },
    {
      src: 'statravel.png',
      href: 'https://www.statravel.com.au/',
      title: 'Store Manager',
      place: 'STA Travel',
      location: 'Melbourne, Australia',
      from: '04/13',
      to: '05/15'
    }
  ],
  education: [
    {
      src: 'uom.png',
      href:
        'https://study.unimelb.edu.au/find/courses/major/computing-and-software-systems/',
      title: 'B.Sc Software and Computer Systems',
      place: 'University of Melbourne',
      location: 'Melbourne, Australia',
      from: '06/16',
      to: '06/19',
      details: [
        'Object Oriented Software Design, Declarative Programming',
        'Algorithms & Data Structures, Database Design, Artificial Intelligence',
        'Machine Learning, Models of Computation',
        'Notable projects: Adversarial AI, Tower Defence Game (Unity/C#), Android Application'
      ]
    }
  ],
  note: {
    text:
      'Note: I am eligible to work in the U.S. on an E-3 visa, which is a two-year visa available only to Australians and which can be renewed indefinitely. The process to obtain the visa is straightforward and is summarized ',
    linkText: 'here',
    href:
      'https://static1.squarespace.com/static/5d24cbfb75f55e000100967f/t/5db43b192ca7a63a6d405c38/1572092697712/jonkarolczak.com+-+Summary+of+E-3+Visa+Process+for+Employers.pdf'
  },
  skills: [
    {
      name: 'proficient languages',
      list: ['Javascript', 'PHP', 'SQL', 'HTML', 'SCSS/CSS']
    },
    {
      name: 'studied languages',
      list: ['C', 'Java', 'Python', 'C#', 'Haskell']
    },
    {
      name: 'tools & frameworks',
      list: [
        'React 16',
        'GraphQL (Apollo)',
        'Cypress',
        'Laravel',
        'Svelte',
        'Buildkite'
      ]
    },
    {
      name: 'services',
      list: ['AWS (ECS, EC2, S3, RDS, IAM)', 'Docker', 'Git']
    },
    {
      name: 'practices',
      list: ['CI/CD', 'Agile', 'TDD', 'OOD']
    }
  ]
};
