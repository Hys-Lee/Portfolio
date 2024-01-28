import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Target from './Target';
import { motion } from 'framer-motion';
import Introduction from './components/Introduction';
import Techstacks from './components/Techstacks';
import MyProjects from './components/projects/MyProjects';
import StudyingContainer from './components/Studying/StudyingContainer';
function App() {
  // const [ani, setAni] = useState(0);
  // const list = { hidden: { opacity: 0.3 } };
  // const item = { hidden: { x: -50, opacity: 0.8 } };

  return (
    <>
      <div className=" flex flex-col  justify-around gap-20">
        <div className="  ">
          <Introduction />
        </div>
        <Techstacks />
        <MyProjects />
        <StudyingContainer />
      </div>

      {/* <h1 className=" font-bold">Vite + React</h1> */}
      {/* <Target />
      <input
        value={ani}
        onChange={(e) => {
          setAni(Number(e.target.value) % 1e15);
        }}
        placeholder="Input Number"
      />
      <div className=" flex flex-row justify-center">
        {!Number.isNaN(ani) && (
          <motion.div
            className=" size-10 bg-green-300"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 100 }}
            // animate={{
            //   x: ani % 50,
            //   scale: (ani % 5) + 1,
            //   rotate: ani % 360,
            // }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
          />
        )}
      </div>
      <div className="flex flex-col items-center">
        <motion.ul className="h-80 bg-slate-500 flex flex-col items-center">
          <motion.li className="size-10 bg-slate-300" />
          <motion.li className="size-10 bg-slate-300" />
          <motion.li className="size-10 bg-slate-300" />
        </motion.ul>
      </div> */}
    </>
  );
}

export default App;
