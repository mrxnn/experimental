import { motion } from "framer-motion";
import { zeroPad } from "../lib/numbers";
import { PostMeta } from "../types/post";

export default function BlogPosts({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <BlogPostCount count={posts.length} />

      <BlogHeader />

      {posts?.map((post, index) => (
        <BlogPost
          key={index}
          {...post}
          index={zeroPad(index + 1, 3)}
          delay={index}
        />
      ))}
    </>
  );
}

// number of blog posts
function BlogPostCount({ count }: { count: number }) {
  return (
    <motion.p
      className="tracking-widest text-xs uppercase opacity-50"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 0.5, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 4 * 0.15 }}>
      {zeroPad(count, 2)} Posts
    </motion.p>
  );
}

// blog post preview
function BlogPost({ index, title, delay }) {
  return (
    <motion.div
      className="flex items-center border-b py-9"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, delay: (delay + 6) * 0.15 }}>
      <p className="w-36 md:w-52">{index}</p>
      <p className="flex-1">{title}</p>
    </motion.div>
  );
}

// header element
function BlogHeader() {
  return (
    <motion.div
      className="flex items-center border-b py-9"
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 5 * 0.15 }}>
      <p className="w-36 md:w-52">#</p>
      <p className="flex-1">Name</p>
      <svg
        width="19"
        height="19"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"></path>
      </svg>
    </motion.div>
  );
}
