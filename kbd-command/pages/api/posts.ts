import { getPosts } from "lib/posts";

export default async function handler(_, res) {
  const posts = await getPosts();
  res.status(200).json(posts);
}
