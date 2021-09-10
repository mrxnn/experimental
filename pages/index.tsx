import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPosts";
import { getMdx } from "../lib/mdx";
import { Post } from "../types/post";
import Projects from "../components/Projects";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <BlogPosts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts: Post[] = await getMdx("blog");
  return {
    props: {
      posts: posts.sort(
        (a, b) =>
          Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
      ),
    },
  };
}
