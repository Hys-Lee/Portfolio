import EachProject from '../EachProject';
import makenotion from '../../../assets/makenotion.png';
import investrecord from '../../../assets/investrecord.png';
import taskchecker from '../../../assets/taskchecker.jpg';
import {
  makenotionContent,
  investrecordContent,
  taskcheckerContent,
} from '../../../data/projects';

export default function MyProjects() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-around gap-10">
          <h1 className="text-5xl font-bold">Projects</h1>
          <div className="flex flex-col justify-evenly gap-10">
            <section className="">
              <div className="flex flex-row justify-start">
                <h2 className="text-2xl font-semibold pb-5 pt-5">Finished</h2>
              </div>
              <EachProject image={makenotion} data={makenotionContent} />
            </section>
            <section>
              <div className="flex flex-row justify-start">
                <h2 className="text-2xl font-semibold pb-5 pt-5">Paused</h2>
              </div>
              <EachProject image={investrecord} data={investrecordContent} />
            </section>
            <section>
              <div className="flex flex-row justify-start">
                <h2 className="text-2xl font-semibold pb-5 pt=5">Processing</h2>
              </div>
              <EachProject image={taskchecker} data={taskcheckerContent} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
