import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";
import { join, extname } from "path";
import { Post } from "../types/post";

type DataType = {
  type: "blog" | "project";
};

export async function getMdx(type: DataType["type"]) {
  const PATH = join(process.cwd(), "data", type);

  return readdirSync(PATH)
    .filter((file) => extname(file) === ".mdx")
    .map((file) => {
      const source = readFileSync(join(PATH, file), "utf-8");
      const { data, content } = matter(source);
      const slug = file.replace(".mdx", "");
      return { ...data, slug, content } as Post;
    });
}
