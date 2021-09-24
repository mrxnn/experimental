import { FC } from "react";
import { zeroPad } from "lib/numbers";
import { Post } from "types/post";

type PostMeta = Post & {
  index: number;
};

const BlogPostItem: FC<PostMeta> = ({ slug, title, summary, index }) => {
  return (
    <div key={slug} className="flex">
      <div className="w-20">
        <p className="text-sm translate-y-[3px]">{zeroPad(index + 1, 3)}</p>
      </div>
      <div className="flex flex-col space-y-2 flex-1">
        <h1 className="font-medium text-xl lg:text-[21px] mb-1">{title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-normal">{`February 2021 - 8 mins read`}</p>
        <p className="text-gray-600 dark:text-gray-400 ">{summary}</p>
      </div>
    </div>
  );
};

export default BlogPostItem;
