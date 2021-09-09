import Layout from "../components/Layout";
import Articles from "../components/Articles";
import { motion } from "framer-motion";
import { getPosts } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <motion.p
        className="tracking-widest text-xs uppercase opacity-50"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 0.5, translateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 4 * 0.15 }}>
        10 Posts
      </motion.p>
      <Articles posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
