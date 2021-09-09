import { motion } from "framer-motion";
import { zeroPad } from "../lib/numbers";
import { PostMeta } from "../types/post";

export default function BlogPosts({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="flex flex-col space-y-14 mb-32">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          className="flex"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: (index + 6) * 0.15 }}>
          <div className="w-20">
            <p className="text-sm translate-y-[3px]">{zeroPad(index + 1, 3)}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="font-medium text-xl mb-1">{post.title}</h1>
            <p className="text-sm opacity-60 font-light">{`2021-09-18 by Mayura Ramanayaka`}</p>
            <p className="opacity-60">{post.summary}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
