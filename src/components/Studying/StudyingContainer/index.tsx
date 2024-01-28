import StudyingElements from '../StudyingElements';
import { studyings } from '../../../data/studyings';
export default function StudyingContainer() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold">Now Studying...</h1>
        <div className="flex flex-col items-start p-20 pt-0 gap-10">
          {studyings.map((study) => (
            <StudyingElements data={study} />
          ))}
        </div>
      </div>
    </>
  );
}
