import js from '../../assets/js.svg';
import aws from '../../assets/aws.svg';
import css from '../../assets/css3.svg';

import html from '../../assets/html5.svg';
import jest from '../../assets/jest.svg';
import nextjs from '../../assets/nextjs2.svg';
import react from '../../assets/reactjs.svg';
import typescript from '../../assets/typescript.svg';
import vitejs from '../../assets/vitejs.svg';
import tailwind from '../../assets/tailwind.svg';

// framer hooks
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
export default function Techstacks() {
  const { scrollY } = useScroll();
  const [scrollYvalue, setScrollYvalue] = useState(0);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('latest: ', latest);
    const tmp = latest <= 0 ? 0 : latest > 300 ? 300 : latest;
    setScrollYvalue(100 - (100 * tmp) / 300);
  });
  console.log('sY', (100 * scrollYvalue) / 400);
  0;
  const iconClassName = 'w-20';
  return (
    <>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold">Tech Stacks</h1>

        <div className="flex flex-row justify-center gap-24">
          <section>
            <h2 className=" font-semibold">Familiar</h2>
            <section className="">
              <img className={iconClassName} src={html} alt="html" />
              <img className={`${iconClassName}`} src={css} alt="css" />
              <img className={`${iconClassName}`} src={js} alt="JavaScript" />
              <img className={iconClassName} src={react} alt="React" />
              <img
                className={iconClassName}
                src={tailwind}
                alt="Tailwind CSS"
              />
            </section>
          </section>
          <section>
            <h2 className="font-semibold">Unfamiliar</h2>
            <section className="flex flex-col">
              <img
                className={iconClassName}
                src={aws}
                alt="amazon web service"
              />

              <img className={iconClassName} src={jest} alt="jest" />
              <img className={iconClassName} src={nextjs} alt="next.js" />
              <img
                className={iconClassName}
                src={typescript}
                alt="typescript"
              />
              <img className={iconClassName} src={vitejs} alt="vite" />
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
