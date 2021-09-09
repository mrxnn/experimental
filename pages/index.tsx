import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPost";
import { getFrontMatters } from "../lib/mdx";
import { PostMeta } from "../types/post";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <Layout>
      <BlogPosts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getFrontMatters("blog");
  return {
    props: {
      posts: posts.sort(
        (a, b) =>
          Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
      ),
    },
  };
}
