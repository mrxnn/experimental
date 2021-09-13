import { FC } from "react";
import Layout from "../ui/Layout";
import BlogPosts from "../ui/BlogPosts";
import { getMdx } from "../lib/mdx";
import { Post } from "../types/post";

const Home: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout>
      <BlogPosts posts={posts} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = () => {
  const posts: Post[] = getMdx("blog");
  return {
    props: {
      posts: posts.sort(
        (a, b) =>
          Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
      ),
    },
  };
};
