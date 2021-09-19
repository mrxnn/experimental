import { zeroPad } from "@/lib/numbers";
import { Post } from "@/types/post";
import { ArrowRight } from "@/ui/Icons";
import Button from "@/ui/Button";

export default function BlogPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col items-start space-y-14 mb-32">
      <div className="flex text-gray-600 dark:text-gray-400">
        <p className="w-20">&mdash;</p>
        <p>Entry ({zeroPad(posts.length, 2)})</p>
      </div>

      {posts.map((post, index) => (
        <div key={post.slug} className="flex">
          <div className="w-20">
            <p className="text-sm translate-y-[3px]">{zeroPad(index + 1, 3)}</p>
          </div>
          <div className="flex flex-col space-y-2 flex-1">
            <h1 className="font-medium text-xl lg:text-[21px] mb-1">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-normal">{`February 2021 - 8 mins read`}</p>
            <p className="text-gray-600 dark:text-gray-400 ">{post.summary}</p>
          </div>
        </div>
      ))}

      <Button className="ml-20" text="More Posts" icon={<ArrowRight />} />
    </div>
  );
}
