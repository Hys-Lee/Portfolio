export interface projectContent {
  name: string;
  goal: string;
  feature: string[];
  techstack: string[];
  url: string[];
}

export const makenotionContent: projectContent = {
  name: 'MakeNotion',
  goal: 'Tried to struct contructures and handling states from them with practicing css by mocking notion "newpage"',
  feature: [
    'Resonsive header contents',
    'Interactive sidebar motion with click and hovering',
  ],
  techstack: [`Create React App`, 'React', 'Styled-Components', 'AWS'],
  url: [
    'http://hys-lee-toy-pojects.net',
    'https://github.com/Hys-Lee/make_notion',
  ],
};
export const investrecordContent: projectContent = {
  name: 'InvestRecord',
  goal: 'Tried to use RESTful api with backend part in this team project with mobile first design',
  feature: [
    'Routing to feature-related pages',
    'Summary for total or each profit/loss',
    'Realtime stock charts',
    'Current exchange rate for won/dollor',
    'Edit page for recording personal trades',
  ],
  techstack: [
    `Vite`,
    'React',
    'Tailwindcss',
    'Nodejs',
    'Typescript',
    'Firebase',
  ],
  url: ['https://github.com/Hys-Lee/invest-records'],
};
export const taskcheckerContent: projectContent = {
  name: 'TaskChecker',
  goal: 'Practice for whole process from UI design with figma to deployment with AWS connecting to API server and DB',
  feature: [
    'Distributing tasks by multi-level folder structure',
    'Self-inspecting failures',
    'Statistics for specific tasks',
  ],
  techstack: [
    `Vite`,
    'React',
    'Taiwindcss',
    'Nextjs',
    'Redux',
    'Typescript',
    'GraphQL',
  ],
  url: [],
};
