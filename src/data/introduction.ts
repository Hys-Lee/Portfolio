interface introInterface {
  title: string;
  descripting: string[];
  url: { notion: string; github: string };
}
export const intro: introInterface = {
  title: '즐겁게 공부하는 개발자 이상현입니다',
  descripting: [
    '성장하는 것을 즐기는 웹 개발자입니다.',
    '현재 프론트엔드를 공부하고 있습니다.',
    '풀 스택 웹 개발자가 되고자 합니다!',
  ],
  url: {
    notion:
      'https://indigo-arch-16e.notion.site/FrontEnd-8479d49c682d4d0e97b4dfc70a4b81c6?pvs=74',
    github: 'https://github.com/hys-lee',
  },
};
