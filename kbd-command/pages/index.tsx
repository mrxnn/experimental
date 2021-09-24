import { FC } from "react";
import Layout from "@/ui/Layout";
import BlogPostsList from "@/ui/BlogPostsList";
import { getMdx } from "@/lib/mdx";
import { Post } from "@/types/post";

const Home: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout>
      <BlogPostsList posts={posts} />
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
