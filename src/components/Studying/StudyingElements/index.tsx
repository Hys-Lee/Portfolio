import { studyingInterface } from '../../../data/studyings';
export default function StudyingElements({
  data,
}: {
  data: studyingInterface;
}) {
  return (
    <>
      <section className="flex flex-row  p-1 gap-5">
        <a>
          <h2 className=" text-white">- {data.title}</h2>
        </a>
        <p>: </p>
        <p>{data.goal}</p>
        <p>feat. {data.refer}</p>
      </section>
    </>
  );
}
