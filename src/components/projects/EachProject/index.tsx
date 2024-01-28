import { projectContent } from '../../../data/projects';

export default function EachProject({
  image,
  data,
}: {
  image: string;
  data: projectContent;
}) {
  return (
    <>
      <div className=" pl-5 pr-5 flex md:flex-row md:justify-around md:gap-20 flex-col">
        <div className=" md:w-[100%] gap-10 flex flex-col justify-center">
          <img width="100%" src={image} alt="project1" />
        </div>
        <div className="w-[100%] flex flex-row justify-center">
          <section className="w-full flex flex-col items-cemter gap-5">
            <h2 className="font-semibold text-2xl">{data.name}</h2>
            {/* <section>
              <h3 className="  font-semibold">Goal</h3>
              <p className="font-light">{data.goal}</p>
            </section> */}

            <section className="flex flex-col gap-2">
              <h3 className="  font-semibold">Features</h3>
              <ul className="flex flex-col items-center">
                {data.feature.map((feat) => (
                  <li className=" ">
                    <p className=" font-light">{feat}</p>
                  </li>
                ))}
              </ul>

              {/* <p className="font-light">기능은 블라블라</p> */}
            </section>
            <section>
              <h3 className="  font-semibold">Tech Stack</h3>
              <ul className="flex flex-row justify-between gap-1 p-2">
                {data.techstack.map((tech) => (
                  <li className=" bg-slate-700 p-1 rounded-md">
                    <p className="font-light">{tech}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="  font-semibold ">URL</h3>
              <ul className="">
                {data.url.map((url) => (
                  <li>
                    <a href={url}>
                      <p className="font-light">{url}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            {/* <a href="히히">
              <h3>review</h3>
            </a> */}
            <p></p>
          </section>
        </div>
      </div>
    </>
  );
}
