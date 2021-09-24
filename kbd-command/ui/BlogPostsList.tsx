import { zeroPad } from "@/lib/numbers";
import { Post } from "@/types/post";
import { ArrowRight } from "@/ui/Icons";
import Button from "@/ui/Button";
import BlogPostItem from "ui/BlogPostItem";

export default function BlogPostsList({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col items-start space-y-14 mb-32">
      <div className="flex text-gray-600 dark:text-gray-400">
        <p className="w-20">&mdash;</p>
        <p>Entry ({zeroPad(posts.length, 2)})</p>
      </div>

      {posts.map((post, index) => (
        <BlogPostItem key={index} {...post} index={index} />
      ))}

      <Button className="ml-20" text="More Posts" icon={<ArrowRight />} />
    </div>
  );
}
