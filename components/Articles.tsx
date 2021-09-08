import projects from "../data/projects.json";
import { zeroPad } from "../lib/numbers";

export default function Articles() {
  return (
    <div className="flex flex-col mt-[50vh]">
      <ArticleHeader />
      {projects.map(({ description }, index) => (
        <Article description={description} index={zeroPad(++index, 3)} />
      ))}
    </div>
  );
}

export function Article({ index, description }) {
  return (
    <div className="flex items-center border-b-2 py-9">
      <p className="w-36">{index}</p>
      <p className="flex-1">{description}</p>
    </div>
  );
}

export function ArticleHeader() {
  return (
    <div className="flex items-center border-b-2 py-9">
      <p className="w-36">#</p>
      <p className="flex-1">Article</p>
      <p className="rotate-90">&rarr;</p>
    </div>
  );
}
