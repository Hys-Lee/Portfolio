export interface studyingInterface {
  title: string;
  goal: string;
  refer: string;
}

export const studyings: studyingInterface[] = [
  {
    title: 'JS 핵심 메커니즘',
    goal: 'JS 동작에 대한 깊은 이해',
    refer: 'feat. 코어 자바스크립트, 모던 자바스크립트 Deep Dive',
  },
  {
    title: 'Next.js 기본',
    goal: 'SSR에 대한 이해 및 프레임워크 사용법',
    refer: 'Next.js 공식 문서',
  },
  {
    title: 'Redux 기본',
    goal: 'Flux패턴 이해 및 상태 관리 사용법',
    refer: 'Redux 공식 문서',
  },
];
