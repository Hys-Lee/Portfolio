import { intro } from '../../data/introduction';
import myPicture from '../../assets/myself.jpg';
export default function Introduction() {
  return (
    <>
      <div className=" pt-5 pb-5 w-full  flex flex-row justify-around gap-28">
        <div className=" w-[25%] bg-slate-950 flex flex-col justify-center">
          <img src={myPicture} alt="temp image"></img>
        </div>

        <section className=" pt-10 h-full flex flex-col justify-start gap-16">
          <h2 className="  font-bold  text-4xl">{intro.title}</h2>
          <ul className="flex flex-col gap-5">
            {intro.descripting.map((line) => (
              <li>
                <p className="font-light text-2xl">{line}</p>
              </li>
            ))}
          </ul>
          <div className="pt-10 flex flex-row justify-center gap-10">
            <a href={intro.url.notion}>
              <p className="font-bold text-3xl">Notion</p>
            </a>

            <a href={intro.url.github}>
              <p className="font-bold text-3xl">Github</p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
